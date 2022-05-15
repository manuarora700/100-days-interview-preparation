/**
 * Problem: Non Repeating First Character: Given a string of characters, return the first non-repeating character.
 */

// Time: O(N) | Space: O(1) - because there are atmost 26 characters
const nonRepeatingFirstCharacter = (str) => {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return i;
    }
  }

  return null;
};

// Brute force: Time: O(N^2) | Space: O(1)
const nonRepeatingFirstCharacter2 = (str) => {
  for (let i = 0; i < str.length; i++) {
    let duplicate = false;
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        duplicate = true;
        break;
      }
    }

    if (!duplicate) {
      return i;
    }
  }
  return null;
};

const str = "abcdcaf";

console.log(nonRepeatingFirstCharacter(str));
console.log(nonRepeatingFirstCharacter2(str));
