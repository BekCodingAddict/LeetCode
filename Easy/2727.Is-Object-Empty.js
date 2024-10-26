// 2727. Is Object Empty
// Easy
// Companies
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.

// Constraints:

// obj is a valid JSON object or array
// 2 <= JSON.stringify(obj).length <= 105

// var isEmpty = function (obj) {
//   if (obj === undefined || Object.keys(obj).length === 0) return true;
//   return false;
// };

// var isEmpty = function (obj) {
//   for (let _ in obj) return false;
//   return true;
// };

// var isEmpty = (obj) =>
//   obj === undefined || Object.keys(obj).length === 0 ? false : true;

var isEmpty = (obj) => {
  if (obj) return true;

  return false;
};

let obj = { x: 5, y: 42 };
let obj2 = {};
let obj3 = [null, false, 0];
console.log(isEmpty(obj));
console.log(isEmpty(obj2));
console.log(isEmpty(obj3));
