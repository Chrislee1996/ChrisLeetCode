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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0
    
    const traverse = (root) => {
        if (root.val >= low && root.val <= high) sum += root.val
        if (root.left !== null && root.val > low) traverse(root.left)
        if (root.right !== null && root.val < high) traverse(root.right)
    }
    
    traverse(root)
    return sum
};


    // let sum = 0;
    // const traverse = (root) => {
    //     if (root.val >= L && root.val <= R) sum += root.val;
    //     if (root.left !== null) traverse(root.left);
    //     if (root.right !== null) traverse(root.right);
    // }
    // traverse(root);
    // return sum;