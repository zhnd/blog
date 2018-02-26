学习地址为：[http://www.w3school.com.cn/html/](http://www.w3school.com.cn/html/)

主要包含一些基本知识点和代码示例。

<!--more-->

# HTML 简介

## 什么是HTML ？

HTML 是用来描述网页的一种语言。

* HTML 指的是超文本标记语言 (Hyper Text Markup Language)

* HTML 不是一种编程语言，而是一种标记语言 (markup language)

* 标记语言是一套标记标签 (markup tag)

* HTML 使用标记标签来描述网页


## 什么是HTML 标签？

HTML 标记标签通常被称为 HTML 标签 (HTML tag)。

* HTML 标签是由尖括号包围的关键词，比如 &lt;html&gt;

* HTML 标签通常是成对出现的，比如 &lt;p&gt;和 &lt;/p&gt;

* 标签对中的第一个标签是开始标签，第二个标签是结束标签

* 开始和结束标签也被称为开放标签和闭合标签

# HTML基础

## 如何设置HTML标题？

HTML标题通过&lt;h1&gt; &nbsp; - &nbsp; &lt;h6&gt;等标签进行定义的。

例如：

```html
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
```

## 如何添加HTML段落？

在HTML 中段落通过&lt;p&gt;标签进行定义。

```html
<p>这里是一个段落。</p>
```

## 如何添加HTML链接？

在HTML 中通过&lt;a&gt;标签进行链接的添加。

```html
<a href="http://www.google.com">这里是一个链接</a>
```

## 如何在HTML中添加图像？

在HTML 中通过&lt;img&gt;标签添加图片。

```html
<img src="" alt="">
```

##  HTML  元素

**HTML 文档是由 HTML 元素定义的。**

### 什么是HTML元素？

从开始标签到结束标签的所有代码。

### 什么是HTML元素语法？

* HTML 元素以开始标签起始

* HTML 元素以结束标签终止

* 元素的内容是开始标签与结束标签之间的内容

* 某些 HTML 元素具有空内容（empty content）

* 空元素在开始标签中进行关闭（以开始标签的结束而结束）

* 大多数 HTML 元素可拥有属性

### HTML元素可以嵌套使用

```html
<html>
  <head></head>
  <body>
    <p></p>
  </body>
</html>
```

小提示：

1. HTML标签一般都是成对出现的；

2. HTML元素允许为空，空元素开开始标签中进行闭合；

3. 尽可能的使用小写标签。

##HTML属性

**属性为HTML元素提供附加信息**

##格式化

### 如何对文本进行格式化？

```html
<b>This text is bold</b>

<br />

<strong>This text is strong</strong>

<br />

<big>This text is big</big>

<br />

<em>This text is emphasized（强调）</em>

<br />

<i>This text is italic（斜体）</i>

<br />

<small>This text is small</small>

<br />

This text contains
<sub>subscript（下标）</sub>

<br />

This text contains
<sup>superscript（上标）</sup>
```

### 如何对空格和空行控制？

```html
<pre>
for i = 1 to 10
     print i
next i
</pre>
```

### 如何显示不同类型的计算机输出？

```html
<code>Computer code:计算机代码类型</code>
<br />
<kbd>Keyboard input:键盘输入</kbd>
<br />
<tt>Teletype text：打字机文本</tt>
<br />
<samp>Sample text</samp>
<br />
<var>Computer variable：计算机变量</var>
<br />
```

###如何在文档中输入地址？

使用&lt;address&gt;标签进行输入。

```html
<address>
Written by <a href="mailto:webmaster@example.com">Donald Duck</a>.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```
### 如何实现缩写？

1. 使用&lt;abbr&gt;标签;

2. 使用&lt;acronym&gt;标签;

```html
<abbr title="etcetera">etc.</abbr>
<br />
<acronym title="World Wide Web">WWW</acronym>

<p>在某些浏览器中，当您把鼠标移至缩略词语上时，title 可用于展示表达的完整版本。</p>
```

###如何改变文字方向？

使用&lt;bdo&gt;标签进行文字方向的改变。

```html
<bdo dir="rtl">right to left</bdo>
```

### 如何实现块引用？

* 长引用：&lt;blockquote&gt;标签；

* 短引用：&lt;q&gt;标签。

浏览器通常会对 &lt;blockquote&gt;元素进行缩进处理。

### 如何实现删除字效果和插入字效果？

* 删除字：&lt;del&gt;标签；

* 插入字：&lt;ins&gt;标签。

```html
<p>
  <del>删除字方法</del>
  <ins>下划线方法</ins>
</p>

###如何定义上标和下标？

* 上标：&lt;sup&gt;标签；

* 下标：&lt;sub&gt;标签。

​```html
<p>
  10 <sup>-2</sup><br />
  H <sub>2</sub>O
</p>
```

##如何进行引用？

在html中使用：

* &lt;q&gt;元素定义短的引用；

```html
<p>WWF 的目标是：<q>构建人与自然和谐共存的世界。</q></p>
```

* ​&lt;blockquote&gt;定义被引用的节。

```html
<p>以下内容引用自 WWF 的网站：</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
五十年来，WWF 一直致力于保护自然界的未来。
世界领先的环保组织，WWF 工作于 100 个国家，
并得到美国一百二十万会员及全球近五百万会员的支持。
</blockquote>
```

更多信息参考下表：

| 标签                 | 描述              |
| :----------------- | --------------- |
| &lt;abbr&gt;       | 定义缩写或首字母缩略语     |
| &lt;address&gt;    | 定义文档作者或拥有者的联系信息 |
| &lt;bdo&gt;        | 定义文本方向          |
| &lt;blockquote&gt; | 定义从其他来源引用的节     |
| &lt;dfn&gt;        | 定义项目或缩略语的定义     |
| &lt;q&gt;          | 定义短的行内引用        |
| &lt;cite&gt;       | 定义著作的标题         |

## 如何正确显示计算机代码？

| 标签           | 描述        |
| ------------ | --------- |
| &lt;code&gt; | 定义计算机代码文本 |
| &lt;kdb&gt;  | 定义键盘文本    |
| &lt;samp&gt; | 定义计算机代码示例 |
| &lt;var&gt;  | 定义变量      |
| &lt;pre&gt;  | 定义预格式文本   |



*&lt;code&gt;元素不能保留多余的空格和折行，如果您的内容包含多行代码文本，请使用&lt;pre&gt;元素。*

##如何在html中添加注释？

通过添加注释标签&lt;!-- 与--&gt;在html中添加注释。

浏览器不会显示注释标签内的内容，但对文档添加相关的注释，可增强文档的可阅读性以及方便维护。

**条件注释**

定义只有 Internet Explorer 执行的 HTML 标签。

```html
<!--[if IE 8]>
    .... some HTML here ....
<![endif]-->
```

条件注释的操作符合版本可以针对不同版本的Internet Explorer 进行修改。

1. [if IE 8]>

2. [if lt IE 8]> &rarr;lt:less than

3. [if gt IE 8]> &rarr;gt:greater than

4. [if lte IE 8]> &rarr;lte:less than or equal to

5. [if gte IE 8]> &rarr;gte:greater than or equal to

## 如何使用css？

* 外部样式表：

```html
<head>
  <link rel="stylesheet" href="mystyle.css" type="text/css">
</head>
```

* 内部样式表：

```html
<head>
  <style>
    body{
      background-color: red;
      padding: 2px solid gary;
    }
  </style>
</head>
```

* 内联样式

```html
<p style="margin-left: 20px">对p元素添加样式</p>
```

##如何创建链接？

通过使用 &lt;a&gt;标签在 HTML 中创建链接。

有两种使用 &lt;a&gt;标签的方式：

1. 通过使用 href 属性 - 创建指向另一个文档的链接

```html
<a href="url">link text</a>
```

2. 通过使用 name 属性 - 创建文档内的书签

可分为两个步骤：

1. 定义锚点；

```html
<a name="label">这里是一个锚点</a>
```

2. 链接锚点。

```html
<a href="#label">从这里链接锚点</a>

<!-- 也可以在其他页面中创建指向该锚点的链接： -->
<a href="url#label"></a>
```
如果把链接的 target 属性设置为 "_blank"，该链接会在新窗口中打开。

```html
<a href="url" target="-blank"></a>
```

还可以创建电子邮件链接：

```html
<a href="mailto:someone@microsoft.com?subject=Hello%20again">发送邮件</a>

<!-- mailto:指向收件人邮箱地址 -->
<!-- subject：定义邮件标题 -->
```

##如何使用图像？

在html中，使用&lt;img&gt;标签定义图像。

定义图像的语法是：

```html
<img src="" alt="" >

<!-- src的值指定存储图像的位置 -->
<!-- alt属性用来为图像定义无法载入时的可替换文本 -->
```

&lt;img&gt;是空标签，他只包含属性，并且没有闭合标签。

浏览器将图像显示在文档中图像标签出现的地方。如果你将图像标签置于两个段落之间，那么浏览器会首先显示第一个段落，然后显示图片，最后显示第二段。

## 如何使用html表格？

表格由&lt;table&gt;标签定义，其中，每个表格：

* 使用&lt;caption&gt;标签定义表格标题；

* 表头使用 &lt;th&gt;标签进行定义；

* 行由&lt;tr&gt;标签定义；

* 每行被分割成若干单元格，由&lt;td&gt;标签定义；

* 如需要将空的单元格的边框显示出来，则需要为空单元格添加一个空格占位符
  &#38;nbsp;

* 使用&lt;colspan属性定义跨列表格；

* 使用&lt;rowspan&gt;定义跨行表格；

* 使用 cellpadding 来创建单元格内容与其边框之间的空白；

* 使用cellspaceing来增加单元格之间距离。


表格标签：

| 表格               | 描述       |
| ---------------- | -------- |
| &lt;table&gt;    | 定义表格     |
| &lt;caption&gt;  | 定义表格标题   |
| &lt;th&gt;       | 定义表格的表头  |
| &lt;tr&gt;       | 定义表格的行   |
| &lt;td&gt;       | 定义表格单元   |
| &lt;thead&gt;    | 定义表格的页眉  |
| &lt;tbody&gt;    | 定义表格的主体  |
| &lt;tfoot&gt;    | 定义表格的页脚  |
| &lt;col&gt;      | 定义表格列的属性 |
| &lt;colgroup&gt; | 定义表格列的组  |

使用方法例如：

```html
 <table border="2"  cellpadding="20" cellspacing="20" align="center">
    <tr>
      <th>&nbsp;</th>
      <td>左边为空单元</td>
    </tr>
    <tr>
      <th>表头2</th>
      <td>表格内容2</td>
    </tr>
    <tr>
      <th colspan="2">colspan跨两列</th>
    </tr>
    <tr>
      <td rowspan="2">rowspan跨两行</td>
      <td>表格内容3</td>
    </tr>
    <tr>
      <td>表格内容4</td>
    </tr>
  </table>
```

##如何使用列表？

* 无序列表&rarr;&lt;ul&gt;标签：

```html
<ul>
  <li>无序列表</li>
  <li>无序列表</li>
  <li>无序列表</li>
</ul>
```


* 有序列表&rarr;&lt;ol&gt;标签：

```html
  <ol>
    <li>有序列表1</li>
    <li>有序列表2</li>
    <li>有序列表3</li>
  </ol>
```
* 定义标签 &rarr;定义列表以 &lt;dl&gt;标签开始。每个自定义列表项以 &lt;dt&gt;开始。每个自定义列表项的定义以 &lt;dd&gt;开始。

```html
<dl>
   <dt>计算机</dt>
   <dd>用来计算的仪器 ... ...</dd>
   <dt>显示器</dt>
   <dd>以视觉方式显示信息的装置 ... ...</dd>
</dl>
```

同时还可以为无序列表ul设置type属性，并可使用以下值：

1. 实心圆 &rarr; disc；

2. 空心圆 &rarr; circle；

3. 实心方块 &rarr;square。

## 什么是块元素，以及如何使用？

块级元素在浏览器显示时，通常会以新行来开始和结束。

例如：&lt;h1&gt;,&lt;p&gt;,&lt;table&gt;

html內联元素在显示时通常不会以新行开始。

例如：&lt;b&gt;,&lt;d&gt;,&lt;a&gt;

&lt;div&gt;元素：

* 是块级元素，可用于组合其他的html元素的容器；

* 没有特定的含义；

* 可同css一起使用，对内容块进行样式设置；

* 可用于文档布局。

&lt;span&gt;元素：

* 是內联元素，可用于文本的容器；

* 没有特定的含义；

* 可用于为部分文本设置样式属性。

## 关于类

对html进行类的设置，是我们能够为元素的类定义css样式，可以实现为相同的类设置相同的样式，或者为不同的类设置不同的样式。

使用类型选择器选择某一种类型的所有元素，类型选择器就是指不带大于号或者小于号的元素名称。

使用类选择器选择制定某个类的所有元素。

类选择器：

* 格式为英文句号后面加上类名:

**type{styles}**

* 可以附加到类型选择器之后；

* 也可以附加到通配选择器*之后:

**\*.class{styles}**

分类行内元素&lt;span&gt;：

* 是行内元素，能够用作文本的容器；

* 设置&lt;span&gt;元素的类，能够为相同的&lt;span&gt;元素设置相同的样式。

## 关于html布局

可使用&lt;div&gt;元素进行布局。

HTML5 提供的新语义元素定义了网页的不同部分：

| 语义元素    | 说明              |
| ------- | :-------------- |
| header  | 定义文档或者节的页眉      |
| nav     | 定义导航链接的容器       |
| section | 定义文档中的节         |
| article | 定义独立的自包含文章      |
| aside   | 定义内容之外的内容（比如侧栏） |
| footer  | 定义文档或者节的页脚      |
| details | 定义额外的细节         |
| Summary | 定义details元素的标题  |

## HTML 响应式 Web 设计

什么是响应式 Web 设计？

* RWD 指的是响应式 Web 设计（Responsive Web Design）

* RWD 能够以可变尺寸传递网页

* RWD 对于平板和移动设备是必需的

## html头部元素

| 标签             | 描述                   |
| -------------- | -------------------- |
| &lt;head&gt;   | 定义文档的信息              |
| &lt;title&gt;  | 定义文档标题               |
| &lt;base&gt;   | 定义页面上所有链接的默认地址或者默认目标 |
| &lt;link&gt;   | 定义文档与外部资源之间的关系       |
| &lt;meta&gt;   | 定义关于html文档的元数据       |
| &lt;script&gt; | 定义客户端脚本              |
| &lt;style&gt;  | 定义文档的样式信息            |

1. &lt;head&gt;标签:
   用于定义文档的头部，它是所有头部元素的容器。&lt;head&gt;中的元素可以引用脚本、指示浏览器在哪里找到样式表、提供元信息等等。
   文档的头部描述了文档的各种属性和信息，包括文档的标题、在 Web 中的位置以及和其他文档的关系等。绝大多数文档头部包含的数据都不会真正作为内容显示给读者。

2. &lt;title&gt;标签:
   定义文档的标题，它是 head 部分中唯一必需的元素。

3. &lt;base&gt;标签:
   为页面上的所有链接规定默认地址或默认目标。
   通常情况下，浏览器会从当前文档的 URL 中提取相应的元素来填写相对 URL 中的空白。
   使用 &lt;base&gt;标签可以改变这一点。浏览器随后将不再使用当前文档的 URL，而使用指定的基本 URL 来解析所有的相对 URL。这其中包括 &lt;a>、&lt;img&gt;、&lt;link&gt;、&lt;form&gt;标签中的 URL。
   **&lt;base&gt;标签必须位于&lt;head&gt;元素内部。**

&lt;base&gt;标签的两个属性：

- href属性：其值为一个URL，用来规定页面中所有相对链接的基准URL。

例如一幅图片的地址为：https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg ![测试图片](https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg)

如果在html文档内直接使用的方法为：

```html
<img src="https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_1280.jpg" alt="">
```
当有多张图片或者多个链接需要使用时，可以在头部元素中提前使用&lt;base&gt;元素进行设置，从而提高效率：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <base href="https://cdn.pixabay.com/photo/2014/12/27/15/40/">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title></title>
  <link rel="stylesheet" href="">
</head>
<body>
  <img src="office-581131_1280.jpg" alt="">
</body>
</html>
```

- target属性：定义在何处打开页面中所有的链接，其值有：\_blank，\_parent，\_self，\_top。

4. &lt;link&gt;标签：

定义文档与外部资源的关系。

| 属性       | 值                                        | 描述                          |
| -------- | ---------------------------------------- | --------------------------- |
| href     | URL                                      | 规定被链接文档的位置                  |
| hreflang | language_code                            | 规定被链接文档中文本的语言               |
| media    | media_query=[screen（计算机屏幕），tty（ 电传打字机以及类似的使用等宽字符网格的媒介），tv（电视机类型设备，低分辨率，有限的滚屏能力），projection（放映机），handheld（手持设备，小屏幕，有限带宽），print（打印预览模式/打印页面），braille（盲人点字法反馈设备），aural（语音合成器），all（所有设备）。 | 规定被链接文档将被显示在什么设备上           |
| rel      | alternate, author,help,icon,licence,next,   pingback,prefetch,prev,search,sidebar,stylesheet,tag | 规定当前文档与被链接文档之间的关系           |
| sizes    | heightwidth,any                          | 规定被链接资源的尺寸， 仅适用于 rel="icon" |
| Type     | MIME_type                                | 规定被链接文档的MIME类型              |

5. &lt;style&gt;标签：

用于为html文档定义样式信息。

6. &lt;meta&gt;标签：

元数据（metadata）是关于数据的信息。

* content属性：提供了名称/值对中的值。该值可以是任何有效的字符串。始终要和 name 属性或 http-equiv 属性一起使用。

* scheme属性：用于指定要用来翻译属性值的方案。此方案应该在由 <head> 标签的 profile 属性指定的概况文件中进行了定义。

* name属性：提供了名称/值对中的名称。

以下例子为文档定义关键词，方便搜索引擎对文档进行分类：

```html
<meta name="keywords" content="HTML,ASP,PHP,SQL">
```

7. http-equiv属性

# html表单

html表单用于搜集不同类型的用户输入。

表单元素指的是不同类型的input元素、复选框、单选按钮、提交按钮等。

input元素的type类型：

1. text：定义常规文本输入；

```html
<form>
 First name:<br>
<input type="text" name="firstname">
<br>
 Last name:<br>
<input type="text" name="lastname">
</form>
```

2. radio：定义单选按钮输入；

```html
<form>
<input type="radio" name="sex" value="male" checked>Male
<br>
<input type="radio" name="sex" value="female">Female
</form>
```

3. checkbox：定义复选框输入；

```html
<form>
  <input type="checkbox" name="data" value="2016">2016<br />
  <input type="checkbox" name="data" value="2017" checked>2017<br />
  <input type="checkbox" name="data" value="2018">2018<br />
</form>
```

4. submit：定义提交按钮。

```html
<form >
  <input type="submit">
</form>
```

form属性集合：

| 属性             | 描述                                       |
| -------------- | ---------------------------------------- |
| accept-charset | 规定在被提交表单中使用的字符集（默认：页面字符集）。               |
| action         | 规定向何处提交表单的地址（URL）（提交页面）。                 |
| autocomplete   | 规定浏览器应该自动完成表单（默认：开启）。                    |
| enctype        | 规定被提交数据的编码（默认：url-encoded）。              |
| method         | 规定在提交表单时所用的 HTTP 方法（默认：GET）。             |
| name           | 规定识别表单的名称（对于 DOM 使用：document.forms.name）。 |
| novalidate     | 规定浏览器不验证表单。                              |
| target         | 规定 action 属性中地址的目标（默认：_self）。            |

## 如何选择使用form表单method属性的值？

* GET（默认值）：

表单提交方式为被动（比如搜索引擎查询），并且没有敏感信息；

此时表单数据在地址栏可见。

* POST：

如果表单正在更新数据，或者数据包含敏感信息，那么应该选用此种提交方法；

此时表单数据在地址栏不可见。

**如果要对表单内容数据进行正确提交，那么每个输入的字段必须设置一个name属性**

在表单中，可使用&lt;fieldset&gt;元素组合表单数据，同时可使用&lt;legend&gt;元素定义组合表单的标题。

```html
<form action="" method="POST">
  <fieldset>
    <legend>这里是组合表单数据的标题</legend>
    您的性别是：
    <input type="radio" name="sex" value="male">男
    <input type="radio" name="sex" value="female">女
  </fieldset>
</form>
```

## input表单元素

1. &lt;select&gt;：定义下拉菜单：

```html
<select name="cars" id="">
  <option value="audi">奥迪</option>
  <!-- 可通过添加seclectd属性来定义预定义选项 -->
  <option value="volvo" selected>沃尔沃</option>
  <option value="ferrari">法拉利</option>
  <option value="auto">大众</option>
</select>
```

2. &lt;textarea&gt;：定义文本域：

```html
<textarea name="suggestion" id="" cols="40" rows="5">请写下您的建议</textarea>
```

3. &lt;button&gt;：定义可点击按钮：

```html
<button type="button" onclick="alert('hello world!')">单击我！</button>
```

4. &lt;datalist&gt;：定义预定义选项列表：

```html
<form action="">
  <input list="brower">
  <datalist id="brower">
    <option value="ie">
    <option value="firefox">
    <option value="chrome">
  </datalist>
  ```
  **&lt;input&gt;元素的 list 属性必须引用 &lt;datalist&gt;元素的 id 属性**
  **Safari 或 IE9（以及更早的版本）不支持 datalist 标签**

##html输入类型

1. &lt;input type="text"&gt;：定义文本输入；

2. &lt;input type="password"&gt;：定义密码字段；

3. &lt;input type="submit"&gt;：定提交表单数据至表单处理程序。

## html input属性

1. value属性：规定输入字段的初始值；

2. readonly属性：规定输入字段为只读，不能修改；

3. disabled属性：规定输入字段为禁用；

4. size属性：规定输入字段的尺寸；

5. maxlength属性：规定输入字段允许的最大值；

6. autocomplete属性：规定表单或者输入字段是否可以自动完成；

7. novalidate 属性：规定在提交表单时不对表单数据进行验证；

8. autofocus 属性：规定当页面加载时 &lt;input&gt;元素应该自动获得焦点；

9. formaction 属性：规定当提交表单时处理该输入控件的文件的 URL；

10. formenctype 属性：规定当把表单数据（form-data）提交至服务器时如何对其进行编码（仅针对 method="post" 的表单）；

11. formmethod 属性：定义用以向 action URL 发送表单数据（form-data）的 HTTP 方法；

12. formnovalidate 属性：规定在提交表单时不对 &lt;input&gt;元素进行验证；

13. formtarget属性：规定的名称或关键词指示提交表单后在何处显示接收到的响应；

14. height 和 width 属性：规定 &lt;input&gt;元素的高度和宽度；

15. list 属性：引用的 &lt;datalist&gt; 元素中包含了 &lt;input&gt; 元素的预定义选项；

16. min 和 max 属性：规定 &lt;input&gt; 元素的最小值和最大值；

17. multiple 属性：规定允许用户在&lt;input&gt; 元素中输入一个以上的值；

18. pattern 属性：规定用于检查 &lt;input&gt; 元素值的正则表达式；

19. placeholder 属性：规定用以描述输入字段预期值的提示（样本值或有关格式的简短描述）；

20. required 属性：规定在提交表单之前必须填写输入字段；

21. step 属性：可与 max 以及 min 属性一同使用，来创建合法值的范围。




