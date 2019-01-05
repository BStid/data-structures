//Binary Search Tree

//Declare a BST Contructor Function
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

//Add an 'insert' prototype method to BST
BST.prototype.insert = function(value) {
  if (value <= this.value) {
    //is there already a left node/child already there?
    if (!this.left) this.left = new BST(value);
    //otherwise, insert a new value into the left side
    else this.left.insert(value);
  } else {
    //if there is not a right node/child...
    if (!this.right) this.right = new BST(value);
    //otherwise, insert a new value into the right side
    else this.right.insert(value);
  }
};

//Create new Binary Search Tree
const bst = new BST(50);

//Add nodes/children
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

console.log(bst);
