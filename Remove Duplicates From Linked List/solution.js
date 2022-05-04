/**
 * Problem: Remove duplicates from a sorted Linked List: Given a sorted linked list, delete all duplicates such that each element appear only once.
 */

const LinkedList = require("../utils/LinkedList.js");

const removeDuplicates = (linkedList) => {
  let current = linkedList.head;

  while (current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
};

const linkedList = new LinkedList(1);
linkedList.insert(1);
linkedList.insert(1);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(4);
linkedList.insert(4);
linkedList.insert(5);
linkedList.insert(6);
linkedList.insert(6);

removeDuplicates(linkedList);

linkedList.print();
