var singleNumber = function (nums) {
  let unique;
  for (let num of nums) {
    unique ^= num;
  }
  return unique;
};

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 4, 5, 1, 2, 1, 2]));
console.log(singleNumber([1]));
