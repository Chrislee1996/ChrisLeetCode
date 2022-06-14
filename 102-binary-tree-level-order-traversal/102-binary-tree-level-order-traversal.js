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
    
    let queue = [root]
    let result = []
    
    while (queue.length > 0) {
        let length = queue.length
        let treeLevel = []
        for (let i = 0 ; i < length;i++) {
        const node = queue.shift()
        treeLevel.push(node.val)
        if (node.left !== null) queue.push(node.left)
        if (node.right !== null) queue.push(node.right)
        }
        result.push(treeLevel)
    }
    return result
};



// var levelOrder = function(root) {
//     if (root == null) return [];
//     let queue = [], values = [];
//     queue.push(root);
//     while (queue.length > 0) {
//         let len = queue.length, level = [];
//         for (let i = 0; i < len; i++) {
//             let node = queue.shift();
//             level.push(node.val);
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         values.push(level);
//     }
//     return values;
//     // Time Complexity: O(n)
//     // Space Complexity: O(n)
// };
