/**
 * Problem: Minimum Height BST: Given a sorted array, construct a BST with minimal height.
 */

const minHeightBST = (arr) => {
  return constructMinHeightBST(arr, null, 0, arr.length - 1);
};

// TIme: O(NlogN) Space O(N) | O(N) for entire numbers, O(LogN) for insert() method
const constructMinHeightBST = (arr, bst, start, end) => {
  if (start > end) return;

  let mid = Math.floor((start + end) / 2);
  let valueToAdd = arr[mid];
  if (bst === null) {
    // edge case where initially we dont have a BST
    bst = new BST(valueToAdd);
  } else {
    // Insert operation: O(logn) time
    bst.insert(valueToAdd);
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

bst.inOrder();
