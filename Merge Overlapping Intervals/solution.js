/**
 * Problem: Merge Overlapping Intervals: Given a collection of intervals, merge all overlapping intervals.
 */

// Time: O(n) Space: O(n)
const mergeOverlappingIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [];
  for (let i = 0; i < intervals.length; i++) {
    const current = intervals[i];
    if (merged.length && current[0] <= merged[merged.length - 1][1]) {
      merged[merged.length - 1][1] = Math.max(
        current[1],
        merged[merged.length - 1][1]
      );
    } else {
      merged.push(current);
    }
  }
  return merged;
};

const arr = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];

console.log(mergeOverlappingIntervals(arr));
