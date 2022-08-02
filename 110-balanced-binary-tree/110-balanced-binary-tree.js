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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null) return null
    
    const dfs = (root) => {
        if (root === null) return 0
        let left = dfs(root.left) + 1
        let right = dfs(root.right) + 1
        if (Math.abs(left - right) > 1 ) return Infinity
        return Math.max(left,right)
    }
    
    if (dfs(root) === Infinity) {
        return false
    }
    return true
    
};

//create base case for null nodes
//traverse the left and right side
// if the left or right side is unbalanced return -1 
//also, if our side is more unbalanced than the other side, and it is greater than 1 (per the problem) then we need to also return -1
//return the math max of the left and right side + 1
//if our result !== -1 then we know it is balanced
 // return dfs(root)==Infinity?false:true;