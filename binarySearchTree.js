//Binary Search Tree

//Declare a BST Contructor Function
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function log(value) {
  console.log(value);
}
function logValueWithNode(node) {
  console.log(node.value);
}
//Add an 'insert' prototype method to BST
BST.prototype.insert = function(value) {
  if (value <= this.value) {
    //is there already a left node/child already there?
    if (!this.left) this.left = new BST(value);
    //otherwise, run the 'insert' method on this prexisting node with this same value.
    else this.left.insert(value);
  } else {
    //if there is not a right node/child...
    //create a new node and insert that value
    if (!this.right) this.right = new BST(value);
    //otherwise, run the 'insert' method on this prexisting node with this same value.
    else this.right.insert(value);
  }
};
//Add a 'contains' prototype method to BST
BST.prototype.contains = function(value) {
  if (value === this.value) return true;
  //move to the left of the binary tree
  else if (value < this.value) {
    if (!this.left) return false;
    //run the method again on the left node
    else return this.left.contains(value);
  }
  //move to the right of the binary tree
  else if (value > this.value) {
    if (!this.right) return false;
    else return this.right.contains(value);
  }
};

//travel through all nodes in the binary tree
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  //if the order is 'pre-order' run the function.
  if (order === "pre-order") iteratorFunc(this.value);
  //if a left node/child exists, run through the left side
  if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
  //if order is 'in-order', run the function.
  if (order === "in-order") iteratorFunc(this.value);
  //if a right node/child exists, run through the right side.
  if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
  if (order === "post-order") iteratorFunc(this.value);
};

//travel through all nodes from top to bottom, going across left to right;
BST.prototype.breathFirstTraversal = function(iteratorFunc) {
  //queue = "first in, first out"
  let queue = [this];
  while (queue.length) {
    const treeNode = queue.shift();
    iteratorFunc(treeNode);
    //if the treeNode has a left or right, push that child into the queue array
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
};

BST.prototype.getMinVal = function() {
  if (this.left) return this.left.getMinVal();
  else return this.value;
};

BST.prototype.getMaxVal = function() {
  if (this.right) return this.right.getMaxVal();
  else return this.value;
};
const bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

bst.depthFirstTraversal(log, "in-order");
