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

//  true
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

# ES5 数组拓展

## `.forEach(element, index, array)`

**什么是回调函数**
>你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的电话，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。在这个例子里，你的电话号码就叫回调函数，你把电话留给店员就叫登记回调函数，店里后来有货了叫做触发了回调关联的事件，店员给你打电话叫做调用回调函数，你到店里去取货叫做响应回调事件。
>>作者：常溪玲
>>链接：[https://www.zhihu.com/question/19801131/answer/13005983](https://www.zhihu.com/question/19801131/answer/13005983)
>>来源：知乎

遍历数组，参数为一个回调函数，回调函数有三个参数：

  - 当前元素
  - 当前元素索引值
  - 整个数组

```javascript
var a = [1,2,3,4];
a.forEach(console.log);

/*
1 0 [ 1, 2, 3, 4 ]
2 1 [ 1, 2, 3, 4 ]
3 2 [ 1, 2, 3, 4 ]
4 3 [ 1, 2, 3, 4 ]

第1个是遍历的数组内容；第2个是对应的数组索引，第3个是数组本身。
 */
```

```javascript
var a = [1, 2, 3, 4, 5, 6];

a.forEach(function(e, i, array) {
  array[i] = e + 1;
});

console.log(a);
//  [2, 3, 4, 5, 6, 7]
```

## `.map(function(element))`

与forEach类似，遍历数组，回调函数返回值组成一个新数组返回，新数组索引结构和原数组一致，原数组不变。

```javascript
//  数值项求平方
var data = [1, 2, 3, 4];
var arrayOfSquares = data.map(function(item) {
  return item * item;
});

console.log(arrayOfSquares);

//  [ 1, 4, 9, 16 ]
```

## `.filter(function(element))`

返回数组的一个子集，回调函数用于逻辑判断是否返回，返回true则把当前元素加入到返回数组中，false则不加。

新数组只包含返回true的值，索引缺失的不包括，原数组保持不变。


```javascript
// 写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变

function filterPositive(arr) {
  return arr.filter(function(value) {
    return value > 0;
  });
}
var arr = [0,3, -1, 2, '饥人谷', true];
var newArr = filterPositive(arr);
console.log(newArr);

// [ 3, 2, true ]

console.log(arr);

// [ 0, 3, -1, 2, '饥人谷', true ]

```

在上面例子中，数组中的值0也被过滤。

**`filter()`方法中的逻辑判断为`==true/false`**

## `.every(function(element, index, array))`
## `.some(function(element, index, array))`

这两个函数类似于离散数学中的逻辑判定，回调函数返回一个布尔值

* every是所有函数的每个回调函数都返回true的时候才会返回true，当遇到false的时候终止执行，返回false
* some函数是“存在”有一个回调函数返回true的时候终止执行并返回true，否则返回false

在空数组上调用every返回true，some返回false

```javascript
var number = [1, 2, 3, 4, 5];
var everyResults = number.every(function(item, index, array) {
  return (item > 3);
});
console.log(everyResults);
// false
// 
var someResults = number.some(function(item, index, array) {
  return (item > 3);
});
console.log(someResults);
// true
```

## `.reduce(function(prev, cur, index, array)` 
## `.reduceRight(function(prev, cur, index, array)`

遍历数组，调用回调函数，将数组元素组合成一个值，reduce从索引最小值开始，reduceRight反向，方法有两个参数

回调函数：把两个值合为一个，返回结果

函数的4个参数分别为：

1. prev：前一个值；
2. cur：当前值；
3. index：项的索引；
4. 数组对象。

```javascript
var arr = [1, 2, 3, 4, 5];
var reduceSum = arr.reduce(function(prev, cur, index, array) {
  return prev + cur;
});
console.log(reduceSum);
// 15
```

## `.indexOf(element)`
## `.lastIndexOf(element)`

用于查找数组内指定元素位置，查找到第一个后返回其索引，没有查找到返回-1，indexOf从头至尾搜索，lastIndexOf反向搜索。

```javascript
var a = [1, 2, 3, 3, 2, 1];
console.log(a.indexOf(2));
// 1
console.log(a.lastIndexOf(4));
// -1
```

小练习：

1. 数组方法里push、pop、shift、unshift、join、splice分别是什么作用？用 splice函数分别实现push、pop、shift、unshift方法

在数组的栈方法中：

* `push()`方法可以接受任意数量参数，并把所有参数添加到数组末尾，返回修改后数组长度；
* `pop()`方法从数组末尾移除最后一项，数组长度减1，返回移除的项。

在数组的队列方法中：

* `shift()`方法移除数组中的第一项，数组长度减1，并返回移除的项。
`unshift()`方法在数组最前面添加任意个项，并返回新数组长度。

`join()`方法使用分隔符将数组转换为字符串。

`splice()`有3种使用方式，最终返回删除的项：

* 删除：需指定2个参数：起始位置和删除项数；
* 插入：需指定3个参数：起始位置、0（删除项数）、要插入的项；
* 替换：需指定3个参数：起始位置、删除项数、要插入的项；

```javascript
var colors = ['red', 'green', 'blue'];

// 使用push方法在最后面添加1项
var count = colors.push('black');
console.log(colors);
// [ 'red', 'green', 'blue', 'black' ]

//  使用splice方法在最后面添加1项
var count = colors.splice(colors.length, 0, 'white');
console.log(colors);
// [ 'red', 'green', 'blue', 'black', 'white' ]


// 使用pop方法移除最后1项
var count = colors.pop();
console.log(colors);
// [ 'red', 'green', 'blue', 'black' ]

// 使用splice方法移除最后1项
var count = colors.splice(colors.length - 1, 1);
console.log(colors);
// [ 'red', 'green', 'blue' ]


// 使用shift方法移除第1项
var count = colors.shift();
console.log(colors);
// [ 'green', 'blue' ]

// 使用splice方法移除第1项
var count = colors.splice(0, 1);
console.log(colors);
// [ 'blue' ]


// 使用unshift方法在最前面添加1项
var count = colors.unshift('blue');
console.log(colors);
// [ 'blue', 'blue' ]

// 使用splice方法在最前面添加1项
var count = colors.splice(0, 0, 'red');
console.log(colors);
// [ 'red', 'blue', 'blue' ]
```

2. 写一个函数，操作数组，数组中的每一项变为原来的平方，在原数组上操作

```javascript
function arrayOfSquares(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = Math.pow(arr[i], 2);
  }
  return arr;
}
var data = [1, 2, 3, 4];
console.log(arrayOfSquares(data));
//  [ 1, 4, 9, 16 ]

console.log(data);
//  [ 1, 4, 9, 16 ]
```


3. 写一个函数，操作数组，返回一个新数组，新数组中只包含正数，原数组不变

```javascript
function filterPositive(arr) {
  return arr.filter(function(value) {
    return value > 0;
  });
}
var arr = [0,3, -1, 2, '你好', true];
var newArr = filterPositive(arr);
console.log(newArr);

// [ 3, 2, true ]

console.log(arr);

// [ 0, 3, -1, 2, '你好', true ]

```


