/**
 * Problem: Nth fibonacci: Given an integer n, return the nth fibonacci number.
 */

// TIME: O(n)
const nthFibonacci = (n) => {
  let first = 0;
  let second = 1;

  let sum = first + second;
  for (let i = 2; i < n; i++) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
};

console.log(nthFibonacci(10));
