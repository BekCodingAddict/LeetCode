// 28. Find the Index of the First Occurrence in a String

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

var strStr = function (haystack, needle) {
  if (needle === "") return -1;
  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[j]) {
      ++j;
      if (needle.length === j) return i - needle.length + 1;
    } else {
      i -= j;
      j = 0;
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("butsad", "sad"));
console.log(strStr("butsa", "sad"));
console.log(strStr("leetcode", "leeto"));
