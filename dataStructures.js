//Linked List

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}

var LL = new LinkedList();
var node1 = new Node(100, "node2", null);

console.log(LL);
console.log(node1);
