/**
 * Problem: Validate Subsequence: You are given two arrays, write a function to determine whether the second array is a subsequence of the first one.
 */

// order DOES matter
const validateSubsequence = (arr, targetArr) => {
  let sequenceIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetArr[sequenceIndex]) {
      sequenceIndex++;
    }
  }
  return sequenceIndex === targetArr.length;
};

// Order doesn't matter
const validateSubsequenceWithoutOrdering = (arr, targetArr) => {
  let mapper = {};
  targetArr.forEach((el) => {
    mapper[el] = mapper[el] + 1 || 1;
  });

  for (let i = 0; i < arr.length; i++) {
    if (mapper[arr[i]]) {
      mapper[arr[i]]--;
    }
  }
  let result = true;
  for (let key in mapper) {
    if (mapper[key] !== 0) {
      result = false;
      break;
    }
  }

  return result;
};

const arr = [5, 1, 22, 25, 6, -1, -1, 8, 10];
const targetArr = [1, 6, -1, 10];
console.log(validateSubsequence(arr, targetArr));
console.log(validateSubsequenceWithoutOrdering(arr, targetArr));
