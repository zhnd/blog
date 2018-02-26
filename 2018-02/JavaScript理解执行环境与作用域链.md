# 几个基本概念
* ECS：函数执行栈（或者执行上下文栈），Execution Context Stack
* EC：函数执行环境（或者执行上下文，）Execution Context
* VO：变量对象，Variable Object
* AO：变量对象，Active Object
* 作用域链，scope chain

# 执行上下文栈（Execution Context Stack）

浏览器中的JS解释器以单线程的方式实现，也就是同一时间只允许做一件事，其他的行为或者事件会进入执行栈里排队，下图为单线程栈的抽象视图：

![单线程栈](images/js-Single-thread.jpeg)

>当浏览器首次载入你的脚本，它将默认进入全局执行上下文。如果，你在你的全局代码中调用一个函数，你程序的时序将进入被调用的函数，并创建
一个新的执行上下文，并将新创建的上下文压入执行栈的顶部。

>如果你调用当前函数内部的其他函数，相同的事情会在此上演。代码的执行流程进入内部函数，创建一个新的执行上下文并把它压入执行栈的顶部。
浏览器总会执行位于栈顶的执行上下文，一旦当前上下文函数执行结束，它将被从栈顶弹出，并将上下文控制权交给当前的栈。这样，堆栈中的上
下文就会被依次执行并且弹出堆栈，直到回到全局的上下文。

# EC（执行上下文）

>每次当控制器转到ECMAScript可执行代码的时候，就会进入到一个执行上下文。

在JavaScript中，执行上下文分为3种类型：

* 全局代码（Global code）

全局级别的代码 – 这个是默认的代码运行环境，一旦代码被载入，引擎最先进入的就是这个环境。

* 函数代码（Function code）

函数级别的代码 – 当执行一个函数时，运行函数体中的代码。

* Eval代码（Eval code）

Eval的代码 – 在Eval函数内运行的代码。

执行上下文的建立分为2个阶段：

1. 进入上下文阶段：发生在函数调用时，但在函数执行前；
2. 执行代码阶段：变量赋值，函数引用，执行其他代码。

我们可以将执行上下文当作一个对象，然后使用伪代码来表示作用域链查找过程。

```javascript
EC={
    VO:{/* 函数中的arguments对象, 参数, 内部的变量以及函数声明 */},
        this:{},
            Scope:{ /* VO以及所有父执行上下文中的VO */ }

}
```

# VO(变量对象）／AO（活动对象）

基本解释：
>变量对象（Variable object）是说JS的执行上下文中都有个对象用来存放执行上下文中可被访问但是不能被delete的函数标示符、形参、变量声明等。它们会被挂在这个对象上，对象的属性对应它们的名字对象属性的值对应它们的值但这个对象是规范上或者说是引擎实现上的不可在JS环境中访问到活动对象

>活动对象（Activation object）有了变量对象存每个上下文中的东西，但是它什么时候能被访问到呢？就是每进入一个执行上下文时，这个执行上下文儿中的变量对象就被激活，也就是该上下文中的函数标示符、形参、变量声明等就可以被访问到了

## VO（变量对象）

VO的分类：

* 全局上下文VO；
* 函数上下文VO。

进入执行上下文是，VO的初始化过程为：

1. 函数的形参（当进入函数执行上下文时）

形参就是函数定义时的参数，实参就是函数调用时传入的参数。

对于没有传递参数，其值为undefined。

2. 函数声明（FUnctionDeclaration，FD）

变量对象的一个属性，其属性名和值都是函数对象创建出来的；如果变量对象已经包含了相同名字的属性，则替换它的值

3. 变量声明（var，variableDeclaration）

变量对象的一个属性，其属性名即为变量名，其值为undefined;如果变量名和已经声明的函数名或者函数的参数名相同，则不会影响已经存在的属性。

在函数的执行上下文中，VO（变量对象）不能直接访问。

## AO（活动对象）

AO是在进入函数的执行上下文时创建的，并为该对象初始化一个arguments属性，该属性的值为Arguments对象。

# 作用域链

在执行上下文的作用域中查找变量的过程被称为标识符解析(indentifier resolution)，这个过程的实现依赖于函数内部另一个同执行上下文相关联的对象——作用域链。作用域链是一个有序链表，其包含着用以告诉JavaScript解析器一个标识符到底关联着哪一个变量的对象。而每一个执行上下文都有其自己的作用域链Scope。

作用域链Scope其实就是对执行上下文EC中的变量对象VO&#124;AO有序访问的链表。能按顺序访问到VO|AO，就能访问到其中存放的变量和函数的定义。

`Scope`的定义形式：
```javascript
Scope = AO|VO + [[Scope]]
```
其中，AO始终在Scope的最前端：
```javascript
Scope = [AO].concat +([[Scope]]);
```

关于[[Scope]]

>[[Scope]]是一个包含了所有上层变量对象的分层链，它属于当前函数上下文，并在函数创建的时候，保存在函数中。

[[Scope]]是在函数创建的时候保存起来的——静态的（不变的），只有一次并且一直都存在——直到函数销毁。 比方说，哪怕函数永远都不能被调用到，[[Scope]]属性也已经保存在函数对象上了。

参考信息：

[https://segmentfault.com/a/1190000000533094](https://segmentfault.com/a/1190000000533094)

[https://segmentfault.com/a/1190000009041008](https://segmentfault.com/a/1190000009041008)

[https://leohxj.gitbooks.io/front-end-database/javascript-advance/scope-chain.html](https://leohxj.gitbooks.io/front-end-database/javascript-advance/scope-chain.html)

小练习：

1. 如下代码输出什么? 写出作用域链查找过程伪代码
```javascript
var x = 10;
bar();
function foo() {
  console.log(x);
}
function bar() {
  var x = 30;
  foo();
}
//最终输出为：10

/*
1.
globalContext = {
  AO: {
    x: 10;
    foo: function(){};
    bar: function(){}
  }
}
foo.[[scope]] = globalContext.AO
bar.[[scope]] = globalContext.AO

2.
fooContext = {
  AO: {};
  Scope: foo.[[scope]] = globalContext.AO
}

3.
barContext = {
  AO: x = 30;
  Scope: bar.[[scope]] = globalContext.AO
}
*/
```

```javascript
var x = 10;
bar();
function bar() {
  var x = 30;
  function foo() {
    console.log(x);
  }
  foo();
}
//最终输出为：30

/*
1.
globalContext = {
  AO: {
    x: 10;
    bar: function(){};
  }
}
bar.[[scope]] = globalContext.AO

2.
barContext = {
  AO: {
    x: 30;
    foo: function(){};
  };
  Scope: bar.[[scope]] = globalContext.AO
}

foo.[[scope]] = globalContext.AO

3.
fooContext = {
  AO: {};
  Scope: fot.[[scope]] = barContext.AO
}
*/
```

```javascript
var x = 10;
bar();
function bar() {
  var x = 30;
  (function () {
    console.log(x);
  })();
}
//最终输出为：30

/*
1.
globalContext = {
  AO: {
    x: 10;
    bar: function(){}
  }
}
bar.[[scope]] = globalContext.AO

2.
barContext = {
  AO: {
    x: 30;
    function
  };
  Scope: bar.[[scope]] = globalContext.AO
}
function.[[scope]] = barContext.AO

3. functionContext{
  AO:{};
  Scope: functionContext.[[scope]] = barContext.AO
}
*/
```

```javascript
var a = 1;

function fn() {
  console.log(a);     //undefined
  var a = 5
  console.log(a);     //5
  a++;
  var a;
  fn3();              //a = 1
  fn2();              //a = 6
  console.log(a);     //a = 20

  function fn2() {
    console.log(a);
    a = 20;
  }
}

function fn3() {
  console.log(a);
  a = 200;
}

fn();
console.log(a);       //200

//最终输出为：undefined 5 1 6 20 200

/*
1.
globalContext = {
  AO: {
    a: 1;
    fn: function(){};
    fn3: function(){}
  };
fn.[[scope]] = globalContext.AO
fn3.[[scope]] = globalContext.AO
}

2.
fnContext = {
  AO: {
    a: 5;
    fn2: function(){}
  }
  Scope: fnContext.[[scope]] = globalContext.AO
}
fn2.[[scope]] = fnContext.AO

3.
fn3Context = {
  AO: {};
  Scope: fn3Context.[[scope]] = globalContext.AO
}

4. fn2Context = {
  AO: {};
  Scope: fn2Context.[[scope]] = fnContext.AO
}
*/
```


