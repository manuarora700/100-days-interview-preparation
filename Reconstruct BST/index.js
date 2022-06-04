/**
 * Problem : Reconstruct BST: Given a preorder sequence of numbers, find the BST that is the closest to the given sequence.
 */

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  traverseBST(tree, array) {
    if (!tree) return;
    array.push(tree.value);
    this.traverseBST(tree.left, array);
    this.traverseBST(tree.right, array);
  }
}

const reconstructBST = (preorderArray) => {
  if (preorderArray.length === 0) return null;

  let currentValue = preorderArray[0];
  let rightSubtreeRootIdx = preorderArray.length;

  for (let i = 1; i < preorderArray.length; i++) {
    let value = preorderArray[i];

    if (value > currentValue) {
      rightSubtreeRootIdx = i;
      break;
    }
  }
  leftSubtree = reconstructBST(preorderArray.slice(1, rightSubtreeRootIdx));
  rightSubtree = reconstructBST(preorderArray.slice(rightSubtreeRootIdx));
  return new BST(currentValue, leftSubtree, rightSubtree);
};

class TreeInfo {
  constructor(rootIdx) {
    this.rootIdx = rootIdx;
  }
}
const reconstructBST2 = (preorderArray) => {
  let treeInfo = new TreeInfo(0);
  let lowerBound = -Infinity;
  let upperBound = Infinity;
  return reconstructBST2Helper(lowerBound, upperBound, preorderArray, treeInfo);
};

const reconstructBST2Helper = (
  lowerBound,
  upperBound,
  preorderArray,
  currentSubtreeInfo
) => {
  if (currentSubtreeInfo.rootIdx === preorderArray.length) return null;

  let rootValue = preorderArray[currentSubtreeInfo.rootIdx];
  if (rootValue < lowerBound || rootValue > upperBound) return null;

  currentSubtreeInfo.rootIdx += 1;
  let leftSubtree = reconstructBST2Helper(
    lowerBound,
    rootValue,
    preorderArray,
    currentSubtreeInfo
  );
  let rightSubtree = reconstructBST2Helper(
    rootValue,
    upperBound,
    preorderArray,
    currentSubtreeInfo
  );
  return new BST(rootValue, leftSubtree, rightSubtree);
};

const arr = [10, 4, 2, 1, 5, 17, 19, 18];

console.log(reconstructBST(arr));
console.log(reconstructBST2(arr));
