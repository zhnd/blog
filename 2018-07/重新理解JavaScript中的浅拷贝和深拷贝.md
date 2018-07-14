<div id="top">


<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

* [浅拷贝](#浅拷贝)
* [深拷贝](#深拷贝)
	* [使用递归方法实现深拷贝](#使用递归方法实现深拷贝)
	* [使用JSON方式实现深拷贝](#使用json方式实现深拷贝)

<!-- /code_chunk_output -->


之前都是看别人讲深浅拷贝，这里我将按照自己的思路重新整理一下，关于深拷贝的方法有很多种，我将结合自身水平写出来当前状态下所能理解的方法，以后进步了会接着补充。

首先，在浅拷贝和深拷贝中，只针对Object，Array这样的复杂对象。

简单的说，拷贝就是复制对象，两者之间只是复制的方式不同，其中：
* 浅拷贝：只拷贝对象的第一层级，对于对象或者数组对象，仍然是引用，修改任何一方的值，另一方的值也会随之改变。
* 深拷贝：拷贝对象的每一层级，修改内容互不影响。

用个小例子说明一下。

[⬆返回顶部](#top)

假设存在下面的这个对象，我们将分别对他进行浅拷贝和深拷贝操作：

```javascript
var obj = {
  name: 'hello',
  age: 18,
  frind: {
    name: 'world',
    age: 16,
  }
};
```

## 浅拷贝

下面我们将创建一个函数对其进行浅拷贝操作：

```javascript
function shadowCopy(obj) {
  var newObj = {};

  for (var key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}
```

接着，我们开始修改对象的值：

```javascript
var myObj = shadowCopy(obj);

obj.frind.age = 25;
console.log(myObj.frind.age); //  25
```

这个时候我们就可以输出的值为：25，

可见老的对象obj和浅拷贝得到的新对象myObj共同指向friend属性，也就是只拷贝引用。

在新的JavaScript语法中，可以直接使用`Object.assign()`方法实现浅拷贝。

使用如下代码即可实现：

```javascript
var assignObj = Object.assign({}, obj);
console.log(assignObj);
```

在使用浅拷贝的情况下，如果我们需要在实际运用中修改值，就会很不方便，那么我们就需要深拷贝了。

[⬆️返回顶部](#top)

## 深拷贝
### 使用递归方法实现深拷贝

我们可以使用下面这个函数来通过递归实现对象的深拷贝：

```javascript
function deepCopy(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number' || typeof obj[key] === 'boolean' || typeof obj[key] === 'string' || obj[key] === undefined || obj[key] === null) {
      newObj[key] = obj[key];
    } else {
      newObj[key] = deepCopy(obj[key]);
    }
  }

  return newObj;
}
```

接着我们使用这个函数对obj对象实行同样的操作，来看看输出的值：

```javascript
var myObj = deepCopy(obj);

obj.frind.age = 25;
console.log(myObj.frind.age); //  16
```

结果很明显，新的实例对象和之前的实例对象互不影响。

此外，我们我们还可以使用另外一种简易方式来实现深拷贝。

[⬆返回顶部](#top)

### 使用JSON方式实现深拷贝

首先我们介绍一下需要使用到的JSON的两个方法：

* JSON.parse()：解析一个JSON字符串，构造由字符串描述的JavaScript值或对象。
* JSON.stringify()：将一个JavaScript值转换为一个JSON字符串，如果指定了一个replacer函数，则可以替换值，或者如果指定了一个replacer数组，可选地仅包括指定的属性。

接下来我们写一下JSON的实现函数：

```javascript
function jsonClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
```

同样的，我们使用这个函数对obj对象实行同样的操作，来看看输出的值：

```javascript
var myObj = jsonClone(obj);

obj.frind.age = 25;
console.log(myObj.frind.age); //  16
```

可见，我们是完全可以实现深拷贝操作的。

以上2种方法都可以实现对象的深拷贝，但是在实际运用中暂时没有考虑性能以及其他方面因素，随着自身学习的提升，还将会完善和优化文章内容。

[⬆返回顶部](#top)