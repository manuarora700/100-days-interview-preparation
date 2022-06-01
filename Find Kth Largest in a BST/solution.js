/**
 * Problem: Find Kth largest in a BST: Given a BST and a number k, find the kth largest element in the BST.
 */

// Time; O(N) Space O(N) - Inorder traversal of BST - take the kth element from the end
const findKthLargest = (tree, k) => {
  let sortedNodeValues = [];

  inOrder(tree, sortedNodeValues);

  return sortedNodeValues[sortedNodeValues.length - k];
};

const inOrder = (tree, sortedNodeValues) => {
  if (!tree) return;
  inOrder(tree.left, sortedNodeValues);
  sortedNodeValues.push(tree.value);
  inOrder(tree.right, sortedNodeValues);
};

// Second solution: Time O(h + k) | Space O(h)

class TreeInfo {
  constructor(numberOfVisitedNodes, lastVisitedNode) {
    this.numberOfVisitedNodes = numberOfVisitedNodes;
    this.lastVisitedNode = lastVisitedNode;
  }
}

const findKthLargest2 = (tree, k) => {
  // reverse inorder traversal

  let treeInfo = new TreeInfo(0, -1);

  return reverseInOrder(tree, k, treeInfo);
};

const reverseInOrder = (tree, k, treeInfo) => {
  if (!tree || treeInfo.numberOfVisitedNodes >= k)
    return treeInfo.lastVisitedNode;

  reverseInOrder(tree.right, k, treeInfo);
  if (treeInfo.numberOfVisitedNodes < k) {
    treeInfo.numberOfVisitedNodes++;
    treeInfo.lastVisitedNode = tree.value;
    reverseInOrder(tree.left, k, treeInfo);
  }
  return treeInfo.lastVisitedNode;
};

// Driver code
const BST = require("../utils/BST.js");
const tree = new BST(15);
tree.insert(5);
tree.insert(5);
tree.insert(2);
tree.insert(3);
tree.insert(1);
tree.insert(20);
tree.insert(17);
tree.insert(22);

const k = 3;

console.log(findKthLargest(tree, k));
console.log(findKthLargest2(tree, k));
