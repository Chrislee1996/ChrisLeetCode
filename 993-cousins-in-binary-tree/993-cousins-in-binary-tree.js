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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (x == root.val || y == root.val || !root) return false;
    let [parentX, depthX] = dfsTraversal(root, x, 0);
    let [parentY, depthY] = dfsTraversal(root, y, 0);
    return parentX !== parentY && depthX == depthY;
};

function dfsTraversal(root, target, depth) {
    if (!root) return;
    if (root.left && root.left.val == target) return [root.val, depth + 1];
    if (root.right && root.right.val == target) return [root.val, depth + 1];
    return dfsTraversal(root.left, target, depth + 1) ||
           dfsTraversal(root.right, target, depth + 1);
};