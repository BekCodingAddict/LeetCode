var filter = function (arr, fn) {
  if (arr.length <= 0 || arr.length >= 1000) return null;

  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    // if (fn(arr[i], i)) newArr.push(arr[i]);
    fn(arr[i], i) && newArr.push(arr[i]);
  }
  return newArr;
};

function firstIndex(n, i) {
  return i === 0;
}

function greaterThan10(n) {
  return n > 10;
}

function plusOne(n) {
  return n + 1;
}
console.log(filter([-2, -1, 0, 1, 2], plusOne));
