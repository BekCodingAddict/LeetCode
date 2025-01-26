var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      arr.push("Fizz");
      continue;
    }
    if (i % 5 == 0) {
      arr.push("Buzz");
      continue;
    } else arr.push(String(i));
  }
  return arr;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
