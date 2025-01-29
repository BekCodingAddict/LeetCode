### 171. Excel Sheet Column Number

Easy
Topics
Companies
Given a string columnTitle that represents the column title as appears in an Excel sheet, return its corresponding column number.

### For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...

### Example 1:

Input: columnTitle = "A"
Output: 1

### Example 2:

Input: columnTitle = "AB"
Output: 28

### Example 3:

Input: columnTitle = "ZY"
Output: 701

### Constraints:

1 <= columnTitle.length <= 7
columnTitle consists only of uppercase English letters.
columnTitle is in the range ["A", "FXSHRXW"].

# Approach

The Excel column title works like a base-26 number system, where:

- 'A' represents 1, 'B' represents 2, ..., 'Z' represents 26.
- "AB" is interpreted as (1 × 26) + 2 = 28.
- "ZY" is interpreted as (26 × 26) + 25 = 701.

### Step-by-step Breakdown

1. Convert all letters to uppercase (not necessary in this case because Excel column titles are always uppercase).
2. Initialize output = 0 to store the result.
3. Loop through each character in columnTitle:
4. Convert the letter to a numerical value using charCodeAt(0) - 64 (since 'A' has ASCII 65, subtracting 64 gives 1).
   Update output using the base-26 formula:
   lua
   Copy
   output = output \* 26 + value
5. This shifts the previously processed characters left (like in base conversion) and adds the new letter’s value.
   Return the final computed value.

# Complexity

- Time complexity:
  The function processes each character in columnTitle once, performing constant-time operations.
  O(n), where n is the length of columnTitle

- Space complexity:
  Only a few variables (output, value) are used, meaning no extra space is needed.
  O(1) (constant space).

# Code

```javascript []
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  columnTitle = columnTitle.toUpperCase();
  if (columnTitle.length > 7 || columnTitle.length < 1) return -1;
  let output = 0;
  for (letter of columnTitle) {
    let value = letter.charCodeAt(0) - 64;
    output = output * 26 + value;
  }
  return output;
};
```
