---
title: Excessive Stack Depth Comparing Types - 调查与解决
excerpt: "本文记录了在 TypeScript 中遇到 Excessive stack depth comparing types 错误的调查与解决过程，包括错误原因分析、调试日志查看、以及通过优化类型定义解决问题的详细步骤。"
publishedDate: 2025-04-16
tags:
  - dev-notes
---

在项目中执行 `tsc --noemit` 时，遇到了 `Excessive stack depth comparing types` 错误。本文将记录我解决此问题的过程，包括分析错误原因、排查过程以及最终的解决方案。

## 错误定位

### 1. 错误信息

首先，通过执行 `tsc --noemit`，终端出现如下错误信息：

```text
Excessive stack depth comparing types
```

这表明 TypeScript 的类型检查在比较类型时，栈深度超出了最大限制。

### 2. 确认 `tsc --noemit` 执行命令

通过查看 `package.json` 配置，确认项目的 TypeScript 编译命令为：

```
"tsc --noemit"
```

此命令会执行 TypeScript 编译器，但不生成输出文件，仅进行类型检查。

### 3. 进入 TypeScript 源码进行分析

在 `node_modules/typescript/lib/tsc.js` 中搜索关键字 `Excessive stack depth comparing types`，找到对应的 `key`：

```text
Excessive_stack_depth_comparing_types_0_and_1
```

继续搜索 `Excessive_stack_depth_comparing_types_0_and_1`，发现该错误在 `relationCount > 0` 时被抛出。

### 4. 查找 `overflow = true` 的赋值位置

搜索 `overflow = true`，发现两个相关代码位置，分别添加调试日志：

```javascript
console.log(">>> relationCount -> true", relationCount);
```

```javascript
console.log(
  ">>> overflow --> true [sourceDepth || targetDepth]",
  sourceDepth,
  targetDepth
);
console.log("=== TYPE DEPTH LIMIT REACHED ===");
console.log("Source type:", typeToString(source));
console.log("Target type:", typeToString(target));
console.log(
  "Source stack:",
  sourceStack.map((t) => typeToString(t))
);
console.log(
  "Target stack:",
  targetStack.map((t) => typeToString(t))
);
```

### 5. 观察 `tsc --noemit` 的控制台输出

通过观察 tsc --noemit 输出的日志，发现 Source stack 中包含了大量的类型信息，尤其是新增的类型定义。通过调试日志，我们得到了更详细的类型堆栈信息。

## 错误原因分析

经分析，问题的根本原因在于 类型嵌套 的加深。项目的数据模型发生了变更，导致类型之间的关联性增多。codegen 生成的代码增加了大量的类型嵌套，特别是像 `Maybe<T>` 这样的联合类型，进一步加剧了类型检查的深度，最终导致 TypeScript 超过了 sourceDepth 的最大限制（默认为 100），触发了错误。

## 解决方案

### 1. 增加调试日志，查看最大深度

在 `tsc` 代码中手动放开 `sourceDepth` 和 `targetDepth` 限制，并添加日志：

```javascript
if (sourceDepth >= 100 || targetDepth >= 100) {
  console.log(
    `深度检查点: sourceDepth=${sourceDepth}, targetDepth=${targetDepth}`
  );
}
```

执行后输出：

```
深度检查点: sourceDepth=105, targetDepth=104
```

可以看到，sourceDepth 超过了 100，触发了错误。

### 2. 分析 `Source stack`

通过查看 Source stack 中的类型信息，发现有许多类型是重复的。例如：

```
"WhereInput | null","WhereInput"
```

怀疑是 `Maybe` 类型 `(T | null | undefined)` 导致了额外的类型检查，这些重复的类型增加了堆栈的深度。

### 3. 修改 `codegen` 配置，优化类型定义

在 `codegen` 配置文件中调整 `maybeValue` 配置：

```yaml
maybeValue: T | undefined
```

原先生成的类型：

```typescript
export type Maybe<T> = T | null | undefined;
```

修改后再次运行 `tsc`，`Source stack` 数量下降约 50%，但 `Target stack` 仍然较大。

### 4. 深入分析 TypeScript 类型检查策略

TypeScript 在检查 `Maybe<WhereInput>` (即 `WhereInput | null | undefined`) 类型时，会拆分联合类型，并逐个成员检查兼容性，例如：

1. `WhereInput | null` 是否兼容 `SerializableObject`
2. `WhereInput` 是否兼容 `SerializableObject`

优化 `Maybe` 类型后，减少了部分嵌套检查，最终 `tsc` 执行成功。

## 优化后的要点

1. 类型嵌套过深：Maybe 类型的嵌套会导致类型检查时栈深度过大，进而引发 Excessive stack depth comparing types 错误。
2. 修改 codegen 配置：通过调整 Maybe 类型的定义（T | null | undefined → T | undefined），有效减少了类型堆栈的深度。
3. 深入分析 TypeScript 类型检查：理解 TypeScript 在检查联合类型时的机制，避免不必要的类型拆解，优化了类型兼容性检查的过程。

## 使用 TypeScript 过程中，尽量不用或者减少使用类型自动推断

自动推断类型在 TypeScript 中是一个非常强大的特性，它能减少显式类型声明的工作量，但在某些情况下，过度依赖类型推断可能会导致意料之外的结果，特别是在复杂的类型结构和大规模的代码库中。过度依赖自动推断可能导致以下问题：

• **类型堆栈过深**

类型推断过程中，尤其是复杂的联合类型或递归类型，可能会生成嵌套过深的类型结构。例如，Maybe<T> 类型可能会被自动推断为 T | null | undefined，这会增加类型检查的深度。

• **推断不准确**

TypeScript 的类型推断并不总是能准确捕捉到开发者的意图。在某些场景下，自动推断的类型可能并非最佳选择，导致后续代码出现类型不匹配或不必要的类型转换。

• **性能问题**

在类型检查过程中，TypeScript 需要推断并验证复杂的类型结构。过多的推断操作可能导致类型检查速度变慢，甚至触发栈溢出错误。

为了避免这些问题，建议使用以下方式避免类型自动推断：

1. **使用显式类型声明**

尽可能为复杂的类型，尤其是泛型和联合类型，提供明确的类型声明。显式声明类型能帮助 TypeScript 更精确地理解类型结构，并减少不必要的类型推断。例如，使用 Maybe<T> 类型时，可以考虑明确声明为 T | undefined 而不是 T | null | undefined。

2. **限制递归类型的使用**

递归类型会导致类型推断的深度急剧增加。在使用递归类型时，要特别小心，避免无意中创建过深的类型层级。可以考虑将递归类型限制在较小的深度范围内，或使用更简单的类型结构来避免过深的嵌套。

3. **显式推断类型**

对于需要通过推断来确定类型的地方，可以使用 TypeScript 提供的 as 关键字明确指定类型，而不是让编译器推断。比如当你知道某个值的类型时，最好显式地声明它，而不是依赖 TypeScript 的推断。

4. **避免冗余类型定义**

对于复杂的联合类型或类型交集，尽量避免冗余定义。冗余的联合类型会增加类型检查的复杂度，从而导致栈深度过深。通过减少不必要的联合类型（如 T | null | undefined）来优化类型定义，能够有效减小类型检查的负担。

通过减少类型自动推断的过度使用，显式定义类型，能够使 TypeScript 更加高效地进行类型检查，避免因类型层级过深而引发 Excessive stack depth comparing types 错误。

## 结语

如果你在项目中遇到类似的 stack depth 错误，不妨回顾一下代码生成过程中的类型定义，并适当优化。尤其是使用像 Maybe 这类联合类型时，尽量避免不必要的类型嵌套，这将有效减少类型检查的深度，避免出现栈溢出的错误。
