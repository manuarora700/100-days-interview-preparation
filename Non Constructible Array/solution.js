/**
 * Problem: Non Constructible Array: Given an array of changes (each value represents the corresponding cents value) - return the minimum amount of sum that CANNOT be created using the denominations.
 */

/**
 * Solution:
 * 1. Sort the array
 * 2. Keep track of change in a variable `currentChangeCount`
 * 3. If currentChangeCount + 1 is greater than the next value, we cannot construct the change.
 */

const nonConstructibleArray = (arr) => {
  let sortedArray = arr.sort((a, b) => a - b);

  let currentChangeCount = 0;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] > currentChangeCount + 1) {
      // change cannot be created
      return currentChangeCount + 1;
    }
    currentChangeCount += sortedArray[i];
  }
  return currentChangeCount;
};

const arr = [5, 7, 1, 1, 2, 3, 22];

console.log(nonConstructibleArray(arr));
