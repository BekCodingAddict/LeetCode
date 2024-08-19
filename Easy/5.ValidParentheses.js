// Valid Parentheses
/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}' */

var isValid = function (s) {
  const hashMap = { "(": ")", "[": "]", "{": "}" };
  const arr = [];
  for (let i of s) {
    if (hashMap[i]) {
      // i is an openning backets
      arr.push(hashMap[i]);
    } else if (arr.length > 0 && arr[arr.length - 1] === i) {
      // i is closed bracket and top of the stack matches
      arr.pop();
    } else {
      // i is closing bracket and top of the stack doesn't matches
      return false;
    }
  }
  return arr.length === 0;
};
