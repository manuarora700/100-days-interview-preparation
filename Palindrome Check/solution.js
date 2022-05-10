/**
 * Problem: Palindrome Check: Check if a string is a palindrome.
 */

// Time: O(n)
const palindromeCheck = (str) => {
  return str === str.split("").reverse().join("");
};

// Time: O(n)
const palindromeCheckTwoPointers = (str) => {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Time: O(n) Space: O(n)

palindromeCheckRecursive = (str, i = 0) => {
  let j = str.length - 1 - i;
  if (i >= j) {
    return true;
  }
  if (str[i] !== str[j]) {
    return false;
  }
  return palindromeCheckRecursive(str, i + 1);
};
const str = "manuunam";

console.log(palindromeCheck(str));
console.log(palindromeCheckTwoPointers(str));
console.log(palindromeCheckRecursive(str));
