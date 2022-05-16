/**
 * Problem: Three Number Sum: Given an array of integers, find three integers in the array that sum to a specific target number.
 */

// Time: O(n^2) | Space: O(1)
const threeNumberSum = (array, targetSum) => {
  let triplets = [];
  arr.sort((a, b) => a - b); // nlogn

  for (let i = 0; i < array.length; i++) {
    // n^2
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
};

let arr = [12, 3, 1, 2, -6, 5, -8, 6];
let target = 0;
console.log(threeNumberSum(arr, target));
