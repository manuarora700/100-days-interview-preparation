/**
 * Problem: Find Three Largest: Given an array of integers, find the three largest integers in the array.
 */

// Time: O(nlogn)
const findThreeLargestSorting = (arr) => {
  arr.sort((a, b) => b - a);
  return arr.slice(0, 3);
};

// Better Approach: Time O(N)

const findThreeLargest = (arr) => {
  let largestArray = new Array(3).fill(null);
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    updateLargest(largestArray, num);
  }
  return largestArray;
};

const updateLargest = (largestArray, num) => {
  if (largestArray[2] === null || num > largestArray[2]) {
    shiftAndUpdate(largestArray, num, 2); //todo
  } else if (largestArray[1] === null || num > largestArray[1]) {
    shiftAndUpdate(largestArray, num, 1); //tod
  } else if (largestArray[0] === null || num > largestArray[0]) {
    shiftAndUpdate(largestArray, num, 0); //tod
  }
};
const shiftAndUpdate = (arr, num, index) => {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      arr[i] = num;
    } else {
      arr[i] = arr[i + 1];
    }
  }
};

const arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
console.log(findThreeLargest(arr));
