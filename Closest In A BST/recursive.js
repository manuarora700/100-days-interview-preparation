/**
 * Problem: Closest in a BST: Given a BST and a target value, return the closest value to the target.
 */

// F common js.
const BST = require("../utils/BST.js");

// TIME: O(n) - we traverse the skew tree - Average case: O(logN)
const computeClosestBST = (bst, target) => {
  return computeClosestBSTHelper(bst, target, (closest = Infinity));
};

const computeClosestBSTHelper = (bst, target, closest) => {
  console.log("bst...", closest);
  if (bst === null) {
    return closest;
  }

  if (Math.abs(target - closest) > Math.abs(target - bst.value)) {
    closest = bst.value;
  }
  if (target < bst.value) {
    // traverse left subtree
    return computeClosestBSTHelper(bst.left, target, closest);
  } else if (target > bst.value) {
    return computeClosestBSTHelper(bst.right, target, closest);
  } else {
    // exact match wow!
    return closest;
  }
};

const tree = new BST(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(22);

tree.insert(1);
tree.insert(14);

console.log("closest BST...", computeClosestBST(tree, 12));
// tree.traverse();
