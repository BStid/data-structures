/** Pre-order Taversal visits the root first. */
/** Then traverses the left subtree. */
/** Finally, traverses the right subtree... */

/*
              F
            /   \
           B     G
          / \     \
         A   D     I
            / \   /
           C  E   H 

    Pre-order Traversal Order In the Form of an Array:
    [F,B,A,D,C,E,G,I,H]
    F = Root;
    B = First Left Node;
    A = Left Node of (B);
    D = Right Node of (B) since there are not any Nodes remaining in (A);
    C = (D) has a left node, so you traverse this one next;
    E = Right Node of D since there are not any Nodes remaining in (C);
    G = The right Node of the Root (F);
    I = No Left Node on G, but it has a Right Node(I);
    H = The Final Node;
*/
