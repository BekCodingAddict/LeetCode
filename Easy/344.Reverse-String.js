// 344. Reverse String
// Easy
// Topics
// Companies
// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

var reverseString = function (s) {
  let j = s.length - 1;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    j -= 1;
  }
  return s;
};

// const reverseString = (s) => s.reverse();

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
console.log(reverseString(["L", "e", "e", "t", "C", "o", "d", "e"]));
