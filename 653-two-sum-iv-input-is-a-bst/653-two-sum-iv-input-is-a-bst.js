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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if (root === null) {
        return false
    }
    
    if (!root === null) {
        return false;
    } 
      const set = new Set();
      const stack = [root];
      while (stack.length > 0) {
        const node = stack.pop();
        if (set.has(k - node.val)) {
            return true;
        }
        set.add(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
      }
      return false;

};