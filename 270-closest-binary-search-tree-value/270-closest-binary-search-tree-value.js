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
    
    let closest = -Infinity
    const helper = (node, target) =>{
        if(!node) return closest
        if(Math.abs(target - node.val) < Math.abs(target - closest)) closest = node.val
        if(node.val > target) return helper(node.left, target, closest)
        else return helper(node.right, target, closest)
        return closest
    }
    return helper(root, target)
};



