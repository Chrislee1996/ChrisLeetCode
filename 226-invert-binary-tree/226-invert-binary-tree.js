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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null
    }
    
    let tempLeft = invertTree(root.left)
    let tempRight = invertTree(root.right)
    
    root.left = tempRight
    root.right = tempLeft
    
    return root
};















































//     if (root === null) {
//         return null
//     }
//     let tempLeft = invertTree(root.left)
//     let tempRight = invertTree(root.right)
    
//     root.left = tempRight
//     root.right = tempLeft
    
//     return root