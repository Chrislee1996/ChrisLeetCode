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
var diameterOfBinaryTree = function(root) {
    if (root === null) {
        return 0
    }
    let max = 0
    
    const dfs = (node) => {
        if (node === null) {
            return 0
        }
        
        let leftSide = dfs(node.left)
        let rightSide = dfs(node.right)
        
        max =  Math.max(leftSide + rightSide, max)
        return Math.max(leftSide, rightSide) + 1
    }
    
    dfs(root)
    return max
}; 