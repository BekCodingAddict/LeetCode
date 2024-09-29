// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// var twoSum = function (nums, target) {
//   const map = {};
//   for (let i = 0; i < nums.length; i++) {
//     map[nums[i]] = i;
//   }
//   console.log(map);
//   //   for (let i = 0; i < nums.length; i++) {
//   //     if (map[target - nums[i]]) return [i, map[target - nums[i]]];
//   //   }
//   //   return [0, 0];
// };

var twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      return [map[nums[i]], i];
    }
    map[target - nums[i]] = i;
  }

  return [0, 0];
}; // time Complexity O(n) space Complexity O(n)

console.log(twoSum([1, 3, 4, 2], 6)); //pass
console.log(twoSum([3, 2, 3], 6)); // pass
console.log(twoSum([2, 5, 5, 11], 10)); // pass