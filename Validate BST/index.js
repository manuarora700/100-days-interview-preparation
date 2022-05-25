/**
 * Problem: Validate BST: Given a binary tree, determine if it is a valid binary search tree (BST).
 */

// Boilerplate code for a binary tree node construction
class TestBST {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
const BST = require("../utils/BST.js");

// Actual function
// Time: O(N) | Space O(logN)
function validateBst(root) {
  return validateBSTHelper(root, -Infinity, Infinity);
}
function validateBSTHelper(node, min, max) {
  if (!node) return true;
  if (node.value < min || node.value >= max) return false;
  return (
    validateBSTHelper(node.left, min, node.value) &&
    validateBSTHelper(node.right, node.value, max)
  );
}

// Driver and runner code with different scenarios

const root = new BST(10);
root.insert(5);
root.insert(15);
root.insert(0);
root.insert(20);
root.insert(8);
root.insert(12);
root.insert(22);

const root2 = new TestBST(10);
root2.left = new TestBST(5);
root2.right = new TestBST(15);
root2.left.left = new TestBST(2);
root2.left.right = new TestBST(5);
root2.right.left = new TestBST(13);
root2.right.right = new TestBST(22);

console.log(validateBst(root));
console.log(validateBst(root2));
