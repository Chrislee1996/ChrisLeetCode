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
var isBalanced = function(root) {
    if (root === null) {
        return true
    }
    
    const dfs = (node) => {
        if (node === null) {
            return 0
        }
        
        let leftSide = dfs(node.left)
        let rightSide = dfs(node.right)
        
        if (leftSide === -1 || rightSide === -1 || Math.abs(leftSide-rightSide) > 1 ) {
            return -1
        }
        return Math.max(leftSide,rightSide) + 1
    }
    
    return dfs(root) !== -1
    
};