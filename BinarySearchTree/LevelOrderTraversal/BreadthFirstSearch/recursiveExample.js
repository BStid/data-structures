var levelOrder = function(root, arr = [], level = -1) {
  let node = root;
  let queue = [];
  if (node) {
    level++;
    if (!arr[level]) {
      arr[level] = [];
      arr[level].push(node.val);
    } else {
      arr[level].push(node.val);
    }
    queue.push(levelOrder(node.left, arr, level));
    queue.push(levelOrder(node.right, arr, level));
  }
  return arr;
};
