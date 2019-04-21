var preorderTraversal = function(root) {
  const result = []; // 1
  const stack = []; // 2
  let node = root;

  while (node) {
    // 3
    node.val && result.push(node.val); // 4
    node.right && stack.push(node.right); // 5
    node = node.left || stack.pop(); // 6
  }

  return result; // 8
};

// Walk Through...
// 1) Create a results array.
// 2) Create a stack array to hold pending nodes.
// 3) While there is a node to be searched, loop.
// 4) If there is a value in the current node AND you are able to push that value to the results array, push the result.
// 5) If there is right node AND you are able to push that right node into a the stack, do that.
// 6) Node now equals Node.left if there is one. Otherwise, Node becomes whatever is popped from the stack.
// 7) Repeat Steps 3 - 6.
// 8) Return the result.
