// 2619. Array Prototype Last
// Easy
// Companies
// Hint
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

// Constraints:

// arr is a valid JSON array
// 0 <= arr.length <= 1000

// Seen this question in a real interview before?
// 1/5
// Yes
// No
// Accepted
// 152.6K
// Submissions
// 206.6K
// Acceptance Rate
// 73.8%
// Companies
// Hint 1
// Inside the Array.prototype.last function body, you have access to the "this" keyword. "this" is equal to the contents of the array in this case.
// Hint 2
// You can access elements in the array via this[0], this[1], etc. You can also access properties and method like this.length, this.forEach, etc.

// Array.prototype.last = function () {
//   if (!this.length) return -1;
//   return this[this.length - 1];
// };  // a little bit slow

Array.prototype.last = function () {
  return !this.length ? -1 : this[this.length - 1];
};

// Array.prototype.last = () => {
//   return !this.length ? -1 : this[this.length - 1];
// };

const arr = [1, 2, 3];
console.log(arr.last());
console.log([null, {}, 3].last());
console.log([].last());
