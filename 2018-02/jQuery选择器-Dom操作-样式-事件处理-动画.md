小练习：

#### 题目1： jQuery 能做什么？

jQuery是一个快速，小巧，功能丰富的JavaScript库，它使得HTML文档遍历和操作，事件处理，动画和AJax等功能等实现更加方便，同时jQuery还支持插件机制，为开发者提供了更加便捷的开发；此外，jQuery还具有良好的浏览器兼容性，能够提升开发效率。

#### 题目2： jQuery 对象和 DOM 原生对象有什么区别？如何转化？

jQuery对象即用jQuery类库的选择器获得的对象；

DOM原生对象即用原生JavaScript方法获得的对象。

##### 区别
1. jQuery对象是jQuery独有的，jQuery`$`封装的方法返回的是一个类数组对象，可以使用jQuery里的方法，无法使用DOM对象的任何方法；
2. DOM对象不能使用jQuery里的方法。

##### 转化

1.  jQuery对象 --> DOM原生对象

```html
  <div class="content">
    <p>this is test.</p>
  </div>
```

* `[index]`

```javascript
  var $content = $('.content');
  var content = $content[0];
  console.log(content); //  <div class="content">
```

* `.get(index)`

```javascript
  var $content = $('.content');
  var newContent = $content.get(0);
  console.log(newContent);  //  <div class="content">
```

2. DOM原生对象 --> jQuery对象

只需要讲DOM对象使用`$()`包裹起来，就可以得到jQuery对象：

```javascript
  var content = document.getElementsByClassName('content');
  var $content = $(content);
```

#### 题目3：jQuery中如何绑定事件？bind、unbind、delegate、live、on、off都有什么作用？推荐使用哪种？使用on绑定事件使用事件代理的写法？

jQuery封装了很好的API，可以方便的进行事件处理，在1.7之前的版本中jQuery处理事件有多个方法，作用各不相同，后来统一的使用on/off方法。

##### `.bind()`为一个元素绑定一个事件处理程序。

```javascript
.bind( eventType [, eventData ], handler(eventObject) )
```

1. eventType：类型: String；一个包含一个或多个DOM事件类型的字符串，比如"click"或"submit,"或自定义事件的名称。
2. eventData：类型: Anything；一个对象，它包含的数据键值对映射将被传递给事件处理程序。
3. handler(eventObject)：
类型: Function()；每当事件触发时执行的函数。

*在jQuery 3.0中，.bind()已被标记为弃用。*

##### `.unbind()`从元素上删除一个以前附加事件处理程序。

```javascript
.unbind( [eventType ] [, handler(eventObject) ] )
```

1. eventType：类型: String；一个包含一个或多个 DOM 事件类型的字符串，比如 "click" 或 "submit," 或自定义的事件名。
2. handler：类型: Function( Event eventObject )；这个函数今后不在执行。

*在jQuery 3.0中，.unbind()已被标记为弃用。*

##### `.delegate()`为所有匹配选择器（selector参数）的元素绑定一个或多个事件处理函数，基于一个指定的根元素的子集，匹配的元素包括那些目前已经匹配到的元素，也包括那些今后可能匹配到的元素。

```javascript
.delegate( selector, eventType, handler(eventObject) )
```

1. selector：类型: String，选择器字符串，用于过滤器触发事件的元素。
2. eventType：类型: String；一个包含一个或多个用空格隔开的JavaScript事件类型的字符串，比如"click"或"keydown,"或自定义事件的名称。
3. handler(eventObject)：类型: Function()；每当事件触发时执行的函数。

*在jQuery 3.0中，.delegate()已被标记为弃用。*

##### `.live()`附加一个事件处理器到匹配目前选择器的所有元素，现在和未来。

```javascript
.live( events, handler(eventObject) )
```

events：类型: String；一个包含一个JavaScript事件类型的字符串，比如"click"或"keydown,"或自定义事件的名称。从jQuery 1.4开始，字符串可以包含多个空格分隔的事件类型或自定义事件的名称。
handler(eventObject)：类型: Function()；每当事件触发时执行的函数。

从jQuery1.7开始，  .live() 方法已经过时了。请使用.on()附加事件处理程序。 旧版本的jQuery中用户，应优先使用.delegate()来取代.live()。

##### `.on()`在选定的元素上绑定一个或多个事件处理函数。

```javascript
.on( events [,selector ] [,data ], handler(eventObject) )
```

1. events：一个或多个空格分隔的事件类型和可选的命名空间，或仅仅是命名空间，比如"click", "keydown.myPlugin", 或者 ".myPlugin"

2. selector：一个选择器字符串，用于过滤出被选中的元素中能触发事件的后代元素。如果选择器是 null 或者忽略了该选择器，那么被选中的元素总是能触发事件

3. data：当一个事件被触发时，要传递给事件处理函数的event.data

4. handler(eventObject)：事件被触发时，执行的函数。若该函数只是要执行return false的话，那么该参数位置可以直接简写成 false

```javascript
$('#dataTable tbody').on('click', function() {
  console.log($(this).text());
});
```

##### `.off()`移除一个事件处理函数。

```javascript
.off( events [, selector ] [, handler ] )
```

```javascript
var foo = function () {
  // code to handle some kind of event
};

// ... now foo will be called when paragraphs are clicked ...
$("body").on("click", "p", foo);

// ... foo will no longer be called.
$("body").off("click", "p", foo);
```

#### 题目4：jQuery 如何展示/隐藏元素？

##### `.hide()`/`.show()`

```javascript
.hide([duration ] [,easing ] [,complete ])
```

`.hide()`可以用来隐藏元素，没有参数的时候等同于直接设置`display`属性。

1. duration：表示隐藏动画持续时间。以毫秒为单位的，数值越大，动画越慢。字符串 'fast' 和 'slow' 分别代表200和600毫秒的延时。
2. easing：表示过渡使用哪种缓动函数，jQuery自身提供"linear" 和 "swing"，其他可以使用相关的插件。
3. complete： 在动画完成时执行的函数。

```javascript
$('#dataTable tbody').hide('slow', 'linear', function() {
  console.log('animation complete.');
});
```

`.show()`用于显示元素，用法和`.hide()`类似。

##### `.css()`

可以使用`.css()`方法来为指定元素添加样式属性值。

* 显示元素：

```javascript
$('dataTable tbody').click(function() {
  $(this).css('display', 'inline-block');
});
```

* 隐藏元素：
```javascript
$('dataTable tbody').click(function() {
  $(this).css('display', 'none');
});
```

##### `.addClass()`/`removeClass()`

可以在样式表中添加样式后再使用`.addClass()`/`removeClass()`进行元素的隐藏和显示。

#### 题目5： jQuery 动画如何使用？

##### 基础动画

1. `.hide()`：用来隐藏元素。
2. `.show()`：用来显示元素。
3. `.toggle()`：用来切换元素的隐藏、显示，类似于toggleClass，用法和show、hide类似。

##### 渐变

1. `.fadeIn()`：通过淡入的方式显示匹配元素。

```javascript
.fadeIn( [duration ] [, easing ] [, complete ] )
```

2. `.fadeOut()`：通过淡出的方式隐藏匹配元素。

```javascript
.fadeOut( [duration ] [, easing ] [, complete ] )
```

3. `.fadeTo()`：调整匹配元素的透明度。

```javascript
.fadeTo( duration, opacity [, easing ] [, complete ] )
```

4. `fadeToggle()`：通过匹配的元素的不透明度动画，来显示或隐藏它们，方法执行匹配元素的不透明度动画。当被可见元素调用时，元素不透明度一旦达到0，display样式属性设置为none ，所以元素不再影响页面的布局。

##### 滑动

1. `.slideDown()`：用滑动动画显示一个匹配元素，方法将给匹配元素的高度的动画，这会导致页面的下面部分滑下去，弥补了显示的方式。

2. `slideUp()`：用滑动动画隐藏一个匹配元素，方法将给匹配元素的高度的动画，这会导致页面的下面部分滑上去，当一个隐藏动画后，高度值达到0的时候，display 样式属性被设置为none，以确保该元素不再影响页面布局。 display 样式属性将被设置为none，以确保该元素不再影响页面布局。

3. `.slideToggle()`：用滑动动画显示或隐藏一个匹配元素，方法将给匹配元素的高度的动画，这会导致页面中，在这个元素下面的内容往下或往上滑。display属性值保存在jQuery的数据缓存中，所以display可以方便以后可以恢复到其初始值。

如果一个元素的display属性值为inline，然后是隐藏和显示，这个元素将再次显示inline。当一个隐藏动画后，高度值达到0的时候，display 样式属性被设置为none，以确保该元素不再影响页面布局。

##### 自定义动画

1. `.animate()`：根据一组 CSS 属性，执行自定义动画。

```javascript
.animate( properties [, duration ] [, easing ] [, complete ] )
```

properties：类型: PlainObject；一个CSS属性和值的对象,动画将根据这组对象移动。

duration (默认: 400)：类型: Number or String；一个字符串或者数字决定动画将运行多久。（注：默认值: "normal"， 三种预定速度的字符串("slow", "normal", 或 "fast")或表示动画时长的毫秒数值(如：1000) ）

easing (默认: swing)：类型: String；一个字符串，表示过渡使用哪种缓动函数。（译者注：jQuery自身提供"linear" 和 "swing"）

complete：类型: Function()；在动画完成时执行的函数。

jquery animate demo：[点击查看](https://z2x.github.io/blog/2018-02/code/jQuery-animate-demo.html)

#### 题目6：如何设置和获取元素内部 HTML 内容？如何设置和获取元素内部文本？

* `.html()`获取集合中第一个匹配元素的HTML内容 或 设置每一个匹配元素的html内容。

* `.text()`得到匹配元素集合中每个元素的文本内容结合，包括他们的后代，或设置匹配元素集合中每个元素的文本内容为指定的文本内容。

#### 题目7：如何设置和获取表单用户输入或者选择的内容？如何设置和获取元素属性？

* `.val()`获取匹配的元素集合中第一个元素的当前值或设置匹配的元素集合中每个元素的值。

* `.attr()`获取匹配的元素集合中的第一个元素的属性的值或 设置每一个匹配元素的一个或多个属性。

练习小作品：[查看地址](https://z2x.github.io/blog/2018-02/code/drop.html)


