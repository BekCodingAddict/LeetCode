// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

var searchInsert = function (nums, target) {
  // Validation for array length and target range
  if (
    nums.length < 1 ||
    nums.length > 10 ** 4 ||
    target < -Math.pow(10 ** 4) ||
    target > 10 ** 4
  ) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) {
      return middle; // Target found, return its index
    } else if (nums[middle] < target) {
      start = middle + 1; // Move to the right half
    } else {
      end = middle - 1; // Move to the left half
    }
  }

  // If target is not found, start will be at the index where it should be inserted
  return start;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3], 2));
