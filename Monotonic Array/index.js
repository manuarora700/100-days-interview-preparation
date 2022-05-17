/**
 * Problem: Monotonic Arrays: Return true if the given array is monotonic.
 */

// Time: O(N)
const monotonicArray = (arr) => {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      isDecreasing = false;
    } else if (arr[i] < arr[i - 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
};

// another way! // Time: O(N + N)
const monotonicArray2 = (arr) => {
  let isIncreasing = true;
  let isDecreasing = true;

  isIncreasing = checkIncreasing(arr);
  isDecreasing = checkDecreasing(arr);

  return isIncreasing || isDecreasing;
};

const checkIncreasing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};
const checkDecreasing = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      return false;
    }
  }
  return true;
};

const arr = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

console.log(monotonicArray(arr));
console.log(monotonicArray2(arr));
