/**
 * Problem: Closest in a BST: Given a BST and a target value, return the closest value to the target.
 */

// F common js.
const BST = require("../utils/BST.js");

const depthFirstSearch = (tree) => {
  const finalArray = [];
  depthFirstSearchHelper(tree, finalArray);
  return finalArray;
};
const depthFirstSearchHelper = (tree, array) => {
  if (!tree) return;
  array.push(tree.value);
  depthFirstSearchHelper(tree.left, array);
  depthFirstSearchHelper(tree.right, array);
};

const tree = new BST(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(6);
tree.insert(13);
tree.insert(22);

tree.insert(1);
tree.insert(14);
// tree.traverse();
console.log("DFS: ", depthFirstSearch(tree, 12));
// tree.traverse();
