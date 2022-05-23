/**
 * Problem: First Duplicate Value: Given an array of integers, return the first duplicate value in the array.
 * If there are no duplicates, return -1.
 * Input: Integers in the range of 1 to N (Only positive Natural Numbers)
 */

// Hash Table - Time O(N) Space O(N)
const firstDuplicateValue = (arr) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) return arr[i];
    hash[arr[i]] = true;
  }
  return -1;
};

// In place - Using array indices - Time O(N) Space O(1)
const firstDuplicateValue2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const idx = Math.abs(arr[i]) - 1;
    if (arr[idx] < 0) return Math.abs(arr[i]);
    arr[idx] = -arr[idx];
  }
  return null;
};

// Brute force - Time: O(N^2) Space: O(1)
const firstDuplicateValue3 = (arr) => {
  let duplicateIdx = arr.length;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicateIdx = Math.min(duplicateIdx, j);
      }
    }
  }
  return duplicateIdx === arr.length ? -1 : arr[duplicateIdx];
};

const arr = [2, 1, 5, 2, 3, 3, 4];
console.log(firstDuplicateValue(arr)); // T: O(N) S: O(N)
console.log(firstDuplicateValue2(arr)); // T: O(N) S: O(1)
console.log(firstDuplicateValue3(arr)); // T: O(N^2) S: O(1)
