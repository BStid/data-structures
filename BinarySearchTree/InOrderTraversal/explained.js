/** In-order Taversal traverses the left subtree first. */
/** Then visits the Root. */
/** Finally, traverses the right subtree... */

/*
              F
            /   \
           B     G
          / \     \
         A   D     I
            / \   /
           C  E   H 

    In-order Traversal Order In the Form of an Array:
    [A,B,C,D,E,F,G,H,I]
    A = The left most child node of the main root (F).
    B = (B) is the Root of (A), so you move to this Node next.
    C = The Left most child Node of the Right Node (D).
    D = The Root of Node of (C).
    E = The Right subtree of the current root (D).
    F = The Root of all left subtrees.
    G = Start Traversing the right subtrees of the current Root (F).
    H = The left most Node of (I).
    I = The Root of (H).
*/
