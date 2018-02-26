#### 为什么要使用模块化？

* 代码解藕，写好的组件可以单独复用，从而降低开发成本和维护成本；
* 各个组件开发分离，方便团队分工合作；
* 解决命名冲突；
* 方便依赖管理；
* 提高代码可读性。

#### CMD规范以及应用

CMD规范是由SeaJS 在推广过程中对模块定义的规范化产生出来的。

在Sea.js中，所有JavaScript模块都遵循 CMD（[Common Module Definition](https://github.com/cmdjs/specification/blob/master/draft/module.md)） 模块定义规范。该规范明确了模块的基本书写格式和基本交互规则。

* 在CMD中，一个模块就是一个文件。代码书写格式为：

```javascript
define(factory);
```

* define：是一个全局函数，用来定义模块；
* factory：
  1. 为对象、字符串：表示模块的接口就是该对象、字符串：
  2. 为函数：表示是模块的构造方法。执行该构造方法，可以得到模块向外提供的接口。factory 方法在执行时，默认会传入三个参数：require、exports 和 module。

此外，define还可以接受多个参数：

```javascript
define(id?, deps?, factory);
```

* id：（可以省略）表示模块名称，省略后的模块名为文件名；
* deps：（可以省略）表示被依赖项；

使用示例：

```javascript
define('hello', ['jquery'], function(require, exports, module) {

  //模块代码

});
```

更多信息：
[CMD 模块定义规范](https://github.com/seajs/seajs/issues/242)

[Common Module Definition / draft](https://github.com/cmdjs/specification/blob/master/draft/module.md)

#### AMD规范以及应用

AMD 即Asynchronous Module Definition，中文名是异步模块定义的意思。它是一个在浏览器端模块化开发的规范

由于不是JavaScript原生支持，使用AMD规范进行页面开发需要用到对应的库函数，也就是大名鼎鼎RequireJS，实际上AMD 是 RequireJS 在推广过程中对模块定义的规范化的产出

requireJS主要解决两个问题：

* 多个js文件可能有依赖关系，被依赖的文件需要早于依赖它的文件加载到浏览器
* js加载的时候浏览器会停止页面渲染，加载文件越多，页面失去响应时间越长

看一个使用requireJS的例子：

```javascript
// 定义模块 myModule.js
define(['dependency'], function() {
  var name = 'Byron';

  function printName() {
    console.log(name);
  }

  return {
    printName: printName
  };
});

// 加载模块
require(['myModule'], function(my) {　
  my.printName();
}
);
```

#### CommonJS规范以及应用

1. 定义模块：根据CommonJS规范，一个单独的文件就是一个模块。每一个模块都是一个单独的作用域，也就是说，在该模块内部定义的变量，无法被其他模块读取，除非定义为global对象的属性

2. 模块输出： 模块只有一个出口，module.exports对象，我们需要把模块希望输出的内容放入该对象

3. 加载模块： 加载模块使用require方法，该方法读取一个文件并执行，返回文件内部的module.exports对象

使用示例：

```javascript
//模块定义 myModel.js

var name = 'Byron';

function printName() {
  console.log(name);
}

function printFullName(firstName) {
  console.log(firstName + name);
}

module.exports = {
  printName: printName,
  printFullName: printFullName
};

//加载模块

var nameModule = require('./myModel.js');

nameModule.printName();
```

参考信息：

[详解JavaScript模块化开发](https://segmentfault.com/a/1190000000733959)

[Javascript模块化编程（一）：模块的写法](http://www.ruanyifeng.com/blog/2012/10/javascript_module.html)

[Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)

[Javascript模块化编程（三）：require.js的用法](http://www.ruanyifeng.com/blog/2012/11/require_js.html)
