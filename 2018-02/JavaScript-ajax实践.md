小练习：

#### 题目1： ajax 是什么？有什么作用？

##### 关于ajax

AJAX即“Asynchronous JavaScript and XML”（异步的JavaScript与XML技术），是一种使用现有标准的新方法，能够在不重新加载整个页面的情况下，使网页实现异步更新。

传统方法提交表单数据时，需要向服务器发送请求，服务器接收并处理请求以后再返回新的网页，不仅浪费带宽，网页刷新还会给用户带来不好的浏览体验。

##### ajax的作用

1. 更新页面内容时，不需要刷新，提供更好的用户体验；
2. 与服务器实现异步通讯，响应效率更高；
3. 良好的技术支持。

#### 题目2： 前后端开发联调需要注意哪些事情？后端接口完成前如何 mock 数据？

##### 注意事项

1. 充分了解项目需求和内容设计；
2. 项目实现约定：比如接口类型（post／get）和名称；发送和接收数据类型和格式等。

##### mock数据

1. 使用node.js搭建一个web服务器，这里推荐使用[server-mock](https://www.npmjs.com/package/server-mock)，安装方式为：`npm install -g server-mock`；还可以使用[easy-mock](http://www.easy-mock.com)；
2. 创建`router.js`文件并进行编辑，用于接收和处理发过来的请求；
3. 在HTML文件中调用即可。

参考信息：[https://www.npmjs.com/package/server-mock](https://www.npmjs.com/package/server-mock)

#### 题目3：点击按钮，使用 ajax 获取数据，如何在数据到来之前防止重复点击?

处理思路：阻止用户在数据到来之前，使用状态锁防止重复点击。


#### 题目4：实现加载更多的功能，效果范例426，后端在本地使用server-mock来模拟数据

```html
  <ul class="content"></ul>
  <button id="load-more" class="btn">加载更多</button>
```

```css
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  .content li {
    list-style: none;
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
    cursor: pointer;
  }

  #load-more {
    display: block;
    text-align: center;
    width: 80px;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    margin: 0 auto;
  }
```

```javascript
  var btn = document.querySelector('#load-more');
  var content = document.querySelector('.content');
  var pageIndex = 0;
  var isDataArrive = true;

  btn.addEventListener('click', function() {

    if (!isDataArrive) {
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          var result = JSON.parse(xhr.responseText);
          console.log(result);

          var fragment = document.createDocumentFragment();
          for (var i = 0; i < result.length; i++) {
            var node = document.createElement('li');
            node.innerText = result[i];
            fragment.appendChild(node);
          }
          content.appendChild(fragment);

          pageIndex = pageIndex + 5;
        }
        isDataArrive = true;
      }
    };
    xhr.open('get', '/loadMore?index=' + pageIndex + '&length=5', true);
    xhr.send();
    isDataArrive = false;
  });
```

```javascript
app.get('/loadMore', function(req, res) {

  var curIdx = req.query.index;
  var len = req.query.length;
  var data = [];

  for (var i = 0; i < len; i++) {
    data.push('新闻' + (parseInt(curIdx) + i));
  }

  setTimeout(function() {
    res.send(data);
  }, 5000);

});
```


