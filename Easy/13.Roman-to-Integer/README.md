## [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/description)

### Description

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1000

For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9.
- X can be placed before L (50) and C (100) to make 40 and 90.
- C can be placed before D (500) and M (1000) to make 400 and 900.
  Given a roman numeral, convert it to an integer.

### Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.

### Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.

### Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

### Constraints:

- 1 <= s.length <= 15
- s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
- It is guaranteed that s is a valid roman numeral in the range [1, 3999].

# Solution

## Approach

### 1. Brute Force Approach (Very Slow)

```js
var romanToInt = function (s) {
  const getRomanNumber = (char) => {
    switch (char) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  };

  let int = 0;
  for (let i = 0; i < s.length; i++) {
    let current = getRomanNumber(s[i]);
    let next = getRomanNumber(s[i + 1]);

    if (current < next) {
      int -= current;
    } else {
      int += current;
    }
  }

  return int;
};
```

Why is it slow?

- Repeated function calls: Every time getRomanNumber(s[i]) is called, a function execution occurs, which adds unnecessary overhead.
  switch-case overhead:
- A switch statement requires multiple comparisons before finding a match, making it slower than direct object lookups.

Time Complexity: O(n)

### 2. Map-Based Approach (Still Slow)

```js
var romanToInt = function (s) {
  const romanNumbers = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  let int = 0;
  for (let i = 0; i < s.length; i++) {
    let current = romanNumbers.get(s[i]);
    let next = romanNumbers.get(s[i + 1]);

    if (current < next) {
      int -= current;
    } else {
      int += current;
    }
  }

  return int;
};
```

Why is it still slow?

- Using Map.get() instead of an object lookup:
  - Map.get() involves a function call, whereas object[key] is a direct O(1) property lookup, which is faster.
  - Maps are optimized for dynamic keys, but we have static predefined keys (Roman numerals), so an object lookup is better.
- Still iterating from left to right (not optimal).
  - We process numerals in forward order, but subtraction-based numerals (e.g., IV = 4) work better if processed right to left.

Time Complexity: O(n)

### 3. Optimized Object Lookup + Right-to-Left Traversal

```js
/**
 * @param {string} s
 * @return {number}
 */
const getRomanNumber = (str) => {
  const romanNumbers = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  return romanNumbers.get(str) ?? 0;
};

var romanToInt = function (s) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let int = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let current = romanNumbers[s[i]];

    if (current < prev) {
      int -= current;
    } else {
      int += current;
    }

    prev = current;
  }

  return int;
};
```

Why is it fast?

1. Object Lookup is Faster than Map (romanNumbers[s[i]])

- Object lookups in JavaScript are O(1) property access, while Map.get() requires a function call.
- Since Roman numerals are static (never change), an object lookup is the best choice.

2. Right-to-Left Traversal Optimizes Subtractions

- When processing numerals right to left, we can efficiently handle subtraction cases (IV, IX, CM, etc.).
- This avoids unnecessary lookups or extra condition checks.

3. Only One Pass (O(n) Complexity)

- Each numeral is processed only once.
- No need for unnecessary checks or lookups.
