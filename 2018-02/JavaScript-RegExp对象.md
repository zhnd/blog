小练习：

1.  `\d` `\w` `\s` `[a-zA-Z0-9]` `\b` `.` `*` `+` `?` `x{3}` `^` `$`分别是什么?

|    正则表达式  | 含义    |
|    ------    |  ------    |
|    `\d`   |  数字字符，等价于 [0-9]    |
|    `\w`   |  A-Z、a-z、0-9 和下划线，等价于[A-Za-z_0-9]    |
|    `\s`  |  任何空白字符。 其中包括空格、制表符和换页符，等价于[ \f\n\r\t\v]    |
|    `[a-zA-Z0-9]`   |  a-z、A-Z、0-9    |
|    `\b`   |  单词的边界    |
|    `.`   |  除换行符 `\n`之外的任何单个字符。    |
|    `*`   |  0次或多次的字符或子表达式。    |
|    `+`   |  至少一次的字符或子表达式。    |
|    `?`   |  0次或1次的字符或子表达式。    |
|    `x{3}`   |  3个x序列的字符串    |
|    `^`   |  搜索字符串开始的位置,[^abc]则是取反向类    |
|    `$`   |  搜索字符串结尾的位置    |


2. 写一个函数trim(str)，去除字符串两边的空白字符

```javascript
function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}
```

3. 写一个函数isEmail(str)，判断用户输入的是不是邮箱

```javascript
function isEmail(str) {
  return /^\w+@[a-zA-Z0-9]+\.[a-z]{2,4}$/.test(str);
}
```

4. 写一个函数isPhoneNum(str)，判断用户输入的是不是手机号

```javascript
function isPhoneNumber(str) {
  return /^1\d{10}$/.test(str);
}
```

5. 写一个函数isValidUsername(str)，判断用户输入的是不是合法的用户名（长度6-20个字符，只能包括字母、数字、下划线）

```javascript
function isValidUsername(str) {
  return /^\w{6,20}$/.test(str);
}
```

6. 写一个函数isValidPassword(str), 判断用户输入的是不是合法密码（长度6-20个字符，只包括大写字母、小写字母、数字、下划线，且至少至少包括两种）

```javascript
function isValidPassword(str) {
  if (!/^\w{6,20}$/.test(str)) {
    return false;
  }
  if (/^[A-Z]{6,20}$/.test(str)) {
    return false;
  }
  if (/^[a-z]{6,20}$/.test(str)) {
    return false;
  }
  if (/^[0-9]{6,20}$/.test(str)) {
    return false;
  }
  if (/^_{6,20}$/.test(str)) {
    return false;
  }
  return true;
}
```

7. 写一个正则表达式，得到如下字符串里所有的颜色

```javascript
var reg = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}(?=;))/g;
var subj = "color: #121212; background-color: #AA00ef; width: 12px; bad-colors: f#fddee ";
console.log(subj.match(reg));
// ['#121212', '#AA00ef']
```

8. 下面代码输出什么? 为什么? 改写代码，让其输出[""hunger"", ""world""].

```javascript
var str = 'hello  "hunger" , hello "world"';
var pat = /".*"/g;
console.log(str.match(pat));
// [ '"hunger" , hello "world"' ]
// 贪婪模式下尽量匹配长的字符串

var pat = /".*?"/g;
console.log(str.match(pat));
// [ '"hunger"', '"world"' ]
```


