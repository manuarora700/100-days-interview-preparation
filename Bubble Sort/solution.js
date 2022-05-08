/**
 * Problem: Bubble Sort - Sort an array of integers in ascending order.
 */

// Time: O(n^2)
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }
  return arr;
};

const swap = (firstIndex, secondIndex, arr) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

const arr = [10, 9, 4, 7, 5, 2, 1, 3, 6, 8];
console.log(bubbleSort(arr));
