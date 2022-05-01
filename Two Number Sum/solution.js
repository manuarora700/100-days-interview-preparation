/**
 *
 * Problem: Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 */

// brute force - O(N^2) time complexity
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// using hash maps - O(N) time complexity
const twoSumHashMapApproach = (arr, target) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (complement in map) {
      return [map[complement], i];
    }
    map[arr[i]] = i;
  }
  return [];
};

// using sorting - but indices are lost - O(NlogN) time complexity
const twoSumSorting = (arr, target) => {
  let newArr = [...arr];
  newArr.sort((a, b) => a - b);
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    const sum = newArr[l] + newArr[r];
    if (sum === target) {
      finalIndicesArray.push(l, r);
      break;
    } else if (sum < target) {
      l++;
    } else {
      r--;
    }
  }
  return [];
};

const arr = [3, 5, -4, 8, 11, 1, -1, 6];
const target = 10;
console.log(twoSum(arr, target));
console.log(twoSumHashMapApproach(arr, target));
console.log(twoSumSorting(arr, target)); // indices are lost - but can be asked differently
