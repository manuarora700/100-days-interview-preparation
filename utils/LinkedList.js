class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }
  insert(value) {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value, "->");
      current = current.next;
    }
  }
}

module.exports = LinkedList;
