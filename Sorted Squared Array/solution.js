/**
 * Problem: Sorted Squared Array: Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
 */

// Time: O(N) + O(NlogN) = O(NlogN)
const sortedSquaredArrayBruteForce = (arr) => {
  let result = new Array(arr.length).fill(0);

  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    result[k] = arr[i] * arr[i];
    k++;
  }
  return result.sort((a, b) => a - b);
};

// optimal approach - TWO POINTER APPROACH - O(N) time
const sortedSquaredArray = (arr) => {
  let result = new Array(arr.length).fill(0);
  let start = 0,
    end = arr.length - 1,
    k = arr.length - 1;

  while (start <= end) {
    if (Math.abs(arr[start]) <= Math.abs(arr[end])) {
      result[k] = arr[end] * arr[end];
      end--;
      k--;
    } else {
      result[k] = arr[start] * arr[start];
      start++;
      k--;
    }
  }

  return result;
};

const arr = [-7, -5, -4, 3, 6, 8, 9];
console.log(sortedSquaredArray(arr));
