const mult = function () {
  console.log("开始计算乘积");

  let a = 1;
  for (let i = 0; i < arguments.length; i++) {
    a = a * arguments[i];
  }
  return a;
}

console.log(mult(2, 3));

const proxyMult = (function () {
  const cache = {};
  console.log(cache);
  return function () {
    const args = Array.prototype.join.call(arguments, ',');
    console.log(cache)
    if(args in cache) {
      return cache[args];
    }

    return cache[args] = mult.apply(this, arguments);
  }
})();

console.log(proxyMult(1, 3, 4));
console.log(proxyMult(1, 3, 4));