## 169. Majority Element

Easy
Topics
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

### Example 1:

Input: nums = [3,2,3]
Output: 3

### Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

### Constraints:

n == nums.length
1 <= n <= 5 \* 104
-109 <= nums[i] <= 109

### Follow-up: Could you solve the problem in linear time and in O(1) space?

### Topics

Array
Hash Table
Divide and Conquer
Sorting
Counting

## Soluition

### Brute Force approiach

1. First Sort the Array using Quick Sort
2. Then after loop through the array and count majority element

It works but so slow solution

Code

```js
var majorityElement = function (nums) {
  nums = quickSort(nums);
  let majority = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (majority === nums[i]) {
      count += 1;
      if (count > nums.length / 2) return nums[i];
    } else {
      majority = nums[i];
      count = 1;
    }
  }
  return -1;
};

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter((x) => x < pivot);
  let middle = arr.filter((x) => x === pivot);
  let right = arr.filter((x) => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}
```

### 🔍 Why is it slow?

1. Sorting takes O(n log n)

- Function first sorts the array using QuickSort, which takes O(n log n) in the average case.

2. Counting takes O(n)

- After sorting, you loop through the array once to count occurrences of elements, which takes O(n).

### Total Time Complexity:

- O(nlogn)+O(n)=O(nlogn)

his is too slow because the best solutions can solve the problem in O(n) time.

## 🚀 Faster Approach: Boyer-Moore Voting Algorithm (O(n) Time, O(1) Space)

The Boyer-Moore Voting Algorithm finds the majority element in one pass without sorting.
It works by maintaining a count of a candidate element while traversing the array.

Optimized Code (JavaScript):

```js
var majorityElement = function (nums) {
  let candidate = nums[0],
    count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};
```

### Why is this fast?

- Time Complexity: O(n) → Only one loop through nums.
- Space Complexity: O(1) → Uses only a few extra variables.
