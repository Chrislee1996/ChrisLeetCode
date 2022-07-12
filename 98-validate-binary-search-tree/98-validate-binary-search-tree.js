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
var isValidBST = function(root) {
    if (root === null) {
        return true
    }
    
    
    const isValidHelper = (node, low , high) => {
        if (node === null) {
            return true
        }
        
        return node.val > low && node.val < high &&
            isValidHelper(node.left, low, node.val) &&
            isValidHelper(node.right, node.val, high)
    }
    
    return isValidHelper(root, -Infinity, Infinity)

};