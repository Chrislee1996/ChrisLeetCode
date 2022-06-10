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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let stack = []
    let res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack[stack.length-1];
        if (node.left) {
            stack.push(node.left);
            node.left = null;
        }
        else if (node.right) {
            stack.push(node.right);
            node.right = null;
        }
        else res.push(stack.pop().val);
    }
    return res;
};