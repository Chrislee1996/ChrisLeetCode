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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (root === null) {
        return 0
    }
    let max = 0
    
    const dfs = (node) => {
        if (node === null) {
            return 0
        }
                let rightSide = dfs(node.right)

        let leftSide = dfs(node.left)
        
        max =  Math.max(leftSide + rightSide, max)
        return Math.max(leftSide, rightSide) + 1
    }
    
    dfs(root)
    return max
}; 

//create base case of reaching a null node 
//assing a max var. to keep track of our max dia
// recur call the left and right side to traverse 
// keep track of our max with - leftS + rightS
//return the max of whatever side 
// return with +1 due to needing to account for parent nodes