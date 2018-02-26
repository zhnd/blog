小练习：

#### 题目1： dom对象的innerText和innerHTML有什么区别？

```html
 <div id="ct">
  <h1>Hello</h1>
  <h2>World!</h2>
 </div>
 ```

* `.innerText`：返回元素内包含的文本内容；

```javascript
console.log(ct.innerText);

/*
Hello

World!
*/
```

* `.innerHTML`：返回元素内的HTML结构（不包括元素本身）。

```javascript
console.log(ct.innerHTML);

/*
  <h1>Hello</h1>
  <h2>World!</h2>
*/
```

#### 题目2： elem.children和elem.childNodes的区别？

* `elem.children`：获取指定元素的子元素列表，只显示元素节点即使是非空的文字节点也不显示。

* `elem.childNodes`：获取指定元素的子元素列表，包含HTML元素节点、文本节点、注释节点，空文本节点也会显示。

#### 题目3：查询元素有几种常见的方法？ES5的元素选择方法是什么?

* 常见方法：
1. `getElementById`方法：返回匹配指定ID属性的元素节点。如果没有发现匹配的节点，则返回null。
2. `getElementsByClassName`方法：返回一个类似数组的对象（HTMLCollection类型的对象），包括了所有class名字符合指定条件的元素（搜索范围包括本身），元素的变化实时反映在返回结果中。
3. `getElementsByTagName`方法：返回所有指定标签的元素（搜索范围包括本身）。
4. `getElementsByName`方法：用于选择拥有name属性的HTML元素，比如form、img、frame、embed和object，返回一个NodeList格式的对象，不会实时反映元素的变化。

* ES5方法:
1. `querySelector`方法：返回匹配指定的CSS选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回null。
2. `querySelectorAll`方法：返回匹配指定的CSS选择器的所有节点，返回的是NodeList类型的对象。

#### 题目4：如何创建一个元素？如何给元素设置属性？如何删除属性？

1. 创建元素：
  * 生成HTML元素节点：`createElement()`方法
  * 生成文本节点：`createTextNode()`方法

2. 设置元素属性：`setAttribute()`方法
3. 删除元素属性：`romoveAttribute()`方法


#### 题目5：如何给页面元素添加子元素？如何删除页面元素下的子元素?

1. 添加子元素：
  * 在元素末尾添加元素：`appendChild()`方法

  ```javascript
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hello");
  newDiv.appendChild(newContent);
   ```

  * 在某个元素之前插入元素：`insertBefore()`方法

  ```javascript
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hello");
  newDiv.insertBefore(newContent, newDiv.firstChild);
  ```
2. 删除子元素：`removeChild()`方法

#### 题目6： element.classList有哪些方法？如何判断一个元素的 class 列表中是包含某个 class？如何添加一个class？如何删除一个class?

1. `element.classList`属性的方法：

  1. `add`方法：在元素中添加一个或多个类名。如果指定的类名已存在，则不会添加；
  2. `contains`方法：返回布尔值，判断指定的类名是否存在。若值为true，则类名存在；若值为false，则类名不存在；
  3. `item`方法：返回类名在元素中的索引值。索引值从 0 开始。如果索引值在区间范围外则返回 null；
  4. `remove`方法：移除元素中一个或多个类名。
  5. `toggle`方法：当只有一个参数时：切换类名; 即如果类存在，则删除它并返回false，如果不存在，则添加并返回true。当存在第二个参数时：如果第二个参数的计算结果为true，则添加指定的类值，如果计算结果为false，则删除它。

2. 判断一个元素的class列表中是包含某个class：`elem.classLilst.contains(String)`
3. 添加一个class：`elem.classList.add(String)`
4. 删除一个class：`elem.classList.remove(String)`

#### 题目7： 如何选中如下代码所有的li元素？ 如何选中btn元素？

```html
<div class="mod-tabs">
   <ul>
       <li>list1</li>
       <li>list2</li>
       <li>list3</li>
   </ul>
   <button class="btn">点我</button>
</div>
```

1. 选择所有li元素：

```javascript
//  方法一：
var oLi = document.getElementsByTagName('li');

//  方法二：
var oLi = document.querySelectorAll('.mod-tabs ul li');
```

2. 选中btn元素：

```javascript
//  方法一：
var oBtn = document.getElementsByClassName('btn')[0];
//  方法二：
var oBtn = document.querySelector('.btn');
```


