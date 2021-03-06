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
    return isValidHelper(root, -Infinity, Infinity)
};

const isValidHelper = (root, low , high) => {
    if (root === null) {
        return true
    }
    
    return high > root.val && low < root.val &&
        isValidHelper(root.left, low, root.val) &&
        isValidHelper(root.right, root.val , high)
    
}