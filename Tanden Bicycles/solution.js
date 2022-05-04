/**
 * Problem: Tandem Bicycles - Given two arrays of redShirtTeam and blueShirtTeam - return the fastest speed (if fastest = true) or slowest speed (if fastest = false) given that array values can be paired one by one and the speed will be maximum of arr[i] and arr[j]
 */

const tandemBicycles = (redShirts, blueShirts, fastest) => {
  if (fastest) {
    return tandemFastest(redShirts, blueShirts);
  } else {
    return tandemSlowest(redShirts, blueShirts);
  }
};

const tandemFastest = (redShirts, blueShirts) => {
  let maxSpeed = 0;
  redShirts.sort((a, b) => b - a); // sort in descending order
  blueShirts.sort((a, b) => a - b); // sort in ascending order
  for (let i = 0; i < redShirts.length; i++) {
    maxSpeed += Math.max(redShirts[i], blueShirts[i]);
  }

  return maxSpeed;
};
const tandemSlowest = (redShirts, blueShirts) => {
  let maxSpeed = 0;
  redShirts.sort((a, b) => b - a); // sort in descending order
  blueShirts.sort((a, b) => b - a); // sort in descending order
  for (let i = 0; i < redShirts.length; i++) {
    maxSpeed += Math.max(redShirts[i], blueShirts[i]);
  }

  return maxSpeed;
};

const redShirts = [5, 5, 3, 9, 2];
const blueShirts = [3, 6, 7, 2, 1];

console.log(tandemBicycles(redShirts, blueShirts, false));
