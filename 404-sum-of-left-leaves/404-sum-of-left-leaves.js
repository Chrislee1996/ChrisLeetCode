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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (root === null ) return 0
    
    function dfs (node, isLeft) {
        if (node === null) return 0
        
        if (node.left == null && node.right == null && isLeft) {
            return node.val
        }
        
        let leftTree = dfs(node.left, true)
        let rightTree = dfs(node.right,false)
        
        return leftTree + rightTree
    }
    
   return dfs(root, false)
};