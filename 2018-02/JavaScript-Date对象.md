两个基础知识：

1. JavaScript内的时间戳指的是当前时间到1970年1月1日00:00:00 UTC对应的毫秒数;
2. 标准时间:
  - GMT：格林威治标准时间，指位于英国伦敦郊区的皇家格林威治天文台的标准时间，由于地球的自转不规则，因此导致GMT时间有误差；
  - UTC：世界标准时间，


Date对象是JavaScript提供的日期和时间的操作接口。它可以表示的时间范围是，1970年1月1日00:00:00前后的各1亿天（单位为毫秒）。


`Date()`对象可以作为普通函数直接调用，无论有没有参数，总是返回当前时间。 

# `new Date()`构造函数

日期对象的创建，使用new操作符和Date构造函数：

```javascript
  var now = new Date();
```

作为构造函数，如果不加参数，会返回代表当前时间的对象：

```javascript
var now = new Date();
console.log(now);

// 2017-08-25T02:39:35.181Z
```

作为构造函数，`Date()`对象可以接收多种格式参数：

1. `new Date(milliseconds)`

`Date`对象接受从1970年1月1日00:00:00 UTC开始计算的毫秒数作为参数。这意味着如果将Unix时间戳（单位为秒）作为参数，必须将Unix时间戳乘以1000。

Date构造函数的参数可以是一个负数，表示1970年1月1日之前的时间。

```javascript
new Date(1378218728000)
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// 1970年1月2日的零时
var Jan02_1970 = new Date(3600 * 24 * 1000);
// Fri Jan 02 1970 08:00:00 GMT+0800 (CST)

// 1969年12月31日的零时
var Dec31_1969 = new Date(-3600 * 24 * 1000);
// Wed Dec 31 1969 08:00:00 GMT+0800 (CST)
```

2. `new Date(datestring)`

Date对象还接受一个日期字符串作为参数，返回所对应的时间。所有可以被Date.parse()方法解析的日期字符串，都可以当作Date对象的参数。

```javascript
new Date('January 6, 2013');

<!-- Date 2013-01-05T16:00:00.000Z -->
```

日期字符串的完整格式是“month day, year hours:minutes:seconds”，比如“December 25, 1995 13:30:00”。如果省略了小时、分钟或秒数，这些值会被设为0。

3. `new Date(year, month [, day, hours, minutes, seconds, ms])`

在多个参数的情况下，Date对象将其分别视作对应的年、月、日、小时、分钟、秒和毫秒。如果采用这种用法，最少需要指定两个参数（年和月），其他参数都是可选的，默认等于0。如果只使用年一个参数，Date对象会将其解释为毫秒数。

各个参数的取值范围为：

* year：四位年份，如果写成两位数，则加上1900
* month：表示月份，0表示一月，11表示12月
* date：表示日期，1到31
* hour：表示小时，0到23
* minute：表示分钟，0到59
* second：表示秒钟，0到59
* ms：表示毫秒，0到999

上面的参数如果超出了范围，那么将进行自动折算，比如月份为15，将折算为下一年的4月。

上面的参数如果为负数，表示从基准扣除的时间。

年份如果是0到99，会自动加上1900。比如，0表示1900年，1表示1901年；如果为负数，则表示公元前。

# 日期的运算

类型转换时，Date对象的实例如果转为数值，则等于对应的毫秒数；如果转为字符串，则等于对应的日期字符串。所以，两个日期对象进行减法运算，返回的就是它们间隔的毫秒数；进行加法运算，返回的就是连接后的两个字符串。

```javascript
var then = new Date(1993, 11, 02);
var now = new Date(2017, 8, 27);

console.log(now - then);
// 751680000000

console.log(now + then);
// Wed Sep 27 2017 00:00:00 GMT+0800 (CST)Thu Dec 02 1993 00:00:00 GMT+0800 (CST)?
```

# Date对象的静态方法

## `Date.now()`

now方法返回当前距离1970年1月1日00:00:00的毫秒数（Unix时间戳乘以1000）。。


```javascripy
console.log(Date.now());
```

## `Date.parse()`

parse方法用来解析日期字符串，返回距离1970年1月1日 00:00:00的毫秒数

日期字符串的格式应该完全或者部分符合YYYY-MM-DDTHH:mm:ss.sssZ格式，Z表示时区，是可选的

如果传入`Date.parse()`方法的字符串不能表示日期，返回NaN

默认情况下，Date对象返回的都是当前时区的时间。

## `Date.UTC()`

返回UTC时间。该方法接受年、月、日等变量作为参数，返回当前距离1970年1月1日 00:00:00 UTC的毫秒数。

# Date实例对象的方法

Date实例对象一般分为3类：

1. to类：从Date对象返回一个字符串，表示指定的时间。
2. get类：获取Date对象的日期和时间。
3. set类：设置Date对象的日期和时间。

## to类方法

### `Date.prototype.toString()`

返回一个完整的日期字符串。

```javascript
var now = new Date(2017, 8, 27);
console.log(now);
// 2017-09-26T16:00:00.000Z

console.log(now.toString());
// Wed Sep 27 2017 00:00:00 GMT+0800 (CST)
```

### `Date.prototype.toUTCString()`

返回对应的UTC时间，也就是时区时间。

```javascript
var now = new Date(2017, 8, 27);
console.log(now);
// 2017-09-26T16:00:00.000Z

console.log(now.toUTCString());
// Tue, 26 Sep 2017 16:00:00 GMT
```

### `Date.prototype.toISOString()`

返回对应时间的ISO8601写法。返回的也是UTC时区时间。

```javascript
var now = new Date(2017, 8, 27);
console.log(now);
// 2017-09-26T16:00:00.000Z

console.log(now.toISOString());
// 2017-09-26T16:00:00.000Z
```

### `Date.prototype.toJSON()`

返回一个符合JSON格式的ISO格式的日期字符串，与toISOString方法的返回结果完全相同。

### `Date.prototype.toDateString()`

返回日期字符串。

```javascript
var now = new Date(2017, 8, 27);
console.log(now);
// 2017-09-26T16:00:00.000Z

console.log(now.toDateString());
// Wed Sep 27 2017
```

### `Date.prototype.toTimeString()`

返回时间字符串。

```javascript
var now = new Date(2017, 8, 27);
console.log(now);
// 2017-09-26T16:00:00.000Z

console.log(now.toTimeString());
// 00:00:00 GMT+0800 (CST)
```

### `Date.prototype.toLocaleDateString()`

返回当地日期字符串。

```javascript
var now = new Date(2017, 8, 27);
console.log(now);
// 2017-09-26T16:00:00.000Z

console.log(now.toLocaleDateString());
// 2017-9-27
```

## get类方法

* getTime()：返回距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
* getDate()：返回实例对象对应每个月的几号（从1开始）。
* getDay()：返回星期几，星期日为0，星期一为1，以此类推。
* getYear()：返回距离1900的年数。
* getFullYear()：返回四位的年份。
* getMonth()：返回月份（0表示1月，11表示12月）。
* getHours()：返回小时（0-23）。
* getMilliseconds()：返回毫秒（0-999）。
* getMinutes()：返回分钟（0-59）。
* getSeconds()：返回秒（0-59）。
* getTimezoneOffset()：返回当前时间与UTC的时区差异，以分钟表示，返回结果考虑到了夏令时因素。


## set类方法

* setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
* setYear(year): 设置距离1900年的年数。
* setFullYear(year [, month, date])：设置四位年份。
* setHours(hour [, min, sec, ms])：设置小时（0-23）。
* setMilliseconds()：设置毫秒（0-999）。
* setMinutes(min [, sec, ms])：设置分钟（0-59）。
* setMonth(month [, date])：设置月份（0-11）。
* setSeconds(sec [, ms])：设置秒（0-59）。
* setTime(milliseconds)：设置毫秒时间戳。


参考信息：[《JavaScript 标准参考教程（alpha）》，by 阮一峰](http://javascript.ruanyifeng.com/stdlib/date.html#toc2)


小练习：

1. 写一个函数getChIntv，获取从当前时间到指定日期的间隔时间

```javascript
function getChIntv(datestr) {
  var targetDate = new Date(datestr);
  var curDate = new Date();
  var offset = Math.abs(targetDate - curDate);
  var totalSeconds = Math.floor(offset / 1000);
  var second = totalSeconds % 60;
  var totalMinutes = Math.floor(totalSeconds / 60);
  var minute = totalMinutes % 60;
  var totalHours = Math.floor(totalMinutes / 60);
  var hours = totalHours % 24;
  var days = Math.floor(totalHours / 24);

  return targetDate.toLocaleDateString() + ' 距离现在：' + days + '天' + hours + '小时' + minute + '分钟' + second + '秒';
}

var offectTime = getChIntv('2017, 7, 27');
console.log(offectTime);
// 2017-7-27 距离现在：31天13小时2分钟3秒

```

2. 把hh-mm-dd格式数字日期改成中文日期

```javascript
function getChsDate(inputDate) {
  var dict = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七",
    "十八", "十九", "二十", "二十一", "二十二", "二十三", "二十四", "二十五", "二十六", "二十七", "二十八", "二十九", "三十",
    "三十一"
  ];
  var arr = inputDate.split('-'); //  从'-'处把字符串分割成字符串数组
  // [ '2017', '08', '27' ]

  var arrYear = arr[0].split(''); //  将年份分割成数组
  // [ '2', '0', '1', '7' ]

  var strYear = '';
  for (var i = 0; i < 4; i++) {
    strYear += dict[parseInt(arrYear[i])];
  }
  var strMonth = dict[parseInt(arr[1])];
  var strDate = dict[parseInt(arr[2])];
  return strYear + '年' + strMonth + '月' + strDate + '日';
}
var result = getChsDate('2017-08-27');
console.log(result);
```

3. 写一个函数，参数为时间对象毫秒数的字符串格式，返回值为字符串。假设参数为时间对象毫秒数t，根据t的时间分别返回如下字符串:

* 刚刚（ t 距当前时间不到1分钟时间间隔）
* 3分钟前 (t距当前时间大于等于1分钟，小于1小时)
* 8小时前 (t 距离当前时间大于等于1小时，小于24小时)
* 3天前 (t 距离当前时间大于等于24小时，小于30天)
* 2个月前 (t 距离当前时间大于等于30天小于12个月)
* 8年前 (t 距离当前时间大于等于12个月)

```javascript
function pastTime(inputTime) {
  var curTime = new Date();
  var nowTime = curTime.getTime();
  var offsetMinute = Math.floor((nowTime - inputTime) / 1000 / 60);

  var offsetTime;
  if (offsetMinute < 1) {
    offsetTime = '刚刚';
  } else if (offsetMinute < 60) {
    offsetTime = offsetMinute + '分钟前';
  } else if (offsetMinute < 1440) {
    offsetTime = Math.floor(offsetMinute / 60) + '小时前';
  } else if (offsetMinute < 43200) {
    offsetTime = Math.floor(offsetMinute / 60 / 24) + '天前';
  } else if (offsetMinute < 518400) {
    offsetTime = Math.floor(offsetMinute / 60 / 24 / 30) + '个月前';
  } else {
    offsetTime = Math.floor(offsetMinute / 60 / 24 / 30 / 12) + '年前';
  }
  return offsetTime;
}

var str = pastTime('1483200000000');
console.log(str);
```

