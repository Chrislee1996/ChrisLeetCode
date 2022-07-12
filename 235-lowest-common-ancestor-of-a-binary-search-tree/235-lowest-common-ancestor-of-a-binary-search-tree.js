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
//     if (root === null) {
//         return null
//     }
    
//     while (root !== null) {
//     if (p.val < root.val && q.val < root.val) {
//         root = root.left 
//     } else if (p.val > root.val && q.val > root.val) {
//         root = root.right
//     } else {
//         return root
//     }
//     }
    
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p , q)
    }
    if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p , q)
    }

    return root
};