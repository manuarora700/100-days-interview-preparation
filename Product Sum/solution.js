/**
 * Problem: Product Sum: Given an array (that can have nested arrays) - return the sum of all the numbers in the array.
 * If nested array is encountered, recursively add the numbers in the nested array multiplied by the depth of the nested array.
 */

const productSum = (arr) => {
  return productSumHelper(arr, (depth = 1));
};

// Time: O(N) Space: O(d) where d is the depth of the array
productSumHelper = (arr, depth) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += productSumHelper(arr[i], depth + 1);
    } else {
      sum += arr[i];
    }
  }
  return sum * depth;
};

const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

console.log(productSum(arr));
