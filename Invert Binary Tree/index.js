/**
 * Problem: Invert binary tree: Given a binary tree, invert the binary tree.
 */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Time: O(n) | Space: O(height)
const invertBinaryTree = (tree) => {
  if (!tree) return null;
  let left = invertBinaryTree(tree.left);
  let right = invertBinaryTree(tree.right);
  tree.left = right;
  tree.right = left;
  return tree;
};

// Time: O(N) | Space: O(n)
const invertBinaryTreeIterative = (tree) => {
  if (!tree) return null;
  let queue = [tree];
  while (queue.length) {
    let currentNode = queue.shift();
    let left = currentNode.left;
    let right = currentNode.right;
    currentNode.left = right;
    currentNode.right = left;
    if (left) queue.push(left);
    if (right) queue.push(right);
  }
  return tree;
};

const invertBinaryTreeRecursive2 = (tree) => {
  if (!tree) return;
  swapLeftRight(tree);
  invertBinaryTreeRecursive2(tree.left);
  invertBinaryTreeRecursive2(tree.right);
  return tree;
};

const swapLeftRight = (tree) => {
  let left = tree.left;
  tree.left = tree.right;
  tree.right = left;
};

// Test cases
const tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.right.left = new BinaryTree(6);
tree.right.right = new BinaryTree(7);
tree.left.left.left = new BinaryTree(8);
tree.left.left.right = new BinaryTree(9);

console.log(invertBinaryTree(tree));
console.log(invertBinaryTreeIterative(tree));
console.log(invertBinaryTreeRecursive2(tree));
