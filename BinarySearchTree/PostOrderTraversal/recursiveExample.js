var postorderTraversal = function(root, arr = []) {
  if (root) {
    postorderTraversal(root.left, arr);
    postorderTraversal(root.right, arr);
    arr.push(root.val);
  }
  return arr;
};
