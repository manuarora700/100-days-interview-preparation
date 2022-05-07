/**
 * Problem: Binary Search: Search a sorted array for a target value.
 */

// Time: O(log n)
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      start = mid + 1;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;
console.log(binarySearch(arr, target));
