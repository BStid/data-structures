//Singly Linked List
//Class Based

class LinkedList {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.addToHead(value);
  }

  addToHead(value) {
    const newNode = { value };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }
    return currentNode;
  }

  remove(value) {
    if (this.length === 0) {
      return null;
    }

    if (this.head.value === value) {
      this.removeFromHead();
      return this;
    }

    let previousNode = this.head;
    let currentNode = previousNode.next;

    while (currentNode) {
      if (currentNode.value === value) {
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return undefined;
    }
    previousNode.next = currentNode.next;
    this.length--;
    return this;
  }
}
