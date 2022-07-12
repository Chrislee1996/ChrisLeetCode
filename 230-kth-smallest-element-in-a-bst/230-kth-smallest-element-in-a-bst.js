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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const stack = []
    let count = 1
    // let node = root
    
    while (stack.length > 0 || root !== null) {
        while(root !== null) {
            stack.push(root)
            root = root.left
        }
            root = stack.pop()
            if (count === k ) {
                return root.val
            } else {
                count++
            }
            root = root.right
    }
};