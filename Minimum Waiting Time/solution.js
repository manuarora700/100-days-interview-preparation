/**
 * Problem: Minimum Waiting Time: Given a list of tasks, and a CPU capacity, return the minimum waiting time which is a sum of all the waiting times.
 *
 */

// Time: O(NlogN) where n is the number of tasks
const minimumWaitingTime = (arr) => {
  arr.sort((a, b) => a - b);

  let totalWaitingTime = 0;

  for (let i = 0; i < arr.length; i++) {
    let queriesLeft = arr.length - (i + 1);
    totalWaitingTime += arr[i] * queriesLeft;
  }
  return totalWaitingTime;
};

const arr = [3, 2, 1, 2, 6];

console.log(minimumWaitingTime(arr));
