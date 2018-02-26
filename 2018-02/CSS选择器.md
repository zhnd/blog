# class 和 id 的使用场景?

class用于选择同一类型的元素，id具有唯一性，一个id只能匹配一个元素,在一个HTML文档中，ID选择器只能使用一次。

# CSS选择器常见的有几种?

1. 基础选择器

| 选择器     | 含义                             |
| ------- | ------------------------------ |
| *       | 通用元素选择器，匹配页面任何元素（这也就决定了我们很少使用） |
| #id     | id选择器，匹配特定id的元素                |
| .class  | 类选择器，匹配class包含(不是等于)特定类的元素     |
| element | 标签选择器                          |

2. 组合选择器

| 选择器            | 含义                                       |
| -------------- | ---------------------------------------- |
| E,F            | 多元素选择器，用,分隔，同时匹配元素E或元素F                  |
| E F            | 后代选择器，用空格分隔，匹配E元素所有的后代（不只是子元素、子元素向下递归）元素F |
| E>F            | 子元素选择器，用>分隔，匹配E元素的所有直接子元素                |
| E+F            | 直接相邻选择器，匹配E元素之后的相邻的同级元素F                 |
| E~F            | 匹配任何在E元素之后的同级F元素（无论直接相邻与否）               |
| .class1.class2 | id和class选择器和选择器连写的时候中间没有分隔符，. 和 #  本身充当分隔符的元素 |
| element#id     | id和class选择器和选择器连写的时候中间没有分隔符，. 和 #  本身充当分隔符的元素 |

3. 属性选择器

| 选择器              | 含义                                       |
| ---------------- | ---------------------------------------- |
| E[attr]          | 匹配所有具有属性attr的元素，div[id]就能取到所有有id属性的div   |
| E[attr = value]  | 匹配属性attr值为value的元素，div[id=test],匹配id=test的div |
| E[attr ~= value] | 匹配所有属性attr具有多个空格分隔、其中一个值等于value的元素       |
| E[attr ^= value] | 匹配属性attr的值以value开头的元素                    |
| E[attr $= value] | 匹配属性attr的值以value结尾的元素                    |
| E[attr *= value] | 匹配属性attr的值包含value的元素                     |

4. 伪类选择器

| 选择器                   | 含义                                       |
| --------------------- | ---------------------------------------- |
| E:first-child         | 匹配作为长子（第一个子女）的元素E                        |
| E:link                | 匹配所有未被点击的链接                              |
| E:visited             | 匹配所有已被点击的链接                              |
| E:active              | 匹配鼠标已经其上按下、还没有释放的E元素                     |
| E:hover               | 匹配鼠标悬停其上的E元素                             |
| E:focus               | 匹配获得当前焦点的E元素                             |
| E:lang(c)             | 匹配lang属性等于c的E元素                          |
| E:enabled             | 匹配表单中可用的元素                               |
| E:disabled            | 匹配表单中禁用的元素                               |
| E:checked             | 匹配表单中被选中的radio（单选框）或checkbox（复选框）元素      |
| E::selection          | 匹配用户当前选中的元素                              |
| E:root                | 匹配文档的根元素，对于HTML文档，就是HTML元素               |
| E:nth-child(n)        | 匹配其父元素的第n个子元素，第一个编号为1                    |
| E:nth-last-child(n)   | 匹配其父元素的倒数第n个子元素，第一个编号为1                  |
| E:nth-of-type(n)      | 与:nth-child()作用类似，但是仅匹配使用同种标签的元素         |
| E:nth-last-of-type(n) | 与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素   |
| E:last-child          | 匹配父元素的最后一个子元素，等同于:nth-last-child(1)      |
| E:first-of-type       | 匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)   |
| E:last-of-type        | 匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1) |
| E:only-child          | 匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 |
| E:only-of-type        | 匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1) |
| E:empty               | 匹配一个不包含任何子元素的元素，文本节点也被看作子元素              |
| E:not(selector)       | 匹配不符合当前选择器的任何元素                          |

5. 伪元素选择器

| 选择器             | 含义            |
| --------------- | ------------- |
| E::first-line   | 匹配E元素内容的第一行   |
| E::first-letter | 匹配E元素内容的第一个字母 |
| E::before       | 在E元素之前插入生成的内容 |
| E::after        | 在E元素之后插入生成的内容 |

参考信息：[来源1](http://book.jirengu.com/jrg-team/frontend-knowledge-ppt/www/CSS-CSS选择器.html)；[来源2](http://www.ruanyifeng.com/blog/2009/03/css_selectors.html)

# 选择器的优先级是怎样的?对于复杂场景如何计算优先级？

从**高**到**低**分别是：

1. 在属性后面使用 !important 会覆盖页面内任何位置定义的元素样式
2. 作为style属性写在元素标签上的内联样式
3. id选择器
4. 类选择器
5. 伪类选择器
6. 属性选择器
7. 标签选择器
8. 通配符选择器
9. 浏览器自定义

对于每个规则，用户代理会计算选择器的特殊性，并将这个特殊性附加到规则中的各个声明。如果一个元素有两个或者多个冲突的属性声明，那么拥有最高特殊性的声明就会胜出，最终应用到页面显示上。

选择器的特殊性由选择器本身的组件确定。特殊性值有以下4个部分：
1. 对于选择器中给定的各个ID属性值，加0,1,0,0
2. 对于选择器中给定的各个类属性值、属性选择或者伪类，加0,0,1,0
3. 对于选择器中给定的各个元素和伪元素，加0,0,0,1
4. 结合符和通配选择器对特殊性没有贡献

```html
*             {}  /* a=0 b=0 c=0 d=0 -> 0,0,0,0 */
p             {}  /* a=0 b=0 c=0 d=1 -> 0,0,0,1 */
a:hover       {}  /* a=0 b=0 c=0 d=2 -> 0,0,0,2 */
ul li         {}  /* a=0 b=0 c=0 d=2 -> 0,0,0,2 */
ul ol+li      {}  /* a=0 b=0 c=0 d=3 -> 0,0,0,3 */
h1+input[type=hidden]{}  /* a=0 b=0 c=1 d=2 -> 0,0,1,1 */
ul ol li.active   {}  /* a=0 b=0 c=1 d=3 -> 0,0,1,3 */
#ct .box p        {}  /* a=0 b=1 c=1 d=1 -> 0,1,1,1 */
div#header:after  {}  /* a=0 b=1 c=0 d=2 -> 0,1,0,2 */
style=""          /* a=1 b=0 c=0 d=0 -> 1,0,0,0 */
```

# a:link, a:hover, a:active, a:visited 的顺序是怎样的？ 为什么？ 

正确顺序：
1. a:link
2. a:visited
3. a:hover
4. a:active

根据选择器的特殊性可得知，以上4个伪类选择器的特殊性值都是一样的，都为0,0,1,0，因此与元素匹配的最后一个选择器才会胜出，为了避免显示效果覆盖，应该使用LVHA的顺序进行声明。

# 以下选择器分别是什么意思?

```css
/*对id属性值为header的元素添加样式*/
#header{
}

/*对class属性值为header的元素添加样式*/
.header{
}

/*对class属性值为header的所有后代class属性值为logo的元素添加样式（包含子元素及子元素下的递归子元素）*/
.header .logo{
}

/*对class属性值为header和mobile的元素添加样式*/
.header.mobile{
}

/*对class属性值为header下的p元素和class属性值为header下的h3元素添加样式*/
.header p, .header h3{
}

/*对id属性值为header的元素下的class属性值为nav的li子元素添加样式*/
#header .nav>li{
}

/*设置id属性值为header下的a元素鼠标悬停样式*/
#header a:hover{
}

/*设置#header下.logo元素之后的同级元素p*/
#header .logo~p{
}

/*设置id属性值为header下的type属性值为text的元素的input元素样式*/
#header input[type="text"]{
}
```




# 列出以下选择器作用和区别
1. div:first-child：设置div父级元素下的第一个div块子元素的样式，div元素必须为父级元素的第一个子元素
```html
<body>
  <!-- <p>a</p> -->
  <div class="content">
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>
  <div class="footer">
    <p>4</p>
    <p>5</p>
  </div>
</body>
```

```css
div:first-child{
  color:red;
}
```

结果：1，2，3变为红色

2. div:first-of-type：设置div父级元素下的第一个div元素样式，div元素不必为父级元素的第一个子元素
```html
<body>
  <p>a</p>
  <div class="content">
    <p>1</p>
    <p>2</p>
    <p>3</p>
  </div>
  <div class="footer">
    <p>4</p>
    <p>5</p>
  </div>
</body>
```

```css
div:first-child{
  color:red;
}
```
结果：1，2，3变为红色

3. div :first-child：匹配div下所有的first-child

```html
<body>
<!-- <p>a</p> -->
  <div class="test">
    <p>A</p>
    <h1>B</h1>
    <span>C</span>
    <span>D</span>
    <p>E</p>
  </div>
<div class="content">
  <p>1</p>
  <p>2</p>
  <p>3</p>
  <div id="side">
    <p>F</p>
  </div>
  <p>c</p>
  <h1>d</h1>
</div>
</body>
```

```css
div:first-of-type{
  color:red;
}
```
A，B，C，D，E变为红色

4. div :first-of-type：匹配div父级元素下div块中所有不同类型的first-child

```html
<body>
<p>a</p>
  <div class="test">
    <p>A</p>      <!-- .test第一个p类型，红色 -->
    <h1>B</h1>    <!-- .test第一个h1类型，红色 -->
    <span>C</span><!-- .test第一个span类型，红色 -->
    <span>D</span>
    <p>E</p>
  </div>
<div class="content">
  <p>1</p>        <!-- .content第一个p类型，红色 -->
  <p>2</p>
  <p>3</p>
  <div id="side">
    <p>F</p>    <!-- .side第一个p类型，红色 -->
  </div>
  <p>c</p>
  <h1>d</h1>    <!-- .content第一个h1类型，红色 -->
</div>
</body>
```

```css
div :first-of-type{
  color:red;
}
```
A，B，C，1，F,d变为红色


# 运行如下代码，解析下输出样式的原因。

```html
<style>
/*设置class为item1的第一个子元素的颜色*/
.item1:first-child{
  color: red;
}

/*设置class为item1的所有不同类型元素第一个子元素的背景颜色*/
.item1:first-of-type{
  background: blue;
}
</style>
 <div class="ct">
   <p class="item1">aa</p>
   <h3 class="item1">bb</h3>
   <h3 class="item1">ccc</h3>
 </div>
```


