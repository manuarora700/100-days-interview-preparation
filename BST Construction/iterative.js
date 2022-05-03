/**
 * Problem: Closest in a BST: Given a BST and a target value, return the closest value to the target.
 */

// F common js.
const BST = require("../utils/BST.js");

// TIME: O(n) - we traverse the skew tree - Average case: O(logN)
const computeClosestBST = (bst, target) => {
  let closest = Infinity;
  let currentNode = bst;

  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }

    if (target < currentNode.value) {
      // traverse left subtree
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
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
tree.traverse();
console.log("closest BST...", computeClosestBST(tree, 12));
// tree.traverse();
