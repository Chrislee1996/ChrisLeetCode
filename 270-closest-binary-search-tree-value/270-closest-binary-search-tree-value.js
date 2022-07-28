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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    
    let closestDifference = Infinity
    let closestValue = 0
    
    const search = (node) => {
        if (!node) return
        
        if (Math.abs(node.val - target) < closestDifference) {
            closestDifference = Math.abs(node.val - target)
            closestValue = node.val 
        }
        
        if (target < node.val) {
            search(node.left)    
        } else {
            search(node.right)
        }
    }

    search(root)
    return closestValue
};

//     let closestDiff = Infinity;
//     let closestVal = Infinity;
    
//     const search = (node) => {
//         if (!node) return;
        
//         if (Math.abs(node.val - target) < closestDiff) {
//             closestDiff = Math.abs(node.val - target);
//             closestVal = node.val;
//         }
        
//         if (target < node.val) {
//             search(node.left);
//         }
//         else {
//             search(node.right);
//         }
//     }
    
//     search(root);
    
//     return closestVal;