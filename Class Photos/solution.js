/**
 * Problem: Class Photos: Given two arrays of red and blue shirts, return if true they can be arranged in such a way that one does not overlap with the other (strictly increasing heights).
 *
 */

// Time: O(NlogN) + O(NlogN) + O(N) = O(NlogN)
const classPhotos = (redShirts, blueShirts) => {
  // find maximum value in redShirts and blueShirts array
  // sort the array
  redShirts.sort((a, b) => b - a);
  blueShirts.sort((a, b) => b - a);
  const maxRedShirt = redShirts[0];
  const maxBlueShirt = blueShirts[0];

  let backArray = maxRedShirt > maxBlueShirt ? redShirts : blueShirts;
  let frontArray = maxRedShirt > maxBlueShirt ? blueShirts : redShirts;

  for (let i = 0; i < backArray.length; i++) {
    if (backArray[i] < frontArray[i]) {
      return false;
    }
  }
  console.log("backArray", backArray);
  console.log("frontArray", frontArray);
  return true;
};

const redShirts = [5, 8, 1, 3, 4];
const blueShirts = [6, 9, 5, 4, 5];

console.log(classPhotos(redShirts, blueShirts));
