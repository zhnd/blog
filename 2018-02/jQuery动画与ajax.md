小练习：

#### 题目1： jQuery 中， `$(document).ready()`是什么意思？

让指定事件在DOM准备就绪时加载或触发。

##### 与window.onload的区别

1. 执行时间：
* `window.onload`必须等到页面内包括图片的所有元素加载完成后才能执行。
* `$(document).ready()`是DOM结构绘制完毕后就开始执行。

2. 编写个数不同
* window.onload通常情况下只能绑定一个执行函数，如果绑定多个，只会执行最后一个，但能创建一个匿名函数容纳需绑定的函数，再将该匿名函数绑定至window或者其他方法来实现绑定多个函数。
* `$(document).ready()`可以简单的同时绑定多个函数，并且得到执行。

3. 简化写法
* window.onload不可简写。
* `$(document).ready(function(){})`可以简写为`$(function(){})`。

#### 题目2： $node.html()和$node.text()的区别?

* `$node.html()`:获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容。
* `$node.text()`:用来读取或者修改元素的文本内容，包括他们的后代。

#### 题目3： `$.extend()` 的作用和用法?

**将两个或更多对象的内容合并到第一个对象。**

`jQuery.extend( [deep ], target, object1 [, objectN ] )`

当我们提供两个或多个对象给`$.extend()`，对象的所有属性都添加到目标对象（target参数）。

如果只有一个参数提供给`$.extend()`，这意味着目标参数被省略。在这种情况下，jQuery对象本身被默认为目标对象。这样，我们可以在jQuery的命名空间下添加新的功能。

默认情况下，第一个参数会被修改，如果我们需要保留原对象，那么可以传递一个空对象作为目标对象：

```javascript
var object = $.extend({}, object1, object2);
```

#### 题目4： jQuery 的链式调用是什么？

在一条代码中对指定对象按顺序调用多种方法，节省代码量，提高代码的效率。

#### 题目5： jQuery 中 data 函数的作用

在匹配元素上存储任意相关数据 或 返回匹配的元素集合中的第一个元素的给定名称的数据存储的值。

#### 题目6： 写出以下功能对应的 jQuery 方法：

* 给元素 $node 添加 class active，给元素 $noed 删除 class active

```javascript
$node.addClass('active');
$node.removeClass('active');
```

* 展示元素$node, 隐藏元素$node

```javascript
$node.show();
$node.hide();
```

* 获取元素$node 的 属性: id、src、title， 修改以上属性

```javascript
// 获取属性
$node.attr('id');
$node.attr('src');
$node.attr('title');

// 修改属性
$node.attr('id', value);
$node.attr('src', value);
$node.attr('title', value);
```

* 给$node 添加自定义属性data-src

```javascript
$node.attr('data-src', value);
```

* 在$ct 内部最开头添加元素$node

```javascript
$ct.prepend($node);
```

* 在$ct 内部最末尾添加元素$node

```javascript
$ct.apend($node);
```

* 删除$node

```javascript
$node.remove();
```

* 把$ct里内容清空

```javascript
$ct.empty();
```

* 在$ct 里设置 html `<div class="btn"></div>`

```javascript
$ct.html('<div class="btn"></div>');
```

* 获取、设置$node 的宽度、高度(分别不包括内边距、包括内边距、包括边框、包括外边距)

```javascript
// 获取内容宽度和高度
$node.width();
$node.height();

// 获取内容宽度和高度（包括padding，但不包括border）
$node.innerWidth();
$node.innerHeight();

// 获取内容宽度和高度（包括padding，border和可选的margin）
$node.outerWidth();
$node.outerHeight();

// 获取内容宽度和高度（包括padding，border，margin）
$node.outerWidth(true);
$node.outerHeight(true);
```

* 获取窗口滚动条垂直滚动距离

```javascript
$(window).scrollTop()
```

* 获取$node 到根节点水平、垂直偏移距离

```javascript
$node.offset();
```

* 修改$node 的样式，字体颜色设置红色，字体大小设置14px

```javascript
$node.css({
  'color': 'red',
  'font-size': '14px'
});
```

* 遍历节点，把每个节点里面的文本内容重复一遍

```javascript
$node.each(function() {
  var $this = $(this);
  var content = $this.text();
  $this.text(content + content);
});
```

* 从$ct 里查找 class 为 .item的子元素

```javascript
$ct.find('.item');
```

* 获取$ct 里面的所有孩子

```javascript
$ct.children();
```

* 对于$node，向上找到 class 为'.ct'的父亲，在从该父亲找到'.panel'的孩子

```javascript
$node.parents('.ct').find('.panel');
```

* 获取选择元素的数量

```javascript
$node.length;
```

* 获取当前元素在兄弟中的排行

```javascript
$node.index();
```

#### 题目7：用jQuery实现以下操作

* 当点击$btn 时，让 $btn 的背景色变为红色再变为蓝色

```javascript
$btn.on('click', function() {
  $btn.css('background', 'red');
  setTimeout(function() {
    $btn.css('background', 'blue');
  },1000);
});
```

* 当窗口滚动时，获取垂直滚动距离

```javascript
$(window).scroll(function() {
  console.log($(window).scrollTop());
});
```

* 当鼠标放置到$div 上，把$div 背景色改为红色，移出鼠标背景色变为白色

```javascript
$div.on('mouseover', function() {
  $div.css('background', 'red');
});

$div.on('mouseout', function() {
  $div.css('background', '#fff');
});
```

* 当鼠标激活 input 输入框时让输入框边框变为蓝色，当输入框内容改变时把输入框里的文字小写变为大写，当输入框失去焦点时去掉边框蓝色，控制台展示输入框里的文字

```javascript
$input.on('focus', function() {
  $input.css('border-color', 'blue');
});

$input.on('keyup', function() {
  $input.val($input.val().tpUpperCase());
});

$input.on('blur', function() {
  $input.css('border-color', 'transparent');
});
```

* 当选择 select 后，获取用户选择的内容

```javascript
$node.on('change', function() {
  console.log($(this).val());
});
```

#### 使用jQuery实现加载更多

GitHub地址：[点击查看](https://github.com/z2x/code-learning/tree/master/web/server-mock/jquery-loadmore)
