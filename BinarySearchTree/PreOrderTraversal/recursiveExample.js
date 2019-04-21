var preorderTraversal = function(root, arr = []) {
  // 1
  if (root) {
    // 2
    arr.push(root.val); // 3
    preorderTraversal(root.left, arr); // 4
    preorderTraversal(root.right, arr); // 5
  }

  return arr; // 6
};

// 1) Pass in a root and an array. If there is not an array passed in, create an empty one.
// 2) If there is a root, execute steps 3 - 5.
// 3) Push the value of the current root onto the array.
// 4) Call the "preorderTraversal" method again and pass in the left root and the current working array.
// 5) Call the "preorderTraversal" method again and pass in the right root and the current working array.
// 6) If Step 2 is false, return the current array.
