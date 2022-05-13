/**
 * Problem: Run Length Encoding: Encoding a string using Run Length Encoding.
 */

// Time: O(N) | Space: O(N)
const runLengthEncoding = (str) => {
  let map = {};
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
  }
  for (let key in map) {
    newStr += map[key] + key;
  }
  return newStr;
};

// Time: O(N)
const runLengthEncoding2 = (str) => {
  let newStr = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      newStr += count + str[i];
      count = 1;
    }
  }

  return newStr;
};

const str = "aabbcccddddeeeee";
console.log(runLengthEncoding(str));
console.log(runLengthEncoding2(str));
