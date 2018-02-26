# var变量声明

ECMAScript的变量属于松散型，可以用来保存任何类型的数据。每个变量仅仅是一个用于保存值的占位符。

定义变量时需要使用var操作符,后面跟变量名：

```javascript
var name = "blog";
```

使用var定义的变量属于局部变量，离开函数后即实效；

省略var操作符直接创建的变量属于全局变量，可以在函数外部的任何部分被引用。

可以使用一条语句创建多个变量，只需使用（,）分隔开，如：

```javascript
var name = "blog";
    age = 2;
    city = beijing;
```
* var重复声明一个已经存在的变量，原变量值不变
* 不写var会声明一个全局的变量，这是我们在编程中应该要避免的，即使真的需要全局变量，也应该在最外层作用域使用var声明



# 函数是什么
JavaScript函数是指一个特定代码块，可能包含多条语句，可以通过名字来供其它语句调用以执行函数包含的代码语句。

# 函数的声明

ECMAScript规定了三种声明函数方式：

1. 构造函数

ECMAScript中的构造函数可以用来创建特定类型的对象。

构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头。

要创建一个新的构造函数实例，必须使用`new`操作符。以这种方式调用构造函数会经历以下4个步骤：

  （1）创建一个新对象；

  （2）将构造函数的作用域赋给新对象（this指向该新对象）；

  （3）执行构造函数中的代码（为这个新对象添加属性）；

  （4）返回新对象。

例如：
```javascript
function Person(name,age,job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    console.log(this.name);
  };
}

var person1 = new Person("Banana",18,"fruit");
var person2 = new Person("Potato",1,"vegetable");

person1.sayName();  //Banana
person2.sayName();  //Potato
```

在上面例子中，person1和person2分别保存着Person的一个不同的实例。

使用constructor属性，能够返回对象的构造函数：

```javascript
console.log(person1.constructor == Person); //true
console.log(person1.constructor == Person); //true
```

2. 函数声明

使用function关键字可以声明一个函数。

语法：
```javascript
function name([param,[, param,[..., param]]]) {
   [statements]
}
//name -> 函数名
//param ->要传递给函数的参数的名称。不同引擎中的最大参数数量不同。
//statements ->包含函数体的语句。
```
例如：
```javascript
//函数声明
function sayHello(){
  console.log('hello')
}

//函数调用
sayHello()
```

3. 函数表达式

同样使用function关键字来声明一个函数。

语法：
```javascript
let function_expression = function [name]([param1[, param2[, ..., paramN]]]) {
   statements
};
//name -> 函数名称。可被忽略，此种情况下的函数是匿名函数（anonymous）。 函数名称只是函数体中的一个本地变量。
//paramN -> 被传递给函数的一个参数名称。一个函数至多拥有 255 个参数。
//statements -> 构成函数体的语句。
```
例如：
```javascript
var sayHello = function(){
  console.log('hello');
};

sayHello();
```

**函数声明和函数表达式的区别**

>函数表达式（function expression）非常类似于函数声明（function statement）（详情查看函数声明），并且拥有几乎相同的语法。函数表达式与函数声明的最主要区别是函数名称（function name），在函数表达式中可忽略它，从而创建匿名函数（anonymous functions）。一个函数表达式可以被用作一个IIFE（即时调用的函数表达式），它一旦定义就运行。

* 函数声明的重要特征是函数声明提升，也就是说在执行代码之前会先读取函数声明，这就意味着可以把函数声明放在调用它的语句后面。

```javascript
sayHi();//函数调用
function sayHi(){
    console.log("Hello World!");
}//函数声明
```

```javascript
function sayHi(){
    console.log("Hello World!");
}	//函数声明
sayHi();//函数调用
```

* 函数表达式在使用前必须先赋值，因此函数声明必须放在函数调用前面。

```javascript
var sayHi = function(){
    console.log("Hello World!");
}//函数声明
sayHi();//函数调用
```


# hoisting机制

## 变量提升

变量提升是将变量提升到函数级作用域的最顶端。但只是提升变量的声明，并不会把赋值也提升上来。

例如：

```javascript
console.log(a);		//undefined
var a = 1;
console.log(a);		//1
```

对应的解析流程为：

```javascript
var a;
console.log(a);		//undefined
var a = 1;
console.log(a);		//1
```

## 函数提升

函数提升是将将整个函数都提到整个作用域的最顶端。连同函数体一起提升。

**只有函数声明形式才能被提升**

```javascript
sayHi();	//函数调用
function sayHi(){
    console.log("Hello World!");
}
```



# 函数参数

函数运行的时候，有时需要提供外部数据，不同的外部数据会得到不同的结果，这种外部数据就叫参数。

**当函数参数存在同名的参数，则取最后出现的那个值。**

```javascript
function sayHello(name,age){
  console.log('hello ' +  name + age);
}
//函数参数可以为1个，也可以为多个
// name,age便是函数sayHello的参数
sayHello('a',1);        //hello a1
sayHello('b',1,true);   //hello b1
```

## arguments对象

1. 可以使用arguments对象读取函数内部的所有传入参数。

```javascript
function consoleParameter(parameter){
  console.log(arguments[0]);
  console.log(arguments[1]);
}
consoleParameter(1,2);
//1
//2
```
2. 还可以使用arguments的length属性来获取参数数量。
```javascript
function consoleParameter(parameter){
  console.log(arguments.length);
}
consoleParameter(1,2);
//2
```
# 重载

在JS中没有重载，同名函数会覆盖。
但可以在函数体针对不同的参数调用执行相应的逻辑。
```javascript
 function printPeopleInfo(name, age, sex){
    if(name){
      console.log(name);
    }

    if(age){
      console.log(age);
    }

    if(sex){
      console.log(sex);
    }
  }


  printPeopleInfo('Byron', 26);
  printPeopleInfo('Byron', 26, 'male');
```

# 函数作用域

>作用域（scope）指的是变量存在的范围。Javascript只有两种作用域：
* 全局作用域，变量在整个程序中一直存在，所有地方都可以读取；
* 函数作用域，变量只在函数内部存在。

在函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取。

```javascript
var a = 1;
//此处a为全局变量
function test() {
  console.log(a);
}

test(); //1
```

在函数内部定义的变量，外部无法读取，称为“局部变量”（local variable）。
```javascript
a = 2;
//此处a为全局变量
function test() {
  var a = 1;
  //此处a为局部变量
  console.log(a);
}
test(); //1
console.log(a);//2
```

# 递归

1. 自己调用自己
2. 设定终止条件
3. 优点: 算法简单
4. 缺点: 效率低

```javascript
// 一个简单的阶乘函数
var f = function (x) {
    if (x === 1) {
        return 1;
    } else {
        return x * f(x - 1);
    }
};
```

# 立即调用函数表达式（IIFE）

根据JavaScript引擎规定，如果`function`关键字出现在行首，一律解释成语句。那么不让`function`出现在行首，引擎便将其理解成一个表达式。最简单的处理，就是将其放在一个圆括号里面。

通常情况下，只对匿名函数使用这种“立即执行的函数表达式”。它的目的有两个：

1. 不必为函数命名，避免了污染全局变量；
2. IIFE内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。

几种写法：
```javascript
(function(){
  var a  = 1;
})()
console.log(a); //undefined

(function fn1() {});

// 在数组初始化器内只能是表达式
[function fn2() {}];

// 逗号也只能操作表达式
1, function fn3() {};
```
参考信息：[《JavaScript 标准参考教程（alpha）》](http://javascript.ruanyifeng.com/grammar/function.html#toc24)

小练习：

1. 阶乘(Factorial)函数

* 递归方法

```javascript
function factorial(num) {
  // 如果num是一个小于0的整数，就会拒绝
  if (num < 0) {
    return "Error";
  }
  else
  if (num === 0 || num === 1) {
    // 如果num是一个0或者1，其阶乘是1
    return 1;
  } else {
    // 调用递归
    return (num * factorial(num - 1));
  }
}
factorial(4);   //24
```

* `while`循环方法：

```javascript
function factorial(num) {
  // 第一步：创建一个变量result来存储num结果
  var result = num;
  // 如果num是一个小于0的整数，就会拒绝
  if (num < 0) {
    return "Error";
    // 如果num是一个0或者1，其阶乘是1
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    // 使用while循环求值
    while (num > 1) {
      num--;
      result *= num;
    }
    return result;
  }
}
factorial(4);   //24
```

* `for`循环方法：

```javascript
function factorial(num) {
  // 如果num是一个小于0的整数，就会拒绝
  if (num < 0) {
    return "Error";
    // 如果num是一个0或者1，其阶乘是1
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    // 使用for循环求值
    for(var i = num - 1; i >= 1; i--){
      num *= i;
    }
    return num;
  }
}
factorial(4);   //24
```

2. 写出返回值

```javascript
function getInfo(name, age, sex){
  console.log('name:',name);
  console.log('age:', age);
  console.log('sex:', sex);
  console.log(arguments);
  arguments[0] = 'valley';
  console.log('name', name);
}

getInfo('小谷', 2, '男');
// name: 饥人谷
// age: 2
// sex: 男
// { '0': '小谷', '1': 2, '2': '男' }
// name valley
getInfo('小谷', 3);
// name: 小谷
// age: 3
// sex: undefined
// { '0': '小谷', '1': 3 }
// name valley
getInfo('男');
// name: 男
// age: undefined
// sex: undefined
// { '0': '男' }
// name valley
```

3. 写一个函数，返回参数的平方和

```javascript
function sumOfSquares() {
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i] * arguments[i];
  }
  return sum;
}
var result = sumOfSquares(2, 3, 4);
var result2 = sumOfSquares(1, 3);
console.log(result); //29
console.log(result2); //10
```

4. 如下代码的输出？为什么

```javascript
console.log(a);		//undefined
var a = 1;
console.log(b);		//b is not defined
```

变量声明提升，赋值没有提升，`console.log(a);` ——> `var a;console.log(a);`；

`b`没有声明也没有赋值。

5. 如下代码的输出？为什么

```javascript
sayName('world');
sayAge(10);

function sayName(name) {
  console.log('hello ', name);    //hello  world
}
var sayAge = function (age) {
  console.log(age);
};                                //sayAge is not a function
```

`function sayName(name)`是一个函数声明，调用语句可以放在函数声明前面也可以放在后面；

`var sayAge = function(age)`则是一个函数表达式，调用语句只能放在函数声明后面。



