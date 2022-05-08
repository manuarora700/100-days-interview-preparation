/**
 * Problem: Insertion Sort: Sort an array of integers in ascending order.
 */

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(j, j - 1, arr);
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

const arr = [8, 5, 2, 9, 5, 6, 3];
console.log(insertionSort(arr));
