## 136. Single Number

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]

Output: 1

Example 2:

Input: nums = [4,1,2,1,2]

Output: 4

Example 3:

Input: nums = [1]

Output: 1

Constraints:

1 <= nums.length <= 3 _ 104
-3 _ 104 <= nums[i] <= 3 \* 104
Each element in the array appears twice except for one element which appears only once.

Hint 1
Think about the XOR (^) operator's property.

### Intuition

The XOR operator has unique properties that make it suitable for solving this problem:

A number XORed with itself is 0 (a ^ a = 0).
A number XORed with 0 is the number itself (a ^ 0 = a).
XOR is commutative and associative, so the order of operations doesn't matter.
By XORing all the numbers in the array, all duplicate numbers will cancel out (since a ^ a = 0), leaving only the single, non-duplicate number.

### Approach

Initialize a variable unique with 0.
Iterate through each number in the array.
XOR the current number with unique and update unique.
At the end of the loop, unique will contain the single non-duplicate number.
Return unique.

### Complexity

Time complexity:
The algorithm processes each number in the array exactly once.
O(n), where n is the size of the input array.

Space complexity:
The algorithm uses a single variable unique and doesn't rely on any additional data structures.
O(1).

### Code

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let unique;
  for (let num of nums) {
    unique ^= num;
  }
  return unique;
};
```
