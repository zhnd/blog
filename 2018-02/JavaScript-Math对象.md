Math对象是JavaScript的内置对象，提供一系列数学常数和数学方法。Math对象只提供了静态的属性和方法，所以使用时不用实例化。

# Math对象的属性
| 属性           | 说明                           |
| ------------ | ---------------------------- |
| Math.E       | 欧拉常数，也是自然对数的底数, 约等于 2.718.   |
| Math.LN2     | 2的自然对数, 约等于0.693.            |
| Math.LN10    | 10的自然对数, 约等于 2.303.          |
| Math.LOG2E   | 以2为底E的对数, 约等于 1.443.         |
| Math.LOG10E  | 以10为底E的对数, 约等于 0.434.        |
| Math.PI      | 圆周率，一个圆的周长和直径之比，约等于 3.14159. |
| Math.SQRT1_2 | 1/2的平方根, 约等于 0.707.          |
| Math.SQRT2   | 2的平方根,约等于 1.414.             |

# Math对象的方法

**三角函数（`sin()`, `cos()`, `tan()`,`asin()`, `acos()`, `atan()`, `atan2()`）是以弧度返回值的。可以通过除法`Math.PI / 180`把弧度转换为角度，也可以通过其他方法来转换。**

| 方法                      | 说明                                       |
| ----------------------- | ---------------------------------------- |
| Math.abs(x)             | 返回x的绝对值.                                 |
| Math.acos(x)            | 返回x的反余弦值.                                |
| Math.acosh(x)           | 返回x的反双曲余弦值.                              |
| Math.asin(x)            | 返回x的反正弦值.                                |
| Math.asinh(x)           | 返回x的反双曲正弦值.                              |
| Math.atan(x)            | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值.     |
| Math.atanh(x)           | 返回 x 的反双曲正切值.                            |
| Math.atan2(x, y)        | 返回 y/x 的反正切值.                            |
| Math.cbrt(x)            | 返回x的立方根.                                 |
| Math.ceil(x)            | 返回x向上取整后的值.                              |
| Math.clz32(x)           | Returns the number of leading zeroes of a 32-bit integer. |
| Math.cos(x)             | 返回x的余弦值.                                 |
| Math.cosh(x)            | 返回x的双曲余弦值.                               |
| Math.exp(x)             | 返回 Ex, 当x为参数,  E 是欧拉常数 (2.718...), 自然对数的底. |
| Math.expm1(x)           | 返回 exp(x)-1 的值.                          |
| Math.floor(x)           | 返回小于x的最大整数。                              |
| Math.fround(x)          | Returns the nearest single precision float representation of a number. |
| Math.hypot([x[,y[,…]]]) | Returns the square root of the sum of squares of its arguments. |
| Math.imul(x)            | Returns the result of a 32-bit integer multiplication. |
| Math.log(x)             | Returns the natural logarithm (loge, also ln) of a number. |
| Math.log1p(x)           | Returns the natural logarithm of 1 + x (loge, also ln) of a number. |
| Math.log10(x)           | Returns the base 10 logarithm of x.      |
| Math.log2(x)            | Returns the base 2 logarithm of x.       |
| Math.max([x[,y[,…]]])   | 返回0个到多个数值中最大值.                           |
| Math.min([x[,y[,…]]])   | 返回0个到多个数值中最小值.                           |
| Math.pow(x,y)           | 返回x的y次幂.                                 |
| Math.random()           | 返回0到1之间的伪随机数. 可能等于0，但是一定小于1              |
| Math.round(x)           | 返回四舍五入后的整数.但是`Math.round(-4.40)`值为-4     |
| Math.sign(x)            | 返回x的符号函数, 判定x是正数,负数还是0.                  |
| Math.sin(x)             | 返回正弦值.                                   |
| Math.sinh(x)            | 返回x的双曲正弦值.                               |
| Math.sqrt(x)            | 返回x的平方根.                                 |
| Math.tan(x)             | 返回x的正切值.                                 |
| Math.tanh(x)            | 返回x的双曲正切值.                               |
| Math.toSource()         | 返回字符串 "Math".                            |
| Math.trunc(x)           | 返回x的整数部分,去除小数.                           |



### 使用`Math.random()`生成随机数

1. 写一个函数，返回从min到max之间的随机整数，包括min不包括max 

```javascript
function getRandomArbitrary(min, max) {
  return min + Math.random() * (max - min);
}
```

2. 写一个函数，返回从min都max之间的 随机整数，包括min包括max 

```javascript
function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
```

3. 写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。

```javascript
function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function randomStr(n){
  var dict = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var str = '';
  for(i = 0; i < n;i++){
    str += dict[getRandomInt(0,62)];
  }
  return str;
}
var str = getRandStr(10);
console.log(str);

```

4. 写一个函数，生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255

```javascript
function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function randomIp(n) {
  var arr = [];
  for (var i = 0; i < 4; i++) {
    arr.push(getRandomInt(0, 255));
  }
  return arr.join('.');
}
var ip = getRandIP()
console.log(ip)
```

5. 写一个函数，生成一个随机颜色字符串，合法的颜色为`#000000~ #ffffff`

```javascript
function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function randomColor() {
  var dict = '1234567890abcdef';
  var arr = '';
  for (var i = 0; i < 6; i++) {
    arr += dict[getRandomInt(0, 16)];
  }
  return '#' + arr;
}
var color = randomColor();
console.log(color);
```


