/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true
    
    const dfs = (tree1, tree2) => {
        if (tree1 === null || tree2 === null) return tree1 === tree2
        
        if (tree1.val !== tree2.val) return false
        
        return dfs(tree1.left, tree2.right) && dfs(tree1.right, tree2.left)
    }
    
    return dfs(root.left, root.right)
};