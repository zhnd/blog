# Redux基础知识

## Redux是什么

Redux是一个专注于状态管理的库：

* Redux专注于状态管理，和React并不是强结合的关系，使用Vue和Angular都可以结合Redux进行开发实践，也就是Redux和React解耦。

* 单一状态，也就是整个应用只会有一个综合状态，另外Redux是单向数据流。


## Redux核心概念

### store

保存数据的地方，整个应用的数据都保存在store中，每一个应用只能有一个store。

store的创建方式：

```javascript
import { createStore } from 'redux';

const createStore(fn);
```

上面代码中，`createStore`函数接受一个函数参数，用来生成store对象。

### state

由于在tore中保存着应用的所有数据，因此需要获取某个时点的数据，就要对store生成快照。这种时点的数据集合，就叫做 State。

state的获取方式：

```javascript
import { createStore } from 'redux';

const createStore(fn);

const state = store.getState();
```

### action

在应用中，用户只能操作view层，如果需要改变状态数据，那么只能通过view发出通知去改变state，action就是view发出的通知。

action是一个对象，必须具有type属性，用来表示action的名称。

```javascript
const action = {
  type: 'ADD_GUN',
};
```

在实际应用中，往往会有多种消息需要发送，此时我们可以定义一个函数来生成action，这个函数就称为action creator。

```javascript
function addGUN() {
  return {
    type: ADD_GUN,
  }
}

function removeGUN() {
  return {
    type: REMOVE_GUN,
  }
}
```

### Reducer

view发出通知，store收到action以后，必须更新state，view才会发生变化，这个state的计算过程就是Reducer。

Reducer是一个函数，它接受当前state和action两个参数，然后返回一个新的state。

```javascript
const ADD_GUN = 'add machine gun';
const REMOVE_GUN = 'remove machine gun';

// reducer
function counter(state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default:
      return 10;
  }
}
```

### store.dispatch()

派发事件，传递action。

### store.subscribe()

设置监听，一旦state发生变化，就会自动执行这个函数。

小例子：

```javascript
import { createStore } from 'redux';

const ADD_GUN = 'add machine gun';
const REMOVE_GUN = 'remove machine gun';

// Reducer
function counter(state = 0, action) {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case REMOVE_GUN:
      return state - 1;
    default:
      return 10;
  }
}

// action creator
function addGUN() {
  return {
    type: ADD_GUN,
  }
}

function removeGUN() {
  return {
    type: REMOVE_GUN,
  }
}

// create store
const store = createStore(counter);

// get init state
const init = store.getState();
console.log(init);

// set subscribe function
function listener() {
  const current = store.getState();
  console.log(`now,has gun ${current}`);
}
store.subscribe(listener);

// dispatch events
store.dispatch(addGUN());

store.dispatch(removeGUN());
```

## Redux中间件

Redux原生方法applyMiddlewares()用来使用中间件，作用是将所有中间件组成一个数组，并且依次执行，但是中间件的执行有次序要求，使用前需要查看相关文档。


## Redux处理异步

* 使用redux-thunk插件：

```bash
npm install redux-thunk
```

* 开启中间件并使用redux-thunk：

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
```

* 修改createStore为：

```javascript
const store = createStore(counter, applyMiddleware(thunk));
```
* 创建一个新的action：

```javascript
function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGUN());
    }, 2000);
  }
}
```
* 派发新建的action：
```javascript
store.dispatch(addGunAsync());
```

## chrome中的Redux调试工具

* 在chrome中安装扩展工具：Redux DevTools
* 添加并修改createStore：

```javascript
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(counter, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
```

更多使用方式可以到：[这里](https://github.com/zalmoxisus/redux-devtools-extension)查看。

## 使用react-redux

使用react-redux可以更加方便的管理应用状态，同时还可以忘记subscribe，使用Provider和connect两个接口来链接。

具体使用方式：

* Provider组件应用在最外层，传入store即可，只需要用一次；
* connect负责从外部获取组件需要的参数；
* connect可以用装饰器的方式来写。

使用示例：
* 使用react-redux：[点击查看](https://github.com/z2x/Feed-Up/commit/1cd34ce1fe6b5185912dbb578627c0c91def6a09)

* 使用装饰器的方式写connect：[点击查看](https://github.com/z2x/Feed-Up/commit/e6f011d916cf7978975c58b6c521926ef9d32092)
