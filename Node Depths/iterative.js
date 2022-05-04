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
  let stack = [{ node: tree, depth: depth }];
  let sumOfDepths = 0;

  while (stack.length > 0) {
    const { node, depth } = stack.pop();
    if (node === null) continue;

    sumOfDepths = sumOfDepths + depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
};
