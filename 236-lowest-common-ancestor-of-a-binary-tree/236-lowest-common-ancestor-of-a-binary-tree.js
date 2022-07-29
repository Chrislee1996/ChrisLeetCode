/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) return null
    
    if (root === p || root === q) return root 
    
    const left = lowestCommonAncestor(root.left, p , q)
    const right = lowestCommonAncestor(root.right,p,q)
    if (!left) return right
    if (!right) return left
    return root
    
};


 // if (!root || root === p || root === q) return root
 //    const left = lowestCommonAncestor(root.left, p, q)
 //    const right = lowestCommonAncestor(root.right, p, q)
 //    if (!left) return right  // p and q are in the right subtree
 //    if (!right) return left  // p and q are in the left subtree
 //    return root        

//base case for recur for checking null cases
//if at any time our p or q equals the root we return the root
//traverse through our left and right side
//if we do not have a left we return right and viceversa
//return root