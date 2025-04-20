---
title: Codegen 加速开发：从数据结构到模版代码
excerpt: "Codegen 的使用减少了重复劳动、提高了类型安全，特别适合个人项目或小团队开发。Codegen 虽不是万能，但用得好可以极大提高开发体验和项目质量。"
publishDate: "2025-04-20"
isFeatured: true
tags:
  - dev-notes
---

在日常开发中，我们常常会面对大量重复性的工作，比如：

- 定义 API 请求以及响应类型
- 编写接口调用方法
- 维护前后端一致的数据结构等。

这些代码通常遵循一定的结构以及实现模式，我们将这些内容称为模版代码，这些模版代码虽然重要，但是写起来枯燥，重复性高，容易出错。

## Codegen 是什么？它到底能做什么？

简单来说，Codegen 就使用已经定义好的结构或者规范，比如：API 文档、数据库或者 Data Schema、接口定义等，自动生成代码，常见的用途包括：

- 自动生成 API 请求方法和类型声明；
- 自动同步后端和前端的数据结构；
- 自动生成表单校验逻辑、文档、测试代码等等。

一句话总结它的核心价值就是：**把规范当作数据源，自动生成那些你原本要手写的重复代码。**

在这篇文章里，我将主要分享我在实际项目中使用 Codegen 的三个典型场景，包括：

- 根据 Swagger 文档自动生成前端请求方法和类型；
- 在 GraphQL 中生成 Apollo Hooks；
- 在Rust + TypeScript 的 Tauri 桌面 APP 项目中用 typeshare 实现共享类型定义。

## 实践一：从 Swagger/OpenAPI 自动生成 API 请求代码

在通常的项目实践中，通常使用 RESTful API 来进行数据交互，后端使用 Swagger/OpenAPI 来维护接口文档，这时候我们可以用工具来把这些文档转化为前端可以直接使用的代码，比如请求函数、类型定义等。

我个人推荐 [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)，它使用简单，生成的代码也比较现代。

使用示例：

```
npm install --save-dev swagger-typescript-api
npx swagger-typescript-api generate --path ./swagger.json
```

更多使用示例以及详细文档可以点击进入项目仓库进行查看。

生成后的代码结构通常包含：

- 每个接口的请求函数（带参数和返回值类型）；
- 接口的 TypeScript 类型声明。

带来的好处：

- 类型自动同步，不在担心接口变动导致不一致，后端 API 字段 breaking Change，可以直接通过 tsc 进行检查；
- 不用在手写请求方法；
- 更新 Swagger 文件，前端自动同步更新代码。

这个实践的前置准备是：后端维护好一份完备的 Swagger 文档。

相关学习资源：

- [https://swagger.io/](https://swagger.io/)
- 学习时，可以直接使用 Swagger 官方的 [Live Demo](https://petstore.swagger.io/)，JSON 文件[链接🔗](https://petstore.swagger.io/v2/swagger.json)。

## 实践二：GraphQL + Apollo 自动生成请求 Hooks

如果你用的是 GraphQL，那 codegen 就更天然适配了。GraphQL 本身就强调 schema 驱动开发，你定义了查询语句，工具就能根据它生成类型和 hooks。

我在项目中用的是 [GraphQL Codegen](https://the-guild.dev/graphql/codegen)，它支持多种客户端，比如 Apollo、React Query 等。

配置方式示例：

```typescript
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../graphql-schema/schema.gql",
  documents: "src/**/*.graphql",
  ignoreNoDocuments: true,
  generates: {
    "src/generated/graphql-hook.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
```

在 npm scripts 中增加：

```
"generate": "graphql-codegen --config graphql-codegen.ts",
```

执行后即可生成代码，直接调用相应的 Hook 进行数据交互。

### 好处：

- 自动生成类型和 Hook，开发体验非常丝滑；
- 改 GraphQL schema 或 query 会自动更新类型；
- 无需手写请求逻辑和参数验证。

## 实践三：Rust + TypeScript 的类型共享：Tauri + typeshare

我在做一个桌面应用时使用了 Tauri，前端是 React + TypeScript，后端是 Rust。这个组合的一个难点就是：Rust 和 TypeScript 是两个完全独立的类型系统，怎么保证它们的数据结构一致？

我找到了一个非常好用的工具：typeshare。它可以把 Rust 的结构体转成多种语言的类型定义，其中就包括 TypeScript。

### 示例

Rust 端定义：

```rust
use typeshare::typeshare;

#[typeshare]
#[derive(Serialize, Deserialize)]
pub struct User {
    pub id: u32,
    pub name: String,
}
```

生成后的 TypeScript 类型：

```typescript
export interface User {
  id: number;
  name: string;
}
```

### 使用效果

- 后端改结构体，前端类型同步更新；
- 避免了手动对照字段、出错；
- 非常适合全栈统一开发体验。

如果你想了解真实的项目应用，可以查看我的 Query Box 项目：[https://github.com/zhnd/query-box](https://github.com/zhnd/query-box)，欢迎大家 Star。

Codegen 不是银弹，但在适合的场景里，它真的能显著提升开发效率：

- 减少重复劳动，让你少写点“螺丝钉代码”；
- 提高类型安全，避免前后端不一致带来的 bug；
- 更快构建 MVP，尤其适合个人项目或小团队开发。

在我的个人项目中，这种“自动化思维”已经变成了一个默认选项：只要能 codegen 的地方，我都会优先考虑自动生成，哪怕一开始配置起来稍微复杂一些，长期一定是值得的。

如果你还没试过 codegen，不妨从一个简单的 Swagger 或 GraphQL 项目开始。你会发现 —— 原来很多你每天写的代码，其实都可以不用写。

---

如果你对这方面有其他实践经验、遇到有趣的问题，欢迎一起交流 👋。我的 GitHub 页面在：[https://github.com/zhnd](https://github.com/zhnd)。
