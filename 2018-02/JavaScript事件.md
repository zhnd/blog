小练习：

#### 题目1：DOM0事件和DOM2级在事件监听使用方式上有什么区别？

##### DOM0级

Dom0级事件处理程序是将一个函数赋值给一个事件处理程序属性，要使用JavaScript指定事件处理程序，首先要获得一个要操作的对象的引用，然后通过其事件处理程序属性（这些属性通常全部小写，例如：onclick），指定事件处理程序。

```javascript
 var btn = document.getElementById('myBtn');
 btn.onclick = function() {
   console.log(this.id);
 };
 ```

 如果需要删除DOM0级事件处理程序，只需将相应属性值设置为null。

 ```javascript
 btn.onclick = null;
 ```

 * 优点：简单且跨浏览器；
 * 缺点：一个事件处理程序只能对应一个处理函数，给一个事件添加多个事件处理程序,后面的程序会覆盖前面的程序。

##### DOM2级

DOM2级事件定义了两个方法用于处理指定和删除事件处理程序的操作：

1. `addEventListener`
2. `removeEventListener`

所有的DOM节点都包含这两个方法，并且它们都接受三个参数：

1. 事件类型
2. 事件处理方法
3. 布尔参数，如果是true表示在捕获阶段调用事件处理程序，如果是false，则是在事件冒泡阶段处理程序。

```javascript
 var btn = document.getElementById('myBtn');
 var handler = function() {
   console.log(this.id);
 };

 // 添加事件处理程序
 btn.addEventListener('click', handler, false);

 // 删除事件处理程序
 btn.removeEventListener('click', handler, false);
 ```

* 优点：能够实现同时绑定多个事件而不覆盖；
* 缺点：IE并不支持`addEventListener`和`removeEventListener`方法。


#### 题目2：attachEvent与addEventListener的区别？

1. 参数个数不相同，这个最直观，`addEventListener`有三个参数，`attachEvent`只有两个，`attachEvent`添加的事件处理程序只能发生在冒泡阶段，`addEventListener`第三个参数可以决定添加的事件处理程序是在捕获阶段还是冒泡阶段处理（我们一般为了浏览器兼容性都设置为冒泡阶段）

2. 第一个参数意义不同，`addEventListener`第一个参数是事件类型（比如`click`，`load`），而`attachEvent`第一个参数指明的是事件处理函数名称（`onclick`，`onload`）

3. 事件处理程序的作用域不相同，`addEventListener`的作用域是元素本身，this是指的触发元素，而`attachEvent`事件处理程序会在全局变量内运行，`this`是`window`，所以刚才例子才会返回`undefined`，而不是元素`id`

4. 为一个事件添加多个事件处理程序时，执行顺序不同，`addEventListener`添加会按照添加顺序执行，而`attachEvent`添加多个事件处理程序时顺序无规律(添加的方法少的时候大多是按添加顺序的反顺序执行的，但是添加的多了就无规律了)，所以添加多个的时候，不依赖执行顺序的还好，若是依赖于函数执行顺序，最好自己处理，不要指望浏览器。

#### 题目3：解释IE事件冒泡和DOM2事件传播机制？

* IE的事件冒泡

事件开始时由最具体的元素接收，然后逐级向上传播到较为不具体的元素；

![IE bubble](images/IE-bubble.png)

* DOM事件流

DOM2级事件规定事件流包括三个阶段，事件捕获阶段，处于目标阶段，事件冒泡阶段，首先发生的是事件捕获，为截取事件提供机会，然后是实际目标接收事件，最后是冒泡阶段。

![DOM2 bubble](images/DOM2-bubble.png)

#### 题目4：如何阻止事件冒泡？ 如何阻止默认事件？

* 阻止事件捕获、冒泡：

```javascript
event.stopPropagation();
```

* 阻止事件默认行为：

```javascript
event.preventDefault();
```

* 阻止冒泡的兼容写法，值为false为允许冒泡：

```javascript
event.cancelBubble = true;

event.cancelBubble = false;
```

* 阻止默认事件的兼容写法，值为flase为允许默认事件：

```javascript
event.returnValue = true;

event.returnValue = false;
```

#### 题目5：有如下代码，要求当点击每一个元素li时控制台展示该元素的文本内容。不考虑兼容

```html
 <ul class="ct">
   <li>Hello</li>
   <li>World</li>
   <li>!</li>
 </ul>
```

```javascript
 var ct = document.querySelector('.ct');
 ct.addEventListener('click', function(e) {
   if (e.target.tagName.toLowerCase() === 'li') {
     console.log(e.target.innerText);
   }
 }, false);
 ```

#### 题目6：补全代码，要求：

当点击按钮开头添加时在`<li>`这里是`</li>`元素前添加一个新元素，内容为用户输入的非空字符串；当点击结尾添加时在最后一个 li 元素后添加用户输入的非空字符串.
当点击每一个元素li时控制台展示该元素的文本内容。

```html
  <ul class="ct">
    <li>Hello</li>
    <li>World</li>
    <li>!</li>
  </ul>
  <input id="input-content" placeholder="please input content" type="text">
  <button id="btn-add-start">开头添加</button>
  <button id="btn-add-end">结尾添加</button>
```

```javascript
  var ct = document.querySelector('.ct'),
    addStartBtn = document.querySelector('#btn-add-start'),
    addEndBtn = document.querySelector('#btn-add-end'),
    inputContent = document.querySelector('#input-content');

  ct.addEventListener('click', function(e) {
    if (e.target.tagName.toLowerCase() === 'li') {
      console.log(e.target.innerText);
    }
  });

  addStartBtn.addEventListener('click', function(e) {
    if (/^\s*$/.test(inputContent.value)) {
      console.log('输入的是空字符串');
    } else {
      var li = document.createElement('li');
      li.innerText = inputContent.value;
      ct.insertBefore(li, ct.firstChild);
    }
  }, false);

  addEndBtn.addEventListener('click', function(e) {
    if (/^\s*$/.test(inputContent.value)) {
      console.log('输入的是空字符串');
    } else {
      var li = document.createElement('li');
      li.innerText = inputContent.value;
      ct.appendChild(li);
    }
  }, false);
  ```

#### 题目7： 补全代码，要求：当鼠标放置在li元素上，会在img-preview里展示当前li元素的data-img对应的图片。

```html
  <ul class="ct">
    <li data-img="images/people-sea.jpg">鼠标放置查看图片1</li>
    <li data-img="images/Sky-background.jpg">鼠标放置查看图片2</li>
    <li data-img="images/sky-sea-finish.jpg">鼠标放置查看图片3</li>
  </ul>
  <div class="img-preview"></div>
```

```javascript
  var ul = document.querySelector('.ct');
  var imgPreview = document.querySelector('.img-preview');
  ul.addEventListener('mouseover', function(e) {
    if (e.target.tagName.toLowerCase() === 'li') {
      var img = e.target.getAttribute('data-img');
      imgPreview.innerHTML = '<img src = "' + img + '">';
    }
  }, false);
```


