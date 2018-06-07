在实际工作中，有的时候需要实现两行字数不同的文字实现左右对齐，比如姓名和联系方式。下面我们就来演示一下如何实现这种效果。
先上一张最终效果图：

![](/images/1.png)

首先写好需要的内容，并用span元素包括，使用br元素进行转行。

为了方便CSS调试和效果展示，建议为每一步都添加border。

关键知识点：

* text-align: justify

> text-align CSS属性定义行内内容（例如文字）如何相对它的块父元素对齐。text-align 并不控制块元素自己的对齐，只控制它的行内内容的对齐。

将值设置为justify时，文字向两侧对齐，但对最后一行没有效果。

* 在文字的下面使用伪类添加一行，设置其宽度为文字所在行的宽度，接着设置文字和新增行两端对齐。

具体的实现代码为：
```html
<div>
  <span>姓名</span>
  <br />
  <span>联系方式</span>
</div>
```

```css
div {
  border: 1px solid red;
  font-size: 20px;
}
span {
  border: 1px solid green;
  display: inline-block;
  width: 4em;
  text-align: justify;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
}

span::after {
  content:'';
  display: inline-block;
  width: 100%;
  border: 1px solid blue;
}
```
