# typeof操作符

使用typeof可以检测变量的数据类型，可能会返回以下字符串：

```javascript
  alert(typeof "10");
```

1. number（数值）：整数和小数（比如1和3.14）
2. string（字符串）：字符组成的文本（比如"Hello World"）
3. boolean（布尔值）：true（真）和false（假）两个特定值
4. undefined：表示“未定义”或不存在，即此处目前没有任何值
5. null：表示空缺，即此处应该有一个值，但目前为空
6. object（对象）：各种值组成的集合

# 原始类型和复杂类型

数值、字符串、布尔值称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了。

对数值、字符串、布尔值使用`typeof`操作符分别返回`number`、`string`、`boolean`。

```javascript
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
```

将对象称为复杂类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。

对函数使用`typeof`操作符返回`function`。

```javascript
function f() {}
typeof f
// "function"
```

至于undefined和null，一般将它们看成两个特殊值。

对undefined使用`typeof`操作符返回`undefined`。

```javascript
typeof undefined
// "undefined"
```

** TYPEOF UNDEFINED 范例**

利用这一点，typeof可以用来检查一个没有声明的变量，而不报错。

```javascript
v  // ReferenceError: v is not defined
typeof v // "undefined"
```

实际编程中，这个特点通常用在判断语句。

```javascript
// 错误的写法
if (v) { }  // ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") { }
```

除此以外，其他情况都返回object。

```javascript
typeof window // "object"
typeof {} // "object"
typeof [] // "object"
typeof null // "object"
```
此时如果需要更好的判断数据类型，我们可以使用`instanceof`操作符。

# instanceof操作符

instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性，返回值为true或false。

语法格式为：
```javascript
object instanceof constructor
//object:要检测的对象.
//constructor:某个构造函数
```
举个例子：
```javascript
var a = {};
var b = [];

a instanceof Array // false
b instanceof Array // true
```

# underfined类型

underfined类型只有1个值，即underfined。

# null类型
null类型只有1个值，即null。

null值表示一个空对象指针。

## null 和 undefined

### 渊源

`null`与`undefined`都可以表示“没有”，含义非常相似。将一个变量赋值为`undefined`或`null`，老实说，语法效果几乎没区别。

```javascript
var a = undefined;
var a = null;
```

上面代码中，a变量分别被赋值为`undefined`和`null`，这两种写法的效果几乎等价。

在`if`语句中，它们都会被自动转为`false`，相等运算符（`==`）甚至直接报告两者相等。

```javascript
if (!undefined) {
  console.log('undefined is false');
}
// undefined is false

if (!null) {
  console.log('null is false');
}
// null is false

undefined == null
// true
```

上面代码说明，两者的行为是何等相似！Google公司开发的JavaScript语言的替代品Dart语言，就明确规定只有`null`，没有`undefined`！

既然含义与用法都差不多，为什么要同时设置两个这样的值，这不是无端增加复杂度，令初学者困扰吗？这与历史原因有关。

1995年JavaScript诞生时，最初像Java一样，只设置了`null`作为表示"无"的值。根据C语言的传统，`null`被设计成可以自动转为0。

```javascript
Number(null) // 0
5 + null // 5
```

但是，JavaScript的设计者Brendan Eich，觉得这样做还不够，有两个原因。

首先，null像在Java里一样，被当成一个对象。但是，JavaScript的数据类型分成原始类型和合成类型两大类，Brendan Eich觉得表示"无"的值最好不是对象。

其次，JavaScript的最初版本没有包括错误处理机制，发生数据类型不匹配时，往往是自动转换类型或者默默地失败。Brendan Eich觉得，如果`null`自动转为0，很不容易发现错误。

因此，Brendan Eich又设计了一个`undefined`。他是这样区分的：`null`是一个表示"无"的对象，转为数值时为0；`undefined`是一个表示"无"的原始值，转为数值时为`NaN`。

```javascript
Number(undefined) // NaN
5 + undefined // NaN
```

但是，这样的区分在实践中很快就被证明不可行。目前`null`和`undefined`基本是同义的，只有一些细微的差别。

`null`的特殊之处在于，JavaScript把它包含在对象类型（object）之中。

```javascript
typeof null // "object"
```

上面代码表示，查询`null`的类型，JavaScript返回`object`（对象）。

这并不是说null的数据类型就是对象，而是JavaScript早期部署中的一个约定俗成，其实不完全正确，后来再想改已经太晚了，会破坏现存代码，所以一直保留至今。

注意，JavaScript的标识名区分大小写，所以`undefined`和`null`不同于`Undefined`和`Null`（或者其他仅仅大小写不同的词形），后者只是普通的变量名。

### 用法和含义

对于null和undefined，可以大致可以像下面这样理解。

null表示空值，即该处的值现在为空。典型用法是：

作为函数的参数，表示该函数的参数是一个没有任何内容的对象。
作为对象原型链的终点。
undefined表示不存在值，就是此处目前不存在任何值。典型用法是：

变量被声明了，但没有赋值时，就等于undefined。
调用函数时，应该提供的参数没有提供，该参数等于undefined。
对象没有赋值的属性，该属性的值为undefined。
函数没有返回值时，默认返回undefined。

### 用法
```javascript
var i;
i // undefined

function f(x){console.log(x)}
f() // undefined

var  o = new Object();
o.p // undefined

var x = f();
x // undefined
```

# boolean类型

boolean类型有两个值：true和false。

下列运算符会返回布尔值：
* 两元逻辑运算符： && (And)，|| (Or)
* 前置逻辑运算符： ! (Not)
* 相等运算符：===，!==，==，!=
* 比较运算符：>，>=，<，<=

## 转换为FALSE的类型

如果JavaScript预期某个位置应该是布尔值，会将该位置上现有的值自动转为布尔值。转换规则是除了下面六个值被转为false，其他值都视为true。
* undefined
* null
* false
* 0
* NaN
* ""（空字符串）

可使用boolean函数将值转换为boolean类型：

```javascript
  var message = "hello world!";
  var toBoolean = Boolean(message);
  alert(toBoolean);
```

**空数组（[]）和空对象（{}）对应的布尔值，都是true**


# number类型

  number类型可以表示整数和浮点数值。

## 浮点数值

  浮点数值，就是该数值中必须包含一个小数点，并且小数点后面必须至少有一位数字，如1.1，.1。

  由于保存浮点数值需要的内存空间时保存整数值的2倍，因此ECMAScript会将浮点数值转换为整数值。

## 数值范围

由于内存限制，ECMAScript能够表示的数值范围为：5e-324,1.7976931348623157e+308.

如果某次计算的结果超出了上述范围，结果将被自动转换为正负infinity值，并且将离开下一次计算过程。

使用isFinite()函数能够判断数值是否在数值范围之内。

```javascript
  alert(isFinite(54));
```

## 数值转换

3个可以将非数值转换为数值的函数：
1. Number()
2. parseInt()
3. parseFloat()

### Number函数可用于任何数据类型，转换规则如下：
* 如果是boolean类型，true和false将分别转换为1和0；
* 如果是数字值，只是简单的传入和返回；
* 如果是null值，返回0；
* 如果是underfined值，返回NaN；
* 如果是字符串，则：
    * 如果字符串只包含数字，将其转换为十进制数；
    * 如果包含有效的浮点格式，将其转换为对应的浮点数值；
    * 如果包含十六进制数，将其转换为相同大小的十进制数；
    * 如果字符串是空的，将其转换为0；
    * 上述格式之外，将其转换为NaN
* 如果是对象：则调用对象的valueof()方法，然后依照前面的规则转换返回的值。如果转换的结果是NaN，则调用对象的toString()方法，然后再次依照前面的规则转换返回的值。

### parseInt parseFloat
* 忽略字符串前面的空白字符，找到第一个非空白字符
* 如果第一个字符不是`-`或者数字返回NaN
* 如果是继续解析，直到非数值模式为止
* 0开头会当做八进制，0x开头会当做十六进制，但是可以指定第二个参数指定基数
```javascript
parseInt('blue'); //NaN
parseInt('-23ABS'); // -23
parseInt('0xf1'); // 241
parseInt('101', 2); // 5
```
数值参考信息：[《JavaScript 标准参考教程（alpha）》，by 阮一峰](http://javascript.ruanyifeng.com/grammar/number.html#toc11)

# NaN类型

NaN即非数值，是一个特殊的数值，用于表示一个本来要返回数值的操作数未返回数值的情况。

可使用以下方法进行检验：
```javascript
  alert(isNaN(10));
```

任何不能转换为数值的值将返回true,但布尔型可以转换为数值，所以返回值是false。

# string类型

string类型用于表示由零或者多个16位unicode字符组成的字符序列，即字符串。

字符串可以由双引号或者单引号表示。
```javascript
var str = "Hello World!";
var str = 'She said:"Hello World!"';
```

## 字符字面量
也叫转义序列，用于表示非打印字符，或者具有其他用途的字符。

| 字面量   | 含义                                |
| ----- | --------------------------------- |
| \n    | 换行                                |
| \t    | 制表                                |
| \b    | 退格                                |
| \r    | 回车                                |
| \f    | 进纸                                |
| \ \   | 斜杠                                |
| \'    | 单引号，在用单引号表示的字符串中使用。               |
| \"    | 双引号，在用双引号表示的字符串中使用。               |
| \xnn  | 以十六进制代码nn表示的一个字符（其中n为0～F)         |
| \unnn | 以十六进制代码nnn表示的一个unicode字符（其中n为0～F) |

## 字符串的特点

不可变，也就是说字符串一旦创建，他们的值就不能改变。如果要改变，首先要销毁原来的字符串，然后再用包含新值的字符串填充该变量。

```javascript
    var name = "china";
    name = "beijing";
    alert(name.length);
```

## 转换为字符串

1. toString()方法：

```javascript
    var age = true;
    console.log(typeof age);
    console.log(age.toString());
```

2. 转型函数string()能够将任何类型的值转换为字符串，并遵循以下规则：
    * 如果值有toString()方法，则调用该方法并返回相应的结果；
    * 如果值是null，则返回"null";
    * 如果值是underfined，则返回"underfined"。

# object类型

对象其实就是一组数据和功能的集合。对象可以根据执行new操作符后跟要创建的对象类型的名称来创建，同时可以添加属性和方法：

```javascript
    var o = object();
```
## 对象的细分
对象又可以分成四个子类型：

* 狭义的对象（object）
* 数组（array）
* 函数（function）
* 正则表达式 (regexp)

object的每个实例都具有下列属性和方法：
1. constructor：保存着用于创建当前对象的函数；
2. hasOwnProprety(peopretyName):用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在；
3. isPrototypeOf(object)：用于检查传入的对象是否是当前对象的原型）；
4. propretyIsEnumerable(propretyName)：用于检查给定的属性是否能够使用for-in语句来枚举。
5. toLocalString()：返回对象的字符串表示，该字符与执行环境的地区对应；
6. toString()：返回对象的字符串表示；
7. valueOf()：返回对象的字符串、数值或者布尔值表示。


