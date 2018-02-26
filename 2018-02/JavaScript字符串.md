字符串就是零个或多个排在一起的字符，放在单引号或双引号之中。

```javascript
// 使用双引号
"abcd"

// 使用单引号
'abcd'
```

需要注意的是，当引号有嵌套时：
* 单引号字符串的内部，使用双引号。
* 双引号字符串的内部，使用单引号。

## 多行字符串

字符串只能单行内，如果分成多行，JavaScript就会报错。

```javascript
var a = 'a

b
c';
console.log(a);

//SyntaxError: unterminated string literal
```

在JavaScript中创建多行字符串的方法有以下几种：

1. 字符串相加

连接运算符（+）可以连接多个单行字符串，用来模拟多行字符串。
```javascript
var longString = 'Long '
  + 'long '
  + 'long '
  + 'string';
```

2. 使用反斜杠

```javascript
var longString = "Long \
long \
long \
string";

longString
// "Long long long string"
```

**注意，反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错**

3. 多行注释

```javascript
(function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1,-1).join('\n')
// "line 1 line 2 line 3"
```

4. 使用数组定义，再用`join`连接：

```javascript
let lines = ['line1', 'line2', 'line3'].join('\n');
console.log(lines);
```

## 转义

反斜杠在字符串内有特殊含义，用来表示一些特殊字符，所以又称为转义符。

如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前需要再加一个反斜杠，用来对自身转义。

```javascript
var a = 'he said:"she said:\'\'"';
console.log(a);
  //  he said:"she said:''"

"Prev \\ Next"
// "Prev \ Next"
```

除了普通的可打印字符以外，一些特殊有特殊功能的字符可以通过转义字符的形式放入字符串中：

|    Code | Output   |
|   ------ | -------  |
|    \0   |   空字符    |
|    \'   |   单引号    |
|    \"   |   双引号    |
|    \\\   |  反斜杠    |
|    \n   |  换行   |
|    \r   |   回车   |
|    \v   |   垂直制表符    |
|    \t   |   水平制表符    |
|    \b   |   退格   |
|    \f   |   换页   |
|    \uXXXX   |   unicode 码    |
|    \u{X} ... \u{XXXXXX}   |   unicode codepoint    |
|    \xXX   |   Latin-1 字符(x小写)    |

## 其他值转换为字符串

使用`string`函数：

```javascript
String(thing)
new String(thing)

//thing:任何可以被转换成字符串的值。 
```

## String 对象属性

|   属性   |    描述  |
| ------  | -------  |
|   constructor    |   对创建该对象的函数的引用  |
|   length   |    字符串的长度  |
|   prototype    |   允许您向对象添加属性和方法 |

### 字符串的长度计算

`String.length`，该属性返回字符串中字符编码单元的数量。

```javascript
var x = 'Hello World！';
var empty = '';
var space = ' ';

console.log(x.length);
//  12
console.log(empty.length);
//  0
console.log(space.length);
//  1
```

## 常见的字符串方法

### `charAt()` 方法

返回指定位置的字符，结果是长度为1的字符串。

```javascript
var x = 'Hello World！';
console.log(x.charAt(0));
//  H
```

### `charCodeAt()` 方法

返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。

```javascript
var x = 'Hello World！';
console.log(x.charCodeAt(0));
//  72
```
### `indexOf()` 方法

返回某个指定的字符串值在字符串中首次出现的位置。

```javascript
var x = 'Hello World！';
console.log(x.indexOf('H'));
//  0
```

还可以为`indexOf()`添加一个参数来设置检索开始位置。

```javascript
var x = 'Hello World！';
console.log(x.indexOf('l', 5));
//  9
```

### `substr()` 方法

在字符串中抽取从第一个参数位置开始的指定数目的字符。

语法可以表示为：

```javascript
stringObject.substr(start,length)
```

其中`start`参数不能省略，如果为负数，那么从字符串的尾部位置开始；`length`参数可以省略，如果省略，返回从`start`位置开始到字符串结尾的字符。

```javascript
var x = 'Hello World！';
console.log(x.substr(1, 3));
//  ell
```

### `substring()` 方法

返回从开始位置到结束位置的字符，

语法可以表示为：

```javascript
stringObject.substr(start,stop)
```

其中`start`参数不能省略，如果为负数，那么从字符串的尾部位置开始；`length`参数可以省略，如果省略，返回从`start`位置开始到字符串结尾的字符。

```javascript
var x = 'Hello World！';
console.log(x.substring(1, 3));
//  el
```
**`substring()` 方法返回值包含`start`值，但不包含`stop`值**

**`substring()` 方法不允许负数参数**

### `slice()` 方法

提取字符串的某个部分，并以新的字符串返回被提取的部分。

语法可以表示为：

```javascript
stringObject.slice(start,stop)
```

**`slice()` 方法返回值包含`start`值，但不包含`stop`值**

**`slice()` 方法允许负数参数，如果是负数则从尾部开始计算**

### `replace()` 方法

字符串内容替换，可以是另外一些字符串，也可以是与正则表达式匹配的子串。


```javascript
var str = 'Hello World!';
console.log(str.replace('World', 'Moto'));
//  Hello Moto!
```

### `search()` 方法

检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。

```javascript
var str = 'Hello World!';
var searchStr1 = str.search('World');
console.log(searchStr1);
//  6

var searchStr2 = str.search('Moto');
console.log(searchStr2);
//  -1
//  如果没有找到任何匹配的子串，则返回 -1
```

### `match() `方法

在字符串内检索指定的值，或找到一个或多个正则表达式的匹配，返回指定值。

```javascript
var str = 'Hello World!';
var matchStr = str.match('World');
console.log(matchStr);
//  Array [ "World" ]
```

```javascript
var str="1 plus 2 equal 3"
var matchStr = str.match(/\d/g);
console.log(matchStr);
//  [ '1', '2', '3' ]
```

### `toLowerCase()` 方法

把字符串转换为小写。

```javascript
var str="HELLO WORLD!"
var toLowerCaseStr = str.toLowerCase(str);
console.log(toLowerCaseStr);
//  hello world!
```

### `toUpperCase()` 方法

把字符串转换为大写。

```javascript
var str="hello world!"
var toUpperCaseStr = str.toUpperCase(str);
console.log(toUpperCaseStr);
//  HELLO WORLD!
```

# 小练习

1. 对于 HTTP 协议而言，HTML、CSS、JS、JSON 的本质都是什么？

对于HTTP协议而言，html、css、js、json的本质是符合相应语法的字符串。

扩展阅读：
[HTTP 协议详解](http://kb.cnblogs.com/page/130970/)

[Http协议](http://mp.weixin.qq.com/s?__biz=MjM5MDY5MTM4Nw==&mid=2449647984&idx=1&sn=9a64fbf7453232714bf286b83b188207&scene=0#wechat_redirect)

2. 使用数组拼接出如下字符串 ，其中styles数组里的个数不定

```javascript
var prod = {
  name: '女装',
  styles: ['短款', '冬季', '春装']
};

function getTpl(data) {
  var html = [];
  html.push('<dl>');
  html.push(' <dt>' + data.name + '</dt>');
  for (var i = 0; i < data.styles.length; i++) {
    html.push(' <dd>' + data.styles[i] + '</dd>');
  }
  html.push('<dl>');
  return html.join('');
}
var result = getTpl(prod);
console.log(result);

//  <dl> <dt>女装</dt> <dd>短款</dd> <dd>冬季</dd> <dd>春装</dd><dl>
```

3. 写出两种以上声明多行字符串的方法

```javascript
// 使用反斜杠
var str = 'abcd \
abcd \
abcd';
console.log(str);

//  abcd abcd abcd

// 字符串相加
var str2 = 'abcd '
  + 'abcd '
  + 'abcd '
  + 'abcd';
console.log(str2);
//  abcd abcd abcd abcd

//多行注释
var str3 = (function () { /*
abcd
abcd
abcd
*/}).toString().split('\n').slice(1,-1).join('\n');
console.log(str3);
/*
abcd
abcd
abcd
 */
```

4. 补全如下代码,让输出结果为字符串: `hello\\饥人谷`

```javascript
var str = 'hello\\\\\饥人谷';
console.log(str);
//  hello\\饥人谷
```

5. 以下代码输出什么?为什么

```javascript
var str = 'jirengu\nruoyu';
console.log(str);
console.log(str.length);

/*
jirengu
ruoyu
13
\n为换行符，占用1个字符长度
 */
```

6. 写一个函数，判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是

```javascript
function isPalindrome(str){
  return str === str.split('').reverse().join('');
}

var str1 = isPalindrome('abcdcba');
console.log(str1);
//  true
  
var str2 = isPalindrome('abcdcbb');
console.log(str2);
//  false
```

7. 写一个函数，统计字符串里出现出现频率最多的字符

```javascript
function getMostFrequentStr(str) {
  var dict = {};
  var max = 0;
  var maxCh;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (dict[ch] === undefined) {
      dict[ch] = 1;
    } else {
      dict[ch]++;
    }
    if (dict[ch] > max) {
      max = dict[ch];
      maxCh = str[i];
    }
  }
  return { index: max, ch: maxCh };
}

console.log(getMostFrequentStr('helloooo worlddd'));

//  { index: 5, ch: 'o' }
```

8. 写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串

```javascript
function camelize(str){
  var arr = str.split('-');
  for(var i = 1; i < arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
  }
  return arr.join('');
}

var str = camelize('background-color');
console.log(str);
//  backgroundColor
```

9. 写一个 ucFirst函数，返回第一个字母为大写的字符

```javascript
function ucFirst(str) {
  return str.replace(str[0], str[0].toUpperCase());
}

var str = ucFirst('hunger');
console.log(str);
//  Hunger
```

10. 写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...

```javascript
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    var shortStr = str.substr(0, maxlength);
    newStr = shortStr + '...';
    console.log(newStr);
  } else {
    return -1;
  }

}
truncate('read more read moreread moreread more', 9);
//  read more
```


