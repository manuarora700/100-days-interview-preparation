/**
 * Problem: Node Depths: Given a binary tree, compute the sum of all the nodes depths
 */

class BinaryTree {
  constructor(value) {
    this.left = null;
    this.value = value;
    this.right = null;
  }
}

const nodeDepths = (tree, depth = 0) => {
  if (!tree) return 0;
  return (
    depth + nodeDepths(tree.left, depth + 1) + nodeDepths(tree.right, depth + 1)
  );
};
