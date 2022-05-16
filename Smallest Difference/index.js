/**
 * Problem: Smallest Difference: Given two arrays of integers, find the pair of values (one value in each array) with the smallest (non-negative) difference.
 */

const smallestDifference = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];

  while (i < arr1.length && j < arr2.length) {
    let firstNum = arr1[i];
    let secondNum = arr2[j];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      i++;
    } else if (firstNum > secondNum) {
      current = firstNum - secondNum;
      j++;
    } else {
      return [firstNum, secondNum];
    }

    if (current < smallest) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
};
const arr1 = [-1, 5, 10, 20, 28, 3];
const arr2 = [26, 134, 135, 15, 17];

console.log(smallestDifference(arr1, arr2));
