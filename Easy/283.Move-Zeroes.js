// 283. Move Zeroes
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

var moveZeroes = function (nums) {
  if (nums.length < 1 || nums.length > 10 ** 4) return -1;
  let index = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < -Math.pow(2, 31) || nums[i] > 2 ** 31 - 1) return -1;
    if (nums[i] !== 0) {
      temp = nums[index];
      nums[index] = nums[i];
      nums[i] = temp;
      index++;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
