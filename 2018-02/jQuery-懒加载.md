#### 题目1：如何判断一个元素是否出现在窗口可视范围（浏览器的上边缘和下边缘之间，肉眼可视）。

```javascript
  function checkShow($node) {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var offsetTop = $node.offset().top;
    if (offsetTop < scrollTop + windowHeight && offsetTop > scrollTop) {
      return true;
    }
    return false;
  }
```

#### 题目2：当窗口滚动时，判断一个元素是不是出现在窗口可视范围。每次出现都在控制台打印 true 。用代码实现

```javascript
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var offsetTop = $node.offset().top;
  if (offsetTop < scrollTop + windowHeight && offsetTop > scrollTop) {
    console.log(true);
  }
});
```

#### 题目3：当窗口滚动时，判断一个元素是不是出现在窗口可视范围。在元素第一次出现时在控制台打印 true，以后再次出现不做任何处理。用代码实现

```javascript
$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var offsetTop = $node.offset().top;
  if (offsetTop < scrollTop + windowHeight && offsetTop > scrollTop) {
    if ($node.attr('is-loaded')) {
      console.log(true);

      // 为元素添加一个自定义属性, 第一次出现时更改该属性. 这样就不会多次输出true
      $node.addClass('is-loaded');
    }
  }
});
```

#### 题目4： 图片懒加载的原理是什么？

1. 为图片新增一个自定义属性，并将并将需要最终显示在屏幕上的src属性值保存在自定义属性中；
2. 判断图片是否应该出现在屏幕可视范围内；
3. 判断图片是否已经加载；
4. 如果没有加载，将图片的真实src值设置为自定义属性值；
5. 显示优化。

#### 题目5： 实现视频中的图片懒加载效果

查看源码：[点击查看](https://github.com/z2x/code-learning/blob/master/web/delay-loading.html)
效果预览：[点击查看](https://anddi.gitee.io/blog/2018-02/code/delay-loading.html)
