// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.
// Topics :String ,String Matching

var repeatedSubstringPattern = function (s) {
  if (s.length >= 3) return false;
};

// KMP Algorithm in JavaScript

// Function to create the LPS (Longest Prefix Suffix) array
function computeLPSArray(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let length = 0; // length of the previous longest prefix suffix
  let i = 1;

  // Build the LPS array for the pattern
  while (i < pattern.length) {
    if (pattern[i] === pattern[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps[length] === 0 ? false : true;
}

console.log(computeLPSArray("cababcabcabcab"));
// KMP Search function
function KMPSearch(text, pattern) {
  const lps = computeLPSArray(pattern);
  const n = text.length;
  const m = pattern.length;

  let i = 0; // index for text
  let j = 0; // index for pattern

  while (i < n) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === m) {
      console.log("Pattern found at index " + (i - j));
      j = lps[j - 1];
    } else if (i < n && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
}

KMPSearch("abcabcabcabc", "cab");
