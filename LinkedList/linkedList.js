//Linked List

/* 
  - Linked Lists have a Constant Time ( O(1) ) run time for adding and removing nodes.
  - Never have to iterate through the whole linked list to find the head or tail.
  - The pointers always know where the head and tail are, that's why the time is Constant in finding the head and tail.

  - Searching Linked Lists: Linear Time Cpmplexity O(n) 
**/

//Declare a LinkedList Constructor
function LinkedList() {
  this.head = null;
  this.tail = null;
}
//Declare a Node Constructor
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

/* 
  1. Add 'addToHead' Method to the LinkedList Prototype
  2. New Node is created with the value passed in from parameter.
  3. The 'next' property is passed in 'this.head' to point the new Node in the direction of the prexisting Node. If there are no Nodes in the LinkedList, 'this.head' will be null'
  4. "If a node exists..." the prexisting head's Node will point its prev property to the 'newNode'
  5. Otherwise, if no Node exists in the LinkedList, 'this.tail' becomes the newNode.
**/
LinkedList.prototype.addToHead = function(value) {
  let newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  //Whether there are Nodes existing in the LinkedList or not, 'this.head' will become the newNode.
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
  let newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

//Create a 'removeHead' prototype Method
LinkedList.prototype.removeHead = function() {
  //if a node does not exist... return null
  if (!this.head) return null;
  //declare a variable 'val' set to the value of the current head ('this.head')
  let val = this.head.value;
  //'this.head' is now the value of 'this.head.next'
  this.head = this.head.next;
  //change the current 'prev' property on the head to null since there is nothing before it now.
  if (this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};

LinkedList.prototype.removeTail = function() {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};

LinkedList.prototype.search = function(searchValue) {
  //currentNode is this.head
  let currentNode = this.head;
  //while there is a currentNode, compare the searchValue with that of the currentNode.value
  //return the currentNode.value if there is a match
  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    //move forward in the Linked List
    currentNode = currentNode.next;
  }
  //if no matches, return null
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  let currentNode = this.head;
  let index = 0;
  let indices = [];

  while (currentNode) {
    if (currentNode.value === value) {
      indices.push(index);
    }
    index++;
    currentNode = currentNode.next;
  }
  return indices;
};

var LL = new LinkedList();

//Find IndexOf
LL.addToHead(3);
LL.addToHead(2);
LL.addToHead(3);
LL.addToTail(4);
LL.addToTail(5);
LL.addToTail(3);
console.log(LL.indexOf(3));

//Search
// LL.addToHead(1000);
// LL.addToHead(2000);
// LL.addToTail(3000);

// LL.removeHead();
// LL.removeTail();

// LL.addToHead(123);
// LL.addToHead(70);
// LL.addToHead("hello");
// LL.addToTail(19);
// LL.addToTail("world");
// LL.addToTail(20);

// console.log(LL.search("hello"));
