# if语句

当指定条件为 true 时，if 语句 会执行一条语句。如果该条件为 false，则执行另一条语句。

语法格式为：

```javascript
  if (condition) {
    statement1
  } else {
    statement2
  }
```

condition值为 true 或 false 的表达式；

statement1：如果条件值为 true 时执行的语句。可为任意语句，包括更深层的内部 if 语句。要执行多条语句，使用语句块 ({ ... }) 将这些语句分组；若不想执行语句，则使用空语句。

statement2：如果条件值为 false且else从句存在时执行的语句。可为任意语句，包括语句块和更深层的内部 if 语句。

# do-while语句

do-while语句是一种后测试循环语句，只有在循环体中的代码执行之后，才会测试出口条件。

在对条件表达式求值之前，循环体内的代码至少被执行一次，语法格式为：

```javascript
  do {
    statement
  } while (expression)
```

例如：
```javascript
    var i = 0;
    do {
       i += 1;
       console.log(i);   //输出结果为123456
    } while (i < 5);
```

# while语句

while语句是一种前测试循环语句，只有在循环体中的代码执行之前，才会测试出口条件。

语法格式为：

```javascript
    while (condition) {
      statement
    }
```

例如：
```javascript
  var i = 0;
  while (i < 5){
    i += 1;
    console.log(i);  //输出结果为12345
  }
```

# for语句

>for语句用于创建一个循环,它包含了三个可选的表达式,三个可选的表达式包围在圆括号中并由分号分隔,后面跟随一个语句或一组语句在循环中执行.

语法格式为：

```javascript
    for ([initialization]; [condition]; [final-expression])
   statement
```

例如：
```javascript
  for (var i = 0; i < 9; i++) {
    console.log(i);            //输出值为012345678
  }
```

# for-in语句

可以用来枚举对象的属性，语法格式为：

```javascript
    for (variable in object) {...}
   statement
```

例如：
```javascript
  for (var proName in window){
    console.log(proName);       //可显示BOM中window对象的所有属性
  }
```

# label语句

可以在代码中添加标签，以便将来使用，语法格式为：

```javascript
    label :
   statement
```

例如：
```javascript
  start : for(var i = 0; i < 10;i++)
  console.log(i);
```

# break和continue语句

用于在循环中精确控制代码的执行，
* break语句会立即退出循环，强制执行循环后面的语句；
* continue语句也会立即退出循环，但退出循环后会从循环的顶部继续执行。

例如：

```javascript
  var num = 0;
  for (var i = 1; i < 10; i++){
    if(i % 5 == 0){
      break; //值为4
      continue;//值为8
    }
    num++;
  }
  console.log(num);
```

# with语句

*不推荐使用with语句，因为可能造成bug或者性能损失。*

用于将代码的作用域设置到一个特定的对象中，语法格式为：

```javascript
    with (expression) {
      statement
    }
```

例如：

```javascript
  var qs = location.search.substring(1);
  var hostNname = location.hostname;
  var url = location.href;
  //可简化为：
  with(location){
    var qs = search.substring(1);
    var hostNname = hostname;
    var url = href;
  }
```

# switch语句

如果表达式等于这个值，则执行后面的语句，语法格式为：

```javascript
switch (expression) {
  case value1:
    // 当 expression 的结果与 value1 匹配时，从此处开始执行
    statements1；
    [break;]
  case value2:
    // 当 expression 的结果与 value2 匹配时，从此处开始执行
    statements2;
    [break;]
  ...
  case valueN:
    // 当 expression 的结果与 valueN 匹配时，从此处开始执行
    statementsN;
    [break;]
  default:
    // 如果 expression 与上面的 value 值都不匹配时，执行此处的语句
    statements_def;
    [break;]
}
```

其中：
1. break关键字会导致代码执行流跳出switch语句；
2. 如果省略break关键字，会导致执行完当前case后，继续执行下一个case；
3. 最后面的default关键字则用于在表达式不匹配上述条件时执行它下面的代码。

例如：

```javascript
  var age = 24;
  switch (age) {
    case age < 24:
      console.log("age < 24");
      break;
    case age = 24:
      console.log("age = 24");
      break;
    case age > 24:
      console.log("age > 24");
      break;
    default:
      console.log("not age");
  }
```



小练习：

1. 遍历数组，把数组里的打印数组每一项的平方

```javascript
var arr = [3, 4, 5];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i] * arr[i]);
}
```

2. 遍历 JSON, 打印里面的值

```javascript
var obj = {
  name: 'hunger',
  sex: 'male',
  age: 28
 };
 for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}
// obj.name = hunger
// obj.sex = male
// obj.age = 28
```

