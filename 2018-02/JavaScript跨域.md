# 同源策略

浏览器出于安全方面的考虑，只允许与本域下的接口交互。不同源的客户端脚本在没有明确授权的情况下，不能读写对方的资源。

如何判断文档来源是否相同：

1. 看协议是否相同；
2. 看域名是否相同；
3. 看端口号是否相同。

# 跨域以及几种实现形式

js跨域是指js在不同的域之间进行数据传输和通信，比如使用ajax向不同域请求数据并进行返回。

跨域的几种实现方式：

## JSONP（JSON with Padding）

JSONP通过动态`<script>`元素来实现，使用时为src属性指定一个跨域URL，这时候便可以有能力从其他域加载资源。因为JSONP是有效的JavaScript代码，在请求完成以后，便可以将响应加载到页面中。

## CORS（cross-origin resource sharing）

CORS，跨域资源共享，定义了正在必须访问跨域资源时，浏览器与服务器应该如何沟通。基本思想是使用自定义的HTTP头部让浏览器与服务器进行沟通，从而决定请求或响应状态。

在使用XMLHttpRequest发送请求时，服务器会根据origin头部信息来决定是否响应：

* 如果服务器认为可以接受请求，就在`Access-Control-Allow-Origin`头部中发会相同的源信息（如果是公共资源，可以发回`'*'`），比如：

```javascript
'Access-Control-Allow-Origin': 'http://localhost:8080'
```

此时浏览器就会开始处理响应，接收数据并进行处理。

* 如果没有这个头部信息，或者有这个头部但源信息不匹配，浏览器就会驳回请求。

CORS 的优缺点：

1. 使用简单方便，更为安全
2. 支持 POST 请求方式
3. CORS 是一种新型的跨域问题的解决方案，存在兼容问题，仅支持 IE 10 以上

参考信息：[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

## 降域（通过修改document.domain来跨子域）

假如`http://www.example.com/a.html` 和 `http://example.com/b.html`两个页面需要进行跨域通信,只需将这两个页面的`document.domain`都设成自身或者更高一级的父域名即可。

这种方法只能解决主域相同而二级域名不同的情况。




## postmessage

postMessage 是 HTML5 新增加的一项功能，跨文档消息传输(Cross Document Messaging)，目前：Chrome 2.0+、Internet Explorer 8.0+, Firefox 3.0+, Opera 9.6+, 和 Safari 4.0+ 都支持这项功能。

语法格式为：

```javascript
otherWindow.postMessage(message, targetOrigin, [transfer]);

/*
message：要发送到其他window的数据；
targetOrigin：通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。这个机制用来控制消息可以发送到哪些窗口。
transfer（可选）：是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。
*/
```

小练习：
GitHub地址：[点击查看](https://github.com/z2x/code-learning/tree/master/web/cross-domain)

