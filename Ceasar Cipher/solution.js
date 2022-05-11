/**
 * Problem: Caesar Cipher: Encrypt a string using a Caesar cipher.
 */

const caesarCipher = (str, key) => {
  let newStr = "";
  let alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < str.length; i++) {
    newStr += alphabets[(alphabets.indexOf(str[i]) + key) % 26];
  }
  return newStr;
};

const str = "xyzaaaaaa";
const key = 2;

console.log(caesarCipher(str, key));
