/**
 * Problem: Minimum Height BST: Given a sorted array, construct a BST with minimal height.
 */

const minHeightBST = (arr) => {
  return constructMinHeightBST(arr, null, 0, arr.length - 1);
};

// TIme: O(N) Space O(N) | Insert manually and DONT use the native insert method given
const constructMinHeightBST = (arr, bst, start, end) => {
  if (start > end) return;

  let mid = Math.floor((start + end) / 2);

  const newNode = new BST(arr[mid]);
  if (bst === null) {
    // edge case where initially we dont have a BST
    bst = newNode;
  } else {
    // Insert logic here - No need for O(logn) extra time to insert.
    if (arr[mid] < bst.value) {
      bst.left = newNode;
      bst = bst.left;
    } else {
      bst.right = newNode;
      bst = bst.right;
    }
  }

  constructMinHeightBST(arr, bst, start, mid - 1);
  constructMinHeightBST(arr, bst, mid + 1, end);
  return bst;
};

// BST Class helper function
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      // Explore left subtree and try inserting there.
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      // Explore right subtree and try inserting there.
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
  preOrder() {
    // traverse preorder
    if (!this) return;
    console.log(this.value);
    this.left && this.left.preOrder();
    this.right && this.right.preOrder();
  }
  inOrder() {
    // traverse preorder
    if (!this) return;
    this.left && this.left.inOrder();
    console.log(this.value);
    this.right && this.right.inOrder();
  }
}

const arr = [1, 2, 5, 7, 10, 13, 14, 15, 22];
let bst = minHeightBST(arr);
console.log("bst", bst);
bst.inOrder();
