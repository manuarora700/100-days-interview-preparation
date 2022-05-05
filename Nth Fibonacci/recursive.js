/**
 * Problem: Nth fibonacci: Given an integer n, return the nth fibonacci number.
 */

// TIME: O(2^n)
const nthFibonacci = (n) => {
  if (n === 1) {
    return 0;
  }
  if (n === 2) {
    return 1;
  }
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
};

console.log(nthFibonacci(10));
