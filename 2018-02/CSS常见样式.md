# 块级元素和行内元素分别有哪些？动手测试并列出4条以上的特性区别

## 块级元素

块级元素占据其父元素（容器）的整个空间，通常浏览器会在块级元素前后另起一个新行。

### 用法

**块级元素只能出现在&lt;body&gt;元素内。**

### 块级元素与行内元素

块级元素与行内元素有几个关键区别：

1. 格式
    默认情况下，块级元素会占据一行的空间，而行内元素只占据自身宽度空间；
2. 内容模型
    一般块级元素可以包含行内元素和其他块级元素。这种结构上的包含继承区别可以使块级元素创建比行内元素更”大型“的结构。而行内元素只能包含文本和行内元素。
3. 样式控制
    块元素中高度，行高以及顶和底边距都可以控制；内联元素中高，行高及顶和底边距不可改变。
4. 转换
    行内元素变成块级元素，那么就只需要在该标签上加上样式 display:block


HTML 标准中块级元素和行内元素的区别至高出现在 4.01 标准中。在 HTML5，这种区别被一个更复杂的内容类别代替。”块级“类别大致相当于 HTML5 中的流内容类别，而”行内“类别相当于 HTML5 中的措辞内容类别，不过除了这两个还有其他类别。

### 块级元素列表

| 元素              | 解释     |
| --------------- | ------ |
| &lt;address&gt; | 联系方式信息 |
| &lt;article&gt; | 文章内容   |
| &lt;aside&gt;   | 伴随内容   |
| &lt;audio&gt;   | 音频播放   |
| &lt;video&gt;   | 视频播放   |
| &lt;blockquote&gt;    |  块引用
| &lt;canvas&gt;        |  绘制图形 |
| &lt;dd&gt;            |  定义列表中条目描述 |
| &lt;div&gt;           |  文档分区 |
| &lt;dl&gt;            |  定义列表  |
| &lt;fieldset&gt;      |  表单元素分组 |
| &lt;figcaption&gt;    |  图文信息组标题 |
| &lt;figure &gt;       |  图文信息组  |
| &lt;header &gt;       |  区段头或者页头 |
| &lt;footer&gt;        |  区段尾或者页尾 |
| &lt;form &gt;         |  表单
| &lt;h1～h6&gt;        | 标题级别 |
| &lt;hr &gt;           |  水平分割线 |
| &lt;noscript&gt;      |  不支持脚本或禁用脚本时显示的内容 |
| &lt;ol&gt;            |  有序列表 |
| &lt;ul&gt;            |  无序列表 |
| &lt;output&gt;        |  表单输出 |
| &lt;p&gt;             |  行
| &lt;pre &gt;          |  预格式化文本 |
| &lt;section&gt;       |  一个页面片段 |
| &lt;table&gt;         |  表格
| &lt;tfoot&gt;         |  表脚注 |

参考信息：[信息来源](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)

## 行内元素

一个行内元素只占据它对应标签的边框所包含的空间。

默认情况下，行内元素不会以新行开始，而块级元素会新起一行。

### 行内元素列表

| 元素               | 解释               |
| ---------------- | ---------------- |
| &lt;b&gt;        | 粗体字              |
| &lt;big&gt;      | 大号文本             |
| &lt;i&gt;        | 斜体字              |
| &lt;small&gt;    | 小号文本             |
| &lt;tt&gt;       | 打字机文本            |
| &lt;abbr&gt;     | 缩写               |
| &lt;acronym&gt;  | 只取首字母的缩写         |
| &lt;cite&gt;     | 引用(citation)     |
| &lt;code&gt;     | 计算机代码文本          |
| &lt;dfn&gt;      | 一个定义项目           |
| &lt;em&gt;       | 强调文本             |
| &lt;kbd&gt;      | 键盘文本             |
| &lt;strong&gt;   | 强调文本             |
| &lt;samp&gt;     | 计算机代码样本          |
| &lt;var&gt;      | 文本的变量部分          |
| &lt;a&gt;        | 锚                |
| &lt;bdo&gt;      | 文字方向             |
| &lt;br&gt;       | 简单的折行            |
| &lt;img&gt;      | 图像               |
| &lt;map&gt;      | 图像映射             |
| &lt;object&gt;   | 内嵌对象             |
| &lt;q&gt;        | 短的引用             |
| &lt;script&gt;   | 客户端脚本            |
| &lt;span&gt;     | 文档中的节            |
| &lt;sub&gt;      | 下标文本             |
| &lt;sup&gt;      | 上标文本             |
| &lt;button&gt;   | 按钮 (push button) |
| &lt;input&gt;    | 输入控件             |
| &lt;label&gt;    | input 元素的标注      |
| &lt;select&gt;   | 选择列表（下拉列表）       |
| &lt;textarea&gt; | 多行的文本输入控件        |

参考信息：[信息来源1](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elemente)，[信息来源2](http://www.w3school.com.cn/tags/index.asp)

# 什么是 CSS 继承? 哪些属性能继承，哪些不能？

每一个元素都是文档树的一部分，除了最顶级的HTML元素，每个元素都有其对应的父级元素，每一个父级元素的CSS属性值都可以被应用到它的子元素中去。

## 不可以继承的属性

display、margin、border、padding、background、height、min-height、max- height、width、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi。

## 可以继承的属性

azimuth、border-collapse、border-spacing、caption-side、color、cursor、direction、elevation、empty-cells、font-family、font-size、font-style、font-variant、font-weight、font、letter-spacing、line-height、list-style-image、list-style-position、list-style-type、list-style、orphans、pitch-range、pitch、quotes、richness、speak-header、speak-numeral、speak-punctuation、speak、speech-rate、stress、text-align、text-indent、text-transform、visibility、voice-family、volume、white-space、widows、word-spacing

## 所有元素可继承：

visibility、cursor

## 内联元素可继承：

letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction。
## 块状元素可继承：

text-indent和text-align

##列表元素可继承：

list-style、list-style-type、list-style-position、list-style-image

## 表格元素可继承：

border-collapse

参考信息：[信息来源1](https://www.w3.org/TR/CSS21/propidx.html)，[信息来源2](https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited)，[信息来源3](http://blog.163.com/yhwwen@126/blog/static/170468853201326421822/)

# 如何让块级元素水平居中？如何让行内元素水平居中?

## 块级元素居中

### 定宽

```css
.center {
    margin: 0 auto;
}
```

### 不定宽

参考信息：[信息来源](https://juejin.im/post/58f818bbb123db006233ab2a)

## 行内元素居中

给其父元素设置 text-align:center

# 单行文本溢出加 ...如何实现?

```css
p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

# px, em, rem 有什么区别

px： 固定单位

em: 相对单位，相对于父元素字体大小

rem: 相对单位，相对于根元素(html)字体大小

vw vh: 相对单位，1vw 为屏幕宽度的1% 兼容性

# 解释下面代码的作用?为什么要加引号? 字体里\5b8b\4f53代表什么?

```html
body{
  font: 12px/1.5 tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
}
```

对应以下css样式：

```css
body{
    font-size: 12px;
    line-height: 1.5;
    font-family: tahoma,arial,'Hiragino Sans GB','\5b8b\4f53',sans-serif;
    <!-- 在字体名中，如果包含空格，则需要为字体名添加引号 -->
}
```

```JavaScript
unescape("%u5B8B%u4F53");
//"宋体"
```


# 关于CSS样式的几个小练习

1. 绘制三角形：[查看链接](https://z2x.github.io/code-learning/web/border-graph.html);
2. 居中的应用：[查看链接](https://z2x.github.io/code-learning/web/container.html);
3. 小卡片制作：[查看链接](https://z2x.github.io/code-learning/web/card.html);
4. 按钮的制作：[查看链接](https://z2x.github.io/code-learning/web/button.html).


