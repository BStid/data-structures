/*

A subtree of a tree T is a tree S consisting of a node in T and all of its descendants in T. 
The subtree corresponding to the root node is the entire tree;
the subtree corresponding to any other node is called a proper subtree.

 */

function areIdentical(root1, root2) {
  if (root1 == null && root2 == null) {
    return true;
  }
  if (root1 == null || root2 == null) {
    return false;
  }

  return (
    root1.value == root2.value &&
    areIdentical(root1.left, root2.left) &&
    areIdentical(root1.right && root2.right)
  );
}

function isSubSet(T, S) {
  if (S == null) {
    return true;
  }
  if (T == null) {
    return false;
  }

  if (areIdentical(T, S)) {
    return true;
  }

  return isSubset(T.left, S) || isSubtree(T.right, S);
}
