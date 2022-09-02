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
var averageOfLevels = function(root) {
        let result = []
    let queue = [root]
    while (queue.length) {
        let qLength = queue.length
        let currentRow = 0
        for (let i = 0 ; i < qLength ; i++) {
        let node = queue.shift()
        currentRow += node.val
        if (node.left !== null) queue.push(node.left)
        if (node.right !== null ) queue.push(node.right)
        }
        result.push(currentRow/qLength)
    }
    return result
};