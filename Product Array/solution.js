/**
 * Problem: Product Array: Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 */

// Time: O(N)
const productArray = (arr) => {
  let result = [];
  let totalProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    totalProduct *= arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    result.push(totalProduct / arr[i]);
  }
  return result;
};

// Brute force: O(N^2)
const productArrayBruteForce = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) product *= arr[j];
    }
    result.push(product);
  }
  return result;
};

// DP: Time O(N)
const productArrayDP = (arr) => {
  const res = [];
  let leftArray = new Array(arr.length).fill(1);
  let rightArray = new Array(arr.length).fill(1);
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    leftArray[i] = product;
    product *= arr[i];
  }
  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    rightArray[i] = product;
    product *= arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    res.push(leftArray[i] * rightArray[i]);
  }
  return res;
};
// DP: Time O(N)
const productArrayDPBetter = (arr) => {
  let products = new Array(arr.length).fill(1);
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    products[i] = product;
    product *= arr[i];
  }
  product = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    products[i] *= product;
    product *= arr[i];
  }
  return products;
};

const arr = [5, 1, 4, 2];
console.log(productArray(arr));
console.log(productArrayBruteForce(arr));
console.log(productArrayDP(arr));
console.log(productArrayDPBetter(arr));
