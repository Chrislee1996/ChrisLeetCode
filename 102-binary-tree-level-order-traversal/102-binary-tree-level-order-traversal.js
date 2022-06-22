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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return []
    }
    
    let result = []
    let queue = []
    queue.push(root)
    
    while (queue.length > 0) {
        let treeLength = queue.length
        let levelArray = []
        for (let i = 0 ; i < treeLength;i++) {
            const node = queue.shift()
            levelArray.push(node.val)
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
        }
        result.push(levelArray)
    }
    return result
};