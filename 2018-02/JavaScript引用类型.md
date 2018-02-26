在ECMAScript中，引用类型是一种数据结构，用于将数据和功能组织在一起。

# 基本类型、引用类型

* JavaScript中的变量有5个基本数据类型（Undefined, Null, Boolean, Number, String）：指的是保存在栈内存中的简单数据段；

| 类型        | 可能的值                                     |
| --------- | ---------------------------------------- |
| Undefined | 只有undefined，比如：var message; alert(message ==  undefined)   //	true |
| Null      | 只有null                                   |
| Boolean   | true和false                               |
| Number    | 整数或者浮点数，例如：1或者3.14e10                    |
| String    | 任何字符串，例如：var a = "string"                |

* 引用类型值（对象、数组、函数、正则）：指的是那些保存在堆内存中的对象，变量中保存的实际上只是一个指针，这个指针执行内存中的另一个位置，由该位置保存对象。

关于栈和堆的扩展阅读：

[JavaScript变量——栈内存or堆内存](http://blog.csdn.net/xdd19910505/article/details/41900693)

[Stack的三种含义](http://www.ruanyifeng.com/blog/2013/11/stack.html)

## 基本类型和引用类型的区别

1. 变量声明方式相同：
```javascript
// 声明一个String类型的变量
var str = "string";

// 声明一个引用类型的变量，并添加属性
var person = new Object();
person.name = "Jeremy";
```

2. 声明变量时不同的内存分配不同
  * 原始值：存储在栈（stack）中的简单数据段，也就是说，它们的值直接存储在变量访问的位置。这是因为这些原始类型占据的空间是固定的，所以可将他们存储在较小的内存区域——栈中。这样存储便于迅速查寻变量的值。
  * 引用值：存储在堆（heap）中的对象，也就是说，存储在变量处的值是一个指针（point），指向存储对象的内存地址。这是因为：引用值的大小会改变，所以不能把它放在栈中，否则会降低变量查寻的速度。相反，放在变量的栈空间中的值是该对象存储在堆中的地址。地址的大小是固定的，所以把它存储在栈中对变量性能无任何负面影响。

3. 复制变量时的不同
  * 原始值：在将一个保存着原始值的变量复制给另一个变量时，会将原始值的副本赋值给新变量，此后这两个变量是完全独立的，他们只是拥有相同的value而已。
  * 引用值：在将一个保存着对象内存地址的变量复制给另一个变量时，会把这个内存地址赋值给新变量，也就是说这两个变量都指向了堆内存中的同一个对象，他们中任何一个作出的改变都会反映在另一个身上。

4. 参数传递的不同
  * 基本类型按值传递
  * 对象类型按共享传递的

信息来源：[知乎苏墨橘](https://www.zhihu.com/question/27114726/answer/35481766)

扩展阅读：
[JS是按值传递还是按引用传递?](http://bosn.me/js/js-call-by-sharing/#section-2)

[传值还是传引用？](https://github.com/simongong/js-stackoverflow-highest-votes/blob/master/questions21-30/parameter-passed-by-value-or-reference.md)

[Is JavaScript a pass-by-reference or pass-by-value language?](https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language)


# Object()类型

创建Object()实例的两种方式：

1. 使用new操作符后跟Object()构造函数：

```javascript

    var person = new Object();
    person.name = "baidu";
    person.age = 21;
```

2. 使用对象字面量表示法：

```javascript
    var person = {
        name : "baidu",
        age : 21,
        5 : true
    };
```

此时需要注意以下几点：
* 在对象字面量中，使用逗号`,`来分隔不同的属性；
* 最后一个属性后面不需要添加逗号；
* 如果在对象字面量语法中将花括号`{}`留空，则可以定义只包含默认属性和方法的对象，如下所示：

```javascript
    var person = {}
    person.name = "baidu";
    person.age = 21;
```

访问对象属性的两种方法：

1. 点表示法；
2. 方括号表示法。

```javascript
  var person = {
    name: "baidu",
    age: 21,
  };

  //点表示法访问对象属性
  console.log(person.name);

  //方括号表示法访问对象属性
  console.log(person["name"]);

  //可以通过变量来访问属性
  var propertyName = "name";
  console.log(person[propertyName]);
```

# Array类型

ECMAScript数组的每一项都可以保存不同类型的数据。

创建数组的两种基本方法：

1. 使用Array构造函数：

```javascript
    var colors = new Array();

    //添加length属性值
    var colors = new Array(20);

    //向Array构造函数传递数组中应该包含的值
    var colors = new Array("red","blue","green");

    //使用Array构造函数可以省略new操作符
    var colors = Array("red","blue","green");
```

2. 使用数组字面量表示法：

数组字面量由一对包含数组项的方括号表示，多个数组项之间使用`,`隔开。

```javascript
    var colors = ["red","blue","green"];
```

读取和设置数组的值：

首先使用`[]`并提供相应值的从0开始的索引，然后进行读取和设置：

```javascript
  var colors = ["red", "blue", "green"];

  //读取数组
  console.log(colors[0]);
  console.log(colors[2]);

  // 修改数组
  colors[1] = "black";
  console.log(colors[1]);

  // 新增数组项目
  colors[3] = "brown";
  console.log(colors);

  // 读取数组长度
  console.log(colors.length);

  // 将数组长度值设置为小于实际长度，会移除后面的数组项，然后访问时返回undefined
  colors.length = 3;
  console.log(colors[3]);

  // 使用length属性在数组末尾添加新项：数组最后一项的索引值始终为length-1
  colors[colors.length] = "yellow";
  console.log(colors);
```

## 检测数组

`Array.isArray()`方法：

```javascript
var colors = ["red", "blue", "green"];
Array.isArray(colors);

//	true
```

## 栈方法

栈是一种LIFO(Last-In-First-Out，后进先出)的数据结构，也就是最先添加的项最早被移除。

栈中项的插入————入栈；

栈中项的移除————出栈。

以上两种行为都只发生在栈的顶部。

`push()`方法可以接收任意数量的参数，把他们逐个添加到数组的末尾，并返回修改后数组的长度。

`pop()`方法从数组末尾移除最后一项，减少数组的length值，然后返回移除的项。

```javascript
  var color = Array();

  // push()方法
  var count = color.push("red","blue","green");
  // 返回数组的长度
  console.log(count);

  count = color.push("black");

  console.log(color);
  console.log(color.length);

  // pop()方法
  var item = color.pop();
  // 返回移除的项
  console.log(item);
  console.log(color);
  console.log(color.length);
```

## 队列方法

队列数据结构的访问规则是FIFO(First-In-First-Out，先进先出)。

队列在列表的末端添加项，从列表的前端移除。

`shift()`方法能够移除数组中的第一项并返回该项，同时将数组的length-1。

结合使用`shift()`和`push()`方法即可像队列一样使用数组。

可以使用`unshift()`（在数组前端添加任意个项并返回数组的长度）和`pop()`方法来从相反的方向模拟队列。也就是在数组的前端添加项，从数组的末端移除项。

## 重排序方法

1. `reverse()`方法：反转数组项的顺序。

```javascript
  var values = [1,2,3,4,5];
  values.reverse();
  console.log(values);
```

2. `sort()`方法

在默认情况下，sort()方法按升序排列数组，sort()方法会调用每个数组项的toString()转型方法，然后比较得到字符串，确定如何排序。即使数组中的每一项都是数值，sort()方法比较的也是字符串：

```javascript
    var values = [0,1,5,10,15];
    values.sort();
    console.log(values); //0,1,10,15,5
```

因此，`sort()`方法可以接收一个比较函数作为参数。

```javascript
  function compare(value1, value2) {
    if (value1 < value2) {
      return -1;
    } else if (value1 > value2) {
      return 1;
    } else {
      return 0;
    }
  }

  var values = [0, 1, 3, 7, 9, 15];
  values.sort(compare);
  console.log(values); //0,1,3,7,9,15
```

也可通过比较函数产生降序排序，只需交换函数返回值即可：

```javascript
  function compare(value1, value2) {
    if (value1 < value2) {
      return 1;
    } else if (value1 > value2) {
      return -1;
    } else {
      return 0;
    }
  }

  var values = [0, 1, 3, 7, 9, 15];
  values.sort(compare);
  console.log(values); //15,9,7,3,1,0
```

`sort()`函数的排序条件是：
* 参数大于0，array的相邻两个元素交换位置;
* 参数小于0，array的相邻两个元素不交换位置;
* 参数等于0，array的相邻两个元素大小相等;所以compare自定义函数必须返回一个数值。

对于数值类型或者valueOf()方法会返回数值类型的对象类型。
可使用一个更简单的比较函数。此函数只要第二个值减第一个值即可。

```javascript
    function compare (value1,value2){
    return value2 - value1;
    }
```

##  Array 对象方法

| 方法               | 描述                                       |
| ---------------- | ---------------------------------------- |
| concat()         | 连接两个或更多的数组，并返回结果。                        |
| join()           | 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。          |
| pop()            | 删除并返回数组的最后一个元素                           |
| push()           | 向数组的末尾添加一个或多个元素，并返回新的长度。                 |
| reverse()        | 颠倒数组中元素的顺序。                              |
| shift()          | 删除并返回数组的第一个元素                            |
| slice()          | 从某个已有的数组返回选定的元素，`arrayObject.slice(start,end)`，不包含`end`元素 |
| sort()           | 对数组的元素进行排序                               |
| splice()         | 删除元素，并向数组添加新元素。                          |
| toSource()       | 返回该对象的源代码。                               |
| toString()       | 把数组转换为字符串，并返回结果。                         |
| toLocaleString() | 把数组转换为本地数组，并返回结果。                        |
| unshift()        | 向数组的开头添加一个或更多元素，并返回新的长度。                 |
| valueOf()        | 返回数组对象的原始值                               |



# 浅拷贝和深拷贝

## 浅拷贝（shallow copy）

浅拷贝是对象地址的拷贝，拷贝后的引用都指向同一个对象的实例，
浅复制是复制引用，复制后的引用都是指向同一个对象的实例，彼此之间的操作会互相影响，修改其中一个对象的属性，则另一个对象的属性也会改变。

```javascript
function shallowClone(copyObj) {
  var obj = {};
  for ( var i in copyObj) {
    obj[i] = copyObj[i];
  }
  return obj;
}
var x = {
  a: 1,
  b: { f: { g: 1 } },
  c: [ 1, 2, 3 ]
};
var y = shallowClone(x);
console.log(y.b.f === x.b.f);     // true
```

## 深拷贝（deep copy）

深拷贝也就是拷贝出一个新的实例，新的实例和之前的实例互不影响。

### 递归的实现方式


```javascript
function deepCopy(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number' || typeof obj[key] === 'boolean' || typeof obj[key] === 'string' || obj[key] === undefined || obj[key] === null){
      newObj[key] = obj[key];
    } else {
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}
```

### JSON的实现方式

* `JSON.parse()` 方法解析一个JSON字符串，构造由字符串描述的JavaScript值或对象。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
* `JSON.stringify()` 方法将一个  JavaScript 值转换为一个 JSON 字符串，如果指定了一个 replacer 函数，则可以替换值，或者如果指定了一个 replacer 数组，可选地仅包括指定的属性。[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

```javascript
function jsonClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
```

小练习：

1. 如下代码输出什么？为什么

```javascript
var obj1 = {
  a: 1,
  b: 2,
};
var obj2 = {
  a: 1,
  b: 2,
};
console.log(obj1 == obj2);  //  false，内存地址不一样
console.log(obj1 = obj2); //  { a: 1, b: 2 }，将obj2赋值给obj1
console.log(obj1 == obj2); // true，此时指向同一对象
```

```javascript
var a = 1;
var b = 2;
var c = { name: '饥人谷', age: 2 };
var d = [a, b, c];

var aa = a;          //  aa = 1;
var bb = b;          //  bb = 2;
var cc = c;          //  cc = { name: '饥人谷', age: 2 };
var dd = d;          //  dd = [1,2,{name: '饥人谷',age: 3}]

a = 11;
b = 22;
c.name = 'hello';   //  c = { name: 'hello', age: 2 };
d[2]["age"] = 3;    //  [1,2,{name: '饥人谷',age: 3}]

console.log(aa);    //  1
console.log(bb);    //  2
console.log(cc);    //  { name: 'hello', age: 3 }
console.log(dd);    //  [ 1, 2, { name: 'hello', age: 3 } ]
```

```javascript
var a = 1;
var c = { name: 'jirengu', age: 2 };

function f1(n) {
  ++n
}
function f2(obj) {
  ++obj.age
}

f1(a);              //  1，将a的值传递给函数f1，a的值不受影响
f2(c);              //  { name: 'jirengu', age: 3 }，传递的是引用对象，堆内容改变
f1(c.age);          //  1
console.log(a);     //  1
console.log(c);     //  { name: 'jirengu', age: 3 }
```

2. 过滤如下数组，只保留正数，直接在原数组上操作

解决思路：

使用数组的`splice()` 方法来删除不符合条件的数组项目。

`splice()` 方法通过删除现有元素和/或添加新元素来更改一个数组的内容。

MDN:[Array.prototype.splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```javascript
var arr = [3, 1, 0, -1, -3, 2, -5];

function filter(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filter(arr);
console.log(arr); // [3,1,2]
```

3. 过滤如下数组，只保留正数，原数组不变，生成新数组

```javascript
var arr = [3,1,0,-1,-3,2,-5];
function filter(arr) {
  var newArr = [];
  for(var i = 0, j = 0; i < arr.length; i++){
    if(arr[i] > 0){
      newArr[j] = arr[i];
      j++;
    }
  }
  return newArr;
}
var arr2 = filter(arr);
console.log(arr2); // [3,1,2]
console.log(arr);  // [ 3, 1, 0, -1, -3, 2, -5 ]
```


