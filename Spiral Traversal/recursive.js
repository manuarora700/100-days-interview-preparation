/**
 * Problem: Spiral Traversal: Given a matrix of numbers, return a spiral traversal of the matrix.
 */

const spiralTraversalRecursive = (arr) => {
  let result = [];
  let startRow = 0;
  let endRow = arr.length - 1;
  let startCol = 0;
  let endCol = arr[0].length - 1;

  spiralTraversalRecursiveHelper(
    arr,
    startRow,
    endRow,
    startCol,
    endCol,
    result
  );

  return result;
};

const spiralTraversalRecursiveHelper = (
  arr,
  startRow,
  endRow,
  startCol,
  endCol,
  result
) => {
  if (startRow > endRow || startCol > endCol) {
    return;
  }

  // top row
  for (let i = startCol; i <= endCol; i++) {
    result.push(arr[startRow][i]);
  }
  startRow++;

  // right col
  for (let i = startRow; i <= endRow; i++) {
    result.push(arr[i][endCol]);
  }
  endCol--;

  // bottom row
  for (let i = endCol; i >= startCol; i--) {
    result.push(arr[endRow][i]);
  }
  endRow--;

  // left col
  for (let i = endRow; i >= startRow; i--) {
    result.push(arr[i][startCol]);
  }
  startCol++;

  spiralTraversalRecursiveHelper(
    arr,
    startRow,
    endRow,
    startCol,
    endCol,
    result
  );
};

const arr = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

console.log(spiralTraversalRecursive(arr));
