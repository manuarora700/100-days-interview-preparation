/**
 * Problem: Move Element to End: Given an array and a value, move all instances of that value to the end
 */

// Time: O(N)
const moveElementToEnd = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] === val) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      right--;
    } else {
      left++;
    }
  }
  return arr;
};

// Time: O(N)
const moveElementToEnd2 = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    while (left < right && arr[right] === val) right--;

    if (arr[left] === val) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
    left++;
  }
  return arr;
};
const arr = [2, 1, 2, 2, 2, 3, 4, 2];

console.log(moveElementToEnd(arr, 2));
console.log(moveElementToEnd2(arr, 2));
