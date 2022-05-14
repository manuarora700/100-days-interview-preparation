/**
 * Problem: Generate Document: Given a string of characters and a string of documents, return true if the string of documents can be generated from the characters.
 */

// TIME: O(N+M) | Space: O(M)
const generateDocument = (characters, documents) => {
  let map = {};
  for (let i = 0; i < characters.length; i++) {
    map[characters[i]] = map[characters[i]] ? map[characters[i]] + 1 : 1;
  }

  for (let i = 0; i < documents.length; i++) {
    if (!map[documents[i]]) {
      return false;
    }
    map[documents[i]]--;
  }

  return true;
};

const characters = "unaMroraA sia   BeW rePolEveD";
const document = "Manu Arora is a WeB DevEloPer";

console.log(generateDocument(characters, document));
