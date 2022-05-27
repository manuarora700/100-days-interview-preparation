/**
 * Problem: BST Traversal: Traverse a BST in preorder, postorder, and inorder.
 *
 *
 */

const BST = require("../utils/BST.js");

function inOrderTraversal(tree) {
  if (!tree) return;
  inOrderTraversal(tree.left);
  console.log(tree.value);
  inOrderTraversal(tree.right);
}
function preOrderTraversal(tree) {
  if (!tree) return;
  console.log(tree.value);
  preOrderTraversal(tree.left);
  preOrderTraversal(tree.right);
}

function postOrderTraversal(tree) {
  if (!tree) return;
  postOrderTraversal(tree.left);
  postOrderTraversal(tree.right);
  console.log(tree.value);
}

const tree = new BST(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(20);
tree.insert(8);
tree.insert(12);
tree.insert(22);
tree.insert(19);

preOrderTraversal(tree);
postOrderTraversal(tree);
inOrderTraversal(tree);
