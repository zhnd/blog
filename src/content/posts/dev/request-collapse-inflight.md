---
title: 前端性能优化：请求折叠与 inflight 请求队列
excerpt: "深入探讨请求折叠（Request Collapsing）技术在前端性能优化中的应用。通过 inflight 请求队列避免重复 API 调用，提升页面加载速度，降低服务器压力。包含实现原理介绍以及 React Query 中的应用。"
publishedDate: 2025-06-08
tags:
  - dev-notes
---

在 MDN 上看 HTTP Caching 相关内容时，了解到 **request collapse** 技术，挺感兴趣的，研究一番发现可以在实际开发场景中应用，这里写一篇文章进行记录。

相关文档地址：[HTTP caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching)

note: 阅读 MDN 上的资料时，请尽可能地阅读英文原版，中文内容会出现图片加载异常、内容过时的情况。

## ✨ 什么是请求折叠（Request Collapsing）？

请求折叠（Request Collapsing），又叫请求去重，是一种**避免重复请求同一个资源**的技术手段。

它的核心思想是：

> 如果多个请求在同一时间请求相同的数据，只发出一个请求，其余请求共享这个请求的结果。

### 🧠 举个例子：

假设一个页面中多个组件都请求 `/api/user/info`，但实际上只需要请求一次即可。请求折叠就能在第一个请求发起时，记录这个请求的状态，后续再有同样请求时，不再发起新的请求，而是复用第一个请求的 Promise。

---

## 🚀 请求折叠作为前端优化手段的优势

### ✅ 避免冗余请求

页面中多个组件或逻辑重复请求同一接口是常见现象，尤其在组件独立开发或渲染时。请求折叠可以有效合并这些请求，节省带宽和计算资源。

### ✅ 提升用户体验

通过避免重复请求，减少网络开销，页面加载时间更短，避免因为重复渲染带来的闪屏或不一致状态。

### ✅ 降低后端压力

尤其在高并发场景下，统一请求折叠可以大幅减少接口访问量，保护后端系统稳定性。

---

## 🧩 实现请求折叠的关键技术：inflight 请求队列

### 🔍 什么是 inflight 请求队列？

Inflight 请求队列是一个临时缓存结构，用于存储“正在请求中”的 Promise。

它通常以 `Map<string, Promise>` 形式实现，key 是请求地址或唯一标识，value 是请求 Promise。

### 💡 基本实现方式

```ts
const inflightMap = new Map<string, Promise<any>>();

function fetchWithInflight(url: string): Promise<any> {
  if (inflightMap.has(url)) {
    return inflightMap.get(url)!;
  }

  const req = fetch(url)
    .then((res) => res.json())
    .finally(() => inflightMap.delete(url));

  inflightMap.set(url, req);
  return req;
}
```

### 🛠 使用方式

```ts
fetchWithInflight("/api/user").then((data) => {
  console.log("User Info:", data);
});
```

---

## 🔧 应用场景

| 应用场景       | 描述                                                |
| -------------- | --------------------------------------------------- |
| 多组件共享数据 | 页面多个区域渲染用户信息、配置等公共数据            |
| 快速交互防抖   | 用户频繁点击或切换 tab 页，多次触发相同请求         |
| SSR / SSG      | 在服务器端收集数据时，统一折叠请求，避免重复发起    |
| 请求缓存层封装 | 结合 localStorage/memory cache 实现更复杂的缓存策略 |

---

## ⚠️ 注意事项

- 不适用于非幂等请求（如 POST、PUT 等）
- 请求标识（key）必须足够唯一，如包含 query 参数、header 签名等
- 在失败时应正确清除 inflight 项，避免缓存错误请求

---

## 🧱 与常见前端库结合

- **React Query / SWR**：内置请求折叠与缓存共享机制
- **Axios 封装**：可以通过 interceptor 实现 inflight 去重逻辑
- **Vue + Pinia / Recoil**：结合状态管理工具统一管理 inflight 状态

---

## 📚 深入理解：TanStack useQuery 中的 in-flight 状态

之前使用 TanStack [useQuery](https://tanstack.com/query/latest/docs/framework/react/reference/useQuery) 时，一直没太理解 `isFetching`、`isRefetching`、`isLoading` 这三个状态的区别。从 in-flight 请求队列的角度来看，它们的含义就很清晰了：

### 🔍 核心状态系统的 in-flight 含义

```ts
const {
  data,
  status, // QueryStatus: 'pending' | 'error' | 'success'
  fetchStatus, // FetchStatus: 'fetching' | 'paused' | 'idle'
  isPending, // 派生状态：status === 'pending'
  isFetching, // 派生状态：fetchStatus === 'fetching'
  isRefetching, // 派生状态：isFetching && !isPending
  isLoading, // 派生状态：isFetching && isPending
} = useQuery({
  queryKey: ["user", userId],
  queryFn: () => fetchUser(userId),
});
```

### 📊 两套状态系统详解

TanStack Query 使用两套独立的状态系统来精确描述查询状态：

#### 1️⃣ `status` (QueryStatus) - 数据状态

描述查询数据的整体状态，关注"数据是否可用"：

- **`pending`**：没有缓存数据且尚未完成任何查询尝试
- **`error`**：查询尝试失败，对应的 `error` 属性包含错误信息
- **`success`**：查询成功获得响应，`data` 属性包含可用数据

#### 2️⃣ `fetchStatus` (FetchStatus) - 请求状态

描述 `queryFn` 的执行状态，关注"网络请求是否进行中"：

- **`fetching`**：`queryFn` 正在执行（包括初始请求和后台刷新）
- **`paused`**：查询想要获取，但已暂停
- **`idle`**：查询当前未获取任何内容

#### `isFetching` - 任何时候的 in-flight 请求

- **官方定义**：`queryFn` 正在执行时为 `true`，包括初始 pending 和后台重新获取
- **in-flight 视角**：`inflightMap.has(queryKey)` 返回 `true`
- **场景**：无论是首次加载还是后台刷新，只要有网络请求就是 `true`

```ts
// 伪代码实现
const isFetching = inflightMap.has("user-123");
// 等价于：isPending || isRefetching
```

#### `isLoading` - 首次请求的 in-flight 状态

- **官方定义**：查询的首次获取正在进行时为 `true`
- **等价关系**：`isFetching && isPending`
- **in-flight 视角**：`isPending && inflightMap.has(queryKey)`
- **场景**：组件首次挂载，没有缓存数据时的首次请求状态

```ts
// 伪代码实现
const isLoading = isPending && inflightMap.has("user-123");
// isPending 表示没有缓存数据且从未成功获取过
```

#### `isRefetching` - 后台重新获取的 in-flight 状态

- **官方定义**：后台重新获取正在进行时为 `true`，不包括初始 pending
- **等价关系**：`isFetching && !isPending`
- **in-flight 视角**：`!isPending && inflightMap.has(queryKey)`
- **场景**：已有缓存数据，但正在后台重新验证或手动刷新

```ts
// 伪代码实现
const isRefetching = !isPending && inflightMap.has("user-123");
// !isPending 表示已有缓存数据或之前获取过数据
```

### 🎯 状态组合的实际应用

```tsx
function UserProfile({ userId }: { userId: string }) {
  const { data, isFetching, isRefetching, isLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
    staleTime: 5 * 60 * 1000, // 5分钟后数据过期
  });

  // 首次加载：显示骨架屏
  if (isLoading) {
    return <UserSkeleton />;
  }

  return (
    <div>
      {/* 有数据时显示，重新获取时显示刷新指示器 */}
      <UserInfo data={data} />
      {isRefetching && <RefreshIndicator />}

      {/* 任何网络请求进行时禁用操作按钮 */}
      <EditButton disabled={isFetching} />
    </div>
  );
}
```

### 💡 in-flight 队列在 useQuery 中的优势

1. **自动请求折叠**：相同 `queryKey` 的多个组件共享同一个 in-flight 请求
2. **智能缓存策略**：区分首次加载和数据刷新，提供不同的 UI 反馈
3. **并发控制**：避免重复请求，自动管理请求生命周期

### 🔧 状态判断逻辑总结

| 状态           | status     | fetchStatus | in-flight | 使用场景       |
| -------------- | ---------- | ----------- | --------- | -------------- |
| `isPending`    | `pending`  | `*`         | ✅/❌     | 判断是否有缓存 |
| `isFetching`   | `*`        | `fetching`  | ✅        | 禁用交互按钮   |
| `isLoading`    | `pending`  | `fetching`  | ✅        | 首次加载骨架屏 |
| `isRefetching` | `!pending` | `fetching`  | ✅        | 后台刷新指示器 |

**状态组合关系**：

- `isPending` = `status === 'pending'`
- `isFetching` = `fetchStatus === 'fetching'`
- `isLoading` = `isFetching && isPending`
- `isRefetching` = `isFetching && !isPending`

这种设计让开发者能够精确控制不同场景下的 UI 状态，提供更好的用户体验。

到这里终于理解了几个状态背后的设计意图，这里总结一下供学习和参考。

注：写这篇 blog 内容时，Tanstack Query 是 V5 版本。

---

## ✨ 总结

请求折叠和 inflight 请求队列是前端性能优化中简单但非常有效的手段之一。

它不仅提升了页面加载速度，还能优化资源利用，减少服务器负担，提升整体系统稳定性。

在实际开发中，将这类“请求去重”机制作为基础工具封装，对于构建高性能、高可维护性的前端系统大有裨益。

如果你正在构建中大型应用，不妨把 inflight 请求管理纳入你的网络请求策略中吧。
