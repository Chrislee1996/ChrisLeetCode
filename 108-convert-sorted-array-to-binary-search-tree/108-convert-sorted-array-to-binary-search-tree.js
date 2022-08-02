/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, left = 0 , right = nums.length-1) {
    if (left > right) return null
    
    let middle = Math.floor((left + right) /2 )
    let headRoot = new TreeNode(nums[middle])
    headRoot.left = sortedArrayToBST(nums, left, middle -1)
    headRoot.right = sortedArrayToBST(nums, middle+1, right)
    
    return headRoot
    
};


//set our left side of the tree to 0 index of our array
//if our left side is ever greater than the right than we know we reached the end  of our array
//set our right side to the last digit in our nums array
//create a mid point since we know that the middle of our array is always the root node
//traverse our left side -> left side will be the left side of  the middle of our array - 1
//right is the right side of our mid array + 1
//return root