/**
 * Problem: Tournament Winner: You are given an array of scores that each player has achieved in a tournament. You are required to find the winner(s) of the tournament.
 * 1. There will always be atleast 1 winner
 * 2. Length of competitions array will be equal to length of results array
 */

// Time: O(N) + O(N) + O(N) = O(N)
const tournamentWinner = (arr, results) => {
  let mapper = {};
  let max = 0,
    winnerName = "";

  for (let i = 0; i < arr.length; i++) {
    let winner = results[i];

    if (winner === 0) {
      // away team won
      mapper[arr[i][1]] = mapper[arr[i][1]] + 1 || 1;
      if (mapper[arr[i][1]] > max) {
        max = mapper[arr[i][1]];
        winnerName = arr[i][1];
      }
    } else {
      // home team won
      mapper[arr[i][0]] = mapper[arr[i][0]] + 1 || 1;
      if (mapper[arr[i][0]] > max) {
        max = mapper[arr[i][0]];
        winnerName = arr[i][0];
      }
    }
  }

  return [winnerName, max];
};

let arr = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
let results = [0, 0, 1];

console.log(tournamentWinner(arr, results));
