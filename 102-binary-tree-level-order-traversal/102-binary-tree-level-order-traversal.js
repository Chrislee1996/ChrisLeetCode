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
    
    let result =[]
    let queue = []
    queue.push(root)
    
    while (queue.length > 0) {
        let treeLevel = queue.length
        let treeValues = []
        for (let i = 0 ; i < treeLevel; i++) {
            let node = queue.shift()
            treeValues.push(node.val)
            if (node.left !== null) queue.push(node.left)
            if (node.right !== null) queue.push(node.right)
        }
        result.push(treeValues)
    }
    return result
};