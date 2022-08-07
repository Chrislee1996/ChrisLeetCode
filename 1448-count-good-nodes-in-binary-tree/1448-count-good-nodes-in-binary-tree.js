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
var goodNodes = function(root) {
     let total = 0;

    function traverse(node, prev) {
        if (!node) return;

        if (node.left || node.right) {
            traverse(node.left, Math.max(node.val, prev));
            traverse(node.right, Math.max(node.val, prev));
        }

        if (node.val >= prev) {
            total += 1;
        }
    }

    traverse(root, root.val);

    return total;
};