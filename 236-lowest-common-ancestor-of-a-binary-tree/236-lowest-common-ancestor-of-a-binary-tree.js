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

//base case  - if we reach null return 
//our plan is to traverse to the left and right
//once we reach the bottom we return
//then we check if our current root we are on equals p or q
//if it does we return that root and if not just return
//eventually once we finish our traversal, we will find the common ancestor value
//if we have a value found in the left then return left and vice versa
//if our values equal the left and right just return the root