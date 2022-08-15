/**
 *
 * Problem: Given an array of positive integers, find the greatest sum that can be generated without adding 2 numbers positioned next to each other.
 *
 */

// Time: O(N) | Space: O(N)
const maxSubsetSumNoAdjacent = (arr) => {
  if (!arr.length) return 0;
  if (arr.length === 1) return arr[0];

  let maxSubarraySum = [];
  maxSubarraySum[0] = arr[0];
  maxSubarraySum[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let max = Math.max(maxSubarraySum[i - 1], maxSubarraySum[i - 2] + arr[i]);
    maxSubarraySum.push(max);
  }
  return maxSubarraySum[maxSubarraySum.length - 1];
};

// Time: O(N) | Space: O(1)
function maxSubsetSumNoAdjacent2(array) {
  if (!array.length) return 0;
  if (array.length === 1) return array[0];
  let second = array[0];
  let first = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(first, second + array[i]);
    second = first;
    first = current;
  }
  return first;
}
const arr = [7, 10, 12, 7, 9, 14];
console.log(maxSubsetSumNoAdjacent(arr));
console.log(maxSubsetSumNoAdjacent2(arr));

// Better solution
