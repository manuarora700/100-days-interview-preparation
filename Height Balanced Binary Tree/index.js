function heightBalancedBinaryTree(tree) {
  let treeInfo = heightBalancedBinaryTreeHelper(tree);
  console.log(treeInfo);

  return treeInfo.isBalanced;
}

const heightBalancedBinaryTreeHelper = (tree) => {
  if (!tree) {
    return new TreeInfo(true, -1);
  }

  let leftSubtreeInfo = heightBalancedBinaryTreeHelper(tree.left);
  let rightSubtreeInfo = heightBalancedBinaryTreeHelper(tree.right);

  let isBalanced =
    leftSubtreeInfo.isBalanced &&
    rightSubtreeInfo.isBalanced &&
    Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;

  let height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;

  return new TreeInfo(isBalanced, height);
};

class TreeInfo {
  constructor(isBalanced, height) {
    this.isBalanced = isBalanced;
    this.height = height;
  }
}

// Driver code
class BinaryTree {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
let tree = new BinaryTree(1);
tree.left = new BinaryTree(2);
tree.right = new BinaryTree(3);
tree.right.right = new BinaryTree(6);
tree.left.left = new BinaryTree(4);
tree.left.right = new BinaryTree(5);
tree.left.right.left = new BinaryTree(6);
tree.left.right.right = new BinaryTree(7);

console.log(heightBalancedBinaryTree(tree));
