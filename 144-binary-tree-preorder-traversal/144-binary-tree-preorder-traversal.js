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
var preorderTraversal = function(root) {
//     if (root === null) {
//         return []
//     }
    
//     let result = []
//     let stack = [root]
    
//     while (stack.length > 0) {
//         const node = stack.pop()
//         result.push(node.val)
        
//         if (node.right !== null) stack.push(node.right)
//         if (node.left !== null) stack.push(node.left)
//     }
//     return result
    
    let result = []
    
    const traversalHelper = (node) => {
        
        if (node === null) {
            return
        }
        
        result.push(node.val)
        traversalHelper(node.left)
        traversalHelper(node.right)
        
        
    }
    traversalHelper(root)
    return result
}; 