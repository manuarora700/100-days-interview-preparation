/**
 * Problem: Nth fibonacci: Given an integer n, return the nth fibonacci number.
 */

// TIME: O(2^n)
const nthFibonacci = (n) => {
  return fibonacciHelper(n, { 1: 0, 2: 1 });
};

const fibonacciHelper = (n, memo) => {
  if (n in memo) {
    return memo[n];
  } else {
    memo[n] = fibonacciHelper(n - 1, memo) + fibonacciHelper(n - 2, memo);
    return memo[n];
  }
};

console.log(nthFibonacci(10));
