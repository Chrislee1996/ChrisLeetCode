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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    if (root === null) return null
    
    if (root.val > high) return trimBST(root.left, low,high)
    if (root.val < low) return trimBST(root.right, low,high)
    
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)
    
    return root
};


// if (root === null) {
//         return null;
//     }
//     if (root.val > R) {
//         // skip and go left
//         return trimBST(root.left, L, R);
//     }
//     if (root.val < L) {
//         // skip and go right
//         return trimBST(root.right, L, R);
//     }
//     // connect left and right child to the next qualified node
//     root.left = trimBST(root.left, L, R);
//     root.right = trimBST(root.right, L, R);
//     return root;  