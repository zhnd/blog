小练习：

#### 题目1: 下面的代码输出多少？修改代码让 fnArr[i]() 输出 i。使用两种以上的方法

```javascript
var fnArr = [];
for (var i = 0; i < 10; i++) {
    fnArr[i] = function() {
        return i;
    };
}
console.log(fnArr[3]()); //  10
```

改写方法一：

```javascript
var fnArr = [];
for (var i = 0; i < 10; i++) {
  (function(i) {
    fnArr[i] = function() {
      return i;
    };
  })(i);
}

console.log(fnArr[3]());  //  3
```

改写方法二：

```javascript
var fnArr = [];
for (var i = 0; i < 10; i++) {
  fnArr[i] = (function(i) {
    return function() {
      return i;
    };
  })(i);
}
console.log(fnArr[3]());  //  3
```

#### 题目2： 封装一个汽车对象，可以通过如下方式获取汽车状态

```javascript
var Car = (function() {
  var speed = 0;

  function setSpeed(s) {
    speed = s;
  }

  function getSpeed() {
    console.log(speed);
  }

  function accelerate() {
    speed += 10;
  }

  function decelerate() {
    speed -= 10;
  }

  function getStatus() {
    if (speed > 0) {
      console.log('running');
    } else {
      console.log('stop');
    }
  }
  return {
    setSpeed: setSpeed,
    getSpeed: getSpeed,
    accelerate: accelerate,
    decelerate: decelerate,
    getStatus: getStatus
  };
})();

Car.setSpeed(30);
Car.getSpeed(); //30
Car.accelerate();
Car.getSpeed(); //40;
Car.decelerate();
Car.decelerate();
Car.getSpeed(); //20
Car.getStatus(); // 'running';
Car.decelerate();
Car.decelerate();
Car.getStatus(); //'stop';
//Car.speed;  //error
```


#### 题目3：下面这段代码输出结果是? 为什么?

```javascript
var a = 1;
setTimeout(function() {
  a = 2;
  console.log(a);
}, 0);
var a;
console.log(a);
a = 3;
console.log(a);
```

输出结果为：1 3 2

由于`setTimeout`异步延迟，里面的内容需要等到同步代码结束后才能执行，所以实际的代码执行顺序为：

```javascript
var a = 1;

var a;
console.log(a); //  1

a = 3;
console.log(a); //  3

(function() {
  a = 2;
  console.log(a);
})(); //  2
```


#### 题目4：下面这段代码输出结果是? 为什么?

```javascript
var flag = true;
setTimeout(function() {
  flag = false;
}, 0);
while (flag) {}
console.log(flag);
```

最终不会输出任何结果，由于定时器的存在，解析器将会优先执行其余代码；

执行到`while (flag) {}`时，由于`flag = true;`，代码将会继续执行，但函数内部没有任何代码信息，所以不会有输出。


#### 题目5： 下面这段代码输出？如何输出delayer: 0, delayer:1...（使用闭包来实现）

```javascript
for(var i=0;i<5;i++){
  setTimeout(function(){
         console.log('delayer:' + i );
  }, 0);
  console.log(i);
}
```

```javascript
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log('delayer:' + i);
    }, 0);
  })(i);
}
```

#### 题目6： 如何获取元素的真实宽高

```html
<input type="button" id="button" class="button" value="点击我，显示宽高" />
```

```css
  .button {
    height: 24px;
    border: 0;
    border-radius: .2em;
    background-color: #34538b;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
  }
```

```javascript
  document.getElementById("button").onclick = function() {
    var oStyle = this.currentStyle ? this.currentStyle : window.getComputedStyle(this, null);
    alert('height: ' + oStyle.height + '  width: ' + oStyle.width);
  };
```

参考信息：[http://www.zhangxinxu.com/wordpress/2012/05/getcomputedstyle-js-getpropertyvalue-currentstyle/](http://www.zhangxinxu.com/wordpress/2012/05/getcomputedstyle-js-getpropertyvalue-currentstyle/)

#### 题目7： URL 如何编码解码？为什么要编码？

* 2种编码方式：

1. `encodeURI()`:不会对下列字符编码:`ASCII字母、数字、~!@#$&*()=:/,;?+'`
2. `encodeURIComponent()`:不会对下列字符编码:`ASCII字母、数字、~!*()'`

* 2种解码方式：

1. `decodeURI()`
2. `decodeURIComponent()`

URL 的编码格式采用的是 ASCII码，一般来说，URL只能使用英文字母、阿拉伯数字喝某些标点符号，其余特殊符号便需要进行转码，同时也是为了提升安全性。

参考信息：

[【基础进阶】URL详解与URL编码](https://github.com/chokcoco/cnblogsArticle/issues/6)

[关于URL编码](http://www.ruanyifeng.com/blog/2010/02/url_encoding.html)

#### 题目8： 补全如下函数，判断用户的浏览器类型

```javascript
function isAndroid() {
  return /android/i.test(navigator.userAgent);
}

function isIphone() {
  return /iphone/i.test(navigator.userAgent);
}

function isIpad() {
  return /ipad/i.test(navigator.userAgent);
}

function isIOS() {
  return /iphone|ipad/i.test(navigator.userAgent);
}
```


