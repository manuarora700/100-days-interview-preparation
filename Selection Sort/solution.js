/**
 * Problem: Insertion Sort: Sort an array of integers in ascending order.
 */

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(i, min, arr);
    }
  }
  return arr;
};
const swap = (firstIndex, secondIndex, arr) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

const arr = [5, 2, 7, 8, 4, 3, 2, 1, 5, 6, 11, 10];
console.log(selectionSort(arr));
