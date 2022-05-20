/**
 * Problem: Longest peak: Given an array of integers, return the length of the longest peak.
 */

// Time: O(N)
const longestPeak = (arr) => {
  let longestPeakLength = 0;
  let i = 1;

  while (i < arr.length - 1) {
    const isPeak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i];

    if (!isPeak) {
      i++;
      continue;
    }

    // peak found
    let leftIndex = i - 2;
    while (leftIndex >= 0 && arr[leftIndex] < arr[leftIndex + 1]) leftIndex--;

    let rightIndex = i + 2;
    while (rightIndex < arr.length && arr[rightIndex] < arr[rightIndex - 1])
      rightIndex++;

    const currentPeak = rightIndex - leftIndex - 1;
    longestPeakLength = Math.max(longestPeakLength, currentPeak);
    i = rightIndex;
  }
  return longestPeakLength;
};

// Time: O(N)
const longestPeak2 = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; ) {
    let j = i,
      k = i;
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      // Peak found
      let currentCount = 1;
      while (arr[j] > arr[j - 1]) {
        currentCount += 1;
        j--;
      }
      while (arr[k] > arr[k + 1]) {
        currentCount += 1;
        k++;
      }
      count = Math.max(count, currentCount);
    }
    i = k + 1;
  }
  return count;
};

const arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log(longestPeak(arr));
console.log(longestPeak2(arr));
