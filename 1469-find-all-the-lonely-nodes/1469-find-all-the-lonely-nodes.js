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
var getLonelyNodes = function(root) {

    const result = []
    
    const dfs = (node) => {
        if (node === null) return 
    
        
        dfs(node.left)
                if (node.right === null && node.left) result.push(node.left.val)

        
        dfs(node.right)
        if (node.left === null && node.right) result.push(node.right.val)

    }
    
    
    dfs(root)
    return result
};

// const getLonelyNodes = (root) => {
//     let lonely = []
//     const dfs = root => {
//         if (!root) return
//         if (!root.left && root.right) lonely.push(root.right.val)
//         if (!root.right && root.left) lonely.push(root.left.val)   
//         dfs(root.left)
//         dfs(root.right)
//     }
//     dfs(root)
//     return lonely
// };