>JJSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。 易于人阅读和编写。同时也易于机器解析和生成。 它基于JavaScript Programming Language, Standard ECMA-262 3rd Edition - December 1999的一个子集。 JSON采用完全独立于语言的文本格式，但是也使用了类似于C语言家族的习惯（包括C, C++, C#, Java, JavaScript, Perl, Python等）。 这些特性使JSON成为理想的数据交换语言。

# 一些基本概念

* JSON：JavaScript对象表示法（JavaScript Object Notation）。
* JSON是一种数据格式，是存储和交换文本信息的语法，功能类似于XML。
* JSON采用键值对的方式来组织，便于阅读和编写，易于机器解析和生成。
* JSON独立于语言，只要符合JSON规则，不管什么语言，都可以解析JSON。

# JSON和XML比较

* JSON的长度和XML格式比起来很短小；
* JSON的读写速度更快；
* JSON可以使用JavaSCript内建的方法进行解析，转换为JavaScript对象。

# JSON语法规则

JSON 语法是 JavaScript 对象表示语法的子集。

1. 数据在名称/值对中
2. 数据由逗号分隔
3. 花括号保存对象
4. 方括号保存数组

JSON 数据的书写格式是：名称/值对，名称/值对组合中的名称写在前面（在双引号中），值对写在后面(同样在双引号中)，中间用冒号隔开：

```json
var json1 = { "name": "Byron", "age": "24" }

var json2 = [
    { "name": "Byron", "age": "24" },
    { "name": "Byron2", "age": "25" }
]
```

# JSON形式

* 对象是一个无序的“‘名称/值’对”集合。一个对象以“{”（左括号）开始，“}”（右括号）结束。每个“名称”后跟一个“:”（冒号）；“‘名称/值’ 对”之间使用“,”（逗号）分隔。

![JSON object](https://raw.githubusercontent.com/z2x/blog/master/images/17-8-23/91210783.jpg)

```json
{
  "name": "Apple",
  "age": 29,
  "school": {
      "name": "Middle school",
      "location": "Beijing"
  }
}

```

**对象的属性必须加双引号，没有末尾的分号**

* 数组是值（value）的有序集合。一个数组以“[”（左中括号）开始，“]”（右中括号）结束。值之间使用“,”（逗号）分隔。

![JSON array](https://raw.githubusercontent.com/z2x/blog/master/images/17-8-23/13650476.jpg)

```json
[{
  "name": "Apple",
  "friend": [
    "Joe",
    "Zakas",
    "Nicholas"
  ]
}]
```

* 值（value）可以是双引号括起来的字符串（string）、数值(number)、true、false、 null、对象（object）或者数组（array）。这些结构可以嵌套。

![Json value](https://raw.githubusercontent.com/z2x/blog/master/images/17-8-23/14122608.jpg)

* 字符串（string）是由双引号包围的任意数量Unicode字符的集合，使用反斜线转义。一个字符（character）即一个单独的字符串（character string）。

字符串（string）与C或者Java的字符串非常相似。

**JSON字符串必须使用双引号**

![JSON string](https://raw.githubusercontent.com/z2x/blog/master/images/17-8-23/85287197.jpg)

* 数值（number）也与C或者Java的数值非常相似。除去未曾使用的八进制与十六进制格式。除去一些编码细节。

![JSON number](https://raw.githubusercontent.com/z2x/blog/master/images/17-8-23/66268162.jpg)

# 解析和序列化

## JSON对象

### JSON对象的两个方法：

* stringify()：用于把JavaScript对象序列化为JSON字符串；

```javascript
var book = {
  title: "Professional JavaScript",
  author: [
    "Nicholoas C. Zakas"
  ],
  edition: 3,
  year: 2011
};

var jsonText = JSON.stringify(book);
console.log(jsonText);
//  {"title":"Professional JavaScript","author":["Nicholoas C. Zakas"],"edition":3,"year":2011}
```

* parse()：把JSON字符串解析为原生JavaScript值。

```javascript
var bookCopy = JSON.parse(jsonText);
console.log(bookCopy);
/*
{ title: 'Professional JavaScript',
  author: [ 'Nicholoas C. Zakas' ],
  edition: 3,
  year: 2011
}
 */
```

## 序列化选项

`JSON.stringify()`方法可以将一个JavaScript值转换为一个JSON字符串，如果指定了一个 replacer函数，则可以替换值，或者如果指定了一个 replacer 数组，可选地仅包括指定的属性。

其语法格式为：

```javascript
JSON.stringify(value[, replacer [, space]])

//  value:要转换的 JavaScript 值（通常为对象或数组）。
//  replacer:用于转换结果的函数或数组。
//  space:向返回值 JSON 文本添加缩进、空格和换行符以使其更易于读取。
```

```javascript
var jsonText = JSON.stringify(book,["title","edition"]);
console.log(jsonText);
//  {"title":"Professional JavaScript","edition":3}
```

`JSON.stringify()`方法的第二个参数是函数，传入的参数接收2个参数，属性（键）名和属性值。
再根据属性（键）名来如何处理序列化对象中的属性。

**属性名只能是字符串**

1. 过滤结果

```javascript
var book = {
  title: "Professional JavaScript",
  author: [
    "Nicholoas C. Zakas",
    "Klervn"
  ],
  edition: 3,
  year: 2011
};

var jsonText = JSON.stringify(book, function(key, value) {
  switch (key) {
    case "author":
      return value.join(",")
      break;
    case "year":
      return 5000;
      break;
    case "edition":
      return undefined;
      break;
    default:
      return value;
      break;
  }
});

console.log(jsonText);

//  {"title":"Professional JavaScript","author":"Nicholoas C. Zakas,Klervn","year":5000}
```

2. 字符串缩进

`JSON.stringify()`方法的第三个参数用来控制结果中的缩进和空白符。

* 如果这个参数是一个数值，即表示每个级别缩进的空格数。

```javascript
var jsonText = JSON.stringify(book,null,2);

console.log(jsonText);

/*
{
  "title": "Professional JavaScript",
  "author": [
    "Nicholoas C. Zakas",
    "Klervn"
  ],
  "edition": 3,
  "year": 2011
}
 */
```

在输出结果中可以看出来，只要在方法中传入有效的space参数来控制缩进，结果中将会自动包含换行符。

* 如果这个参数是一个字符串，这个字符串将会被用作缩进字符。

```javascript
var jsonText = JSON.stringify(book,null,"--");

console.log(jsonText);

/*
{
--"title": "Professional JavaScript",
--"author": [
----"Nicholoas C. Zakas",
----"Klervn"
--],
--"edition": 3,
--"year": 2011
}
 */
```

3. toJSON方法

返回其自身的JSON数据格式。

```javascript
var book = {
  title: "Professional JavaScript",
  author: [
    "Nicholoas C. Zakas",
    "Klervn"
  ],
  edition: 3,
  year: 2011,
  toJSON: function() {
    return this.title;
  }
};

var jsonText = JSON.stringify(book);

console.log(jsonText);

//  "Professional JavaScript"
```

如果将一个对象传入`JSON.stringofy()`，序列化该对象的顺序为：

1. 如果存在toJSON()方法而且能通过它取得有效的值，则调用该方法。否则，按默认顺序执行序列化。
2. 如果提供了第二个参数，应用这个函数过滤器。传入函数过滤器的值是第(1)步返回的值。
3. 对第(2)步返回的每个值进行相应的序列化。
4. 如果提供了第三个参数，执行相应的格式化。”

## 解析选项

`JSON.parse()`方法还能接收还原函数(revier)。如果指定了reviver函数，则解析出的 JavaScript 值（解析值）会经过一次转换后才将被最终返回（返回值）。

阅读更多：

[MDN:JSON.parse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

[json.org](http://json.org/json-zh.html)

部分代码、内容摘录来自: 泽卡斯. “JavaScript高级程序设计（第3版）”。 iBooks.


