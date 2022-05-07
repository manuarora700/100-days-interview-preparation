/**
 * Problem: Binary Search: Search a sorted array for a target value.
 */

// Time: O(log n)
const binarySearch = (arr, target) => {
  return binarySearchHelper(arr, target, 0, arr.length - 1);
};

const binarySearchHelper = (arr, target, start, end) => {
  if (start > end) {
    return false;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] < target) {
    return binarySearchHelper(arr, target, mid + 1, end);
  }
  if (arr[mid] > target) {
    return binarySearchHelper(arr, target, start, mid - 1);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
