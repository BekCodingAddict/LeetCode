## 412. Fizz Buzz

Easy
Topics
Companies
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

Constraints:

1 <= n <= 104

# Approach and Intuition

The problem requires generating an array of strings for numbers from 1 to n based on the following rules:

1. If a number is divisible by both 3 and 5, add "FizzBuzz" to the array.
2. If a number is divisible by 3 but not 5, add "Fizz".
3. If a number is divisible by 5 but not 3, add "Buzz".
4. Otherwise, add the number itself as a string.

My solution follows a simple iteration-based approach:

1. Initialize an empty array arr to store the results.
2. Use a for loop to iterate from 1 to n:

- Check divisibility conditions using if statements:
  - If divisible by both 3 and 5, add "FizzBuzz".
  - If divisible by only 3, add "Fizz".
  - If divisible by only 5, add "Buzz".
  - Otherwise, convert the number to a string and add it to the array.

3. Return the resulting array.

I think, this approach ensures that all numbers are processed in a single pass, making it straightforward and efficient.

# Complexity

1. Time complexity:
   The for loop iterates from 1 to n, so the loop runs exactly n times.
   Within each iteration, the divisibility checks and the array push operation are O(1).
   Therefore, the overall time complexity is O(n).

2. Space complexity:
   The solution creates an array arr of size n to store the results.
   Other variables like i and the conditions occupy constant space.
   Hence, the space complexity is O(n).

# Code

```javascript []
/**
 * @param {number} n
 * @return {string[]}
 */
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
```
