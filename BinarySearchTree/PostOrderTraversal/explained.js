/** Post-order Taversal traverses the left subtree first. */
/** Then visits the right subtree. */
/** Finally, visit the root.. */

/*
              F
            /   \
           B     G
          / \     \
         A   D     I
            / \   /
           C  E   H 

    Post-order Traversal Order In the Form of an Array:
    [A,C,E,D,B,H,I,G,F]
    A = The left most node in the tree which does not have any remaining left or right nodes.
    C = Since (A) did not have any other nodes, go back to the root of the left most node and traverse the right side of that root (B). Once again starting with the left side of that subtree. (C) is the left most node of (D).
    E = (C) has no more left or right nodes. Go back to the root of (C) and traverse the right subtree of the current root (D). (E) has neither a left or right node, so it is logged.
    D = (D) is logged since its children have already been traversed. It has no remaining untraversed Nodes.
    B = (B) is now logged since its children have all been traversed.
    H = (H) is next to be logged. Although we start traversing the main root's (F) right subtree AND although (G) does not have a left Node, it has a right node, so we continue traversing down that path since there are child nodes that have yet to be searched. Same goes with (I). (H) ends up being the left most Node of the right subtree now that it does not have any children.
    I = No further children to traverse, so we log the current root (I).
    G = Same goes for (G).
    F = All nodes have been traversed, you can now log the final root (F).
*/
