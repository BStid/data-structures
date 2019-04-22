var inorderTraversal = function(root) {
  let result = [];
  let stack = [];
  let node = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }

  return result;
};

//Create a result array
//Create a stack
//While there is a current node and while there is a something in the stack
//Run another loop searching for left nodes.
//// If there is another left node, run it again and push the new current node into the stack until there are no more left nodes
//Assign the new node to be what is popped from the stack.
//Push that value into the results array
//New node becomes the right node.
////If there is not a right node, the loop ends
//Return the results array
