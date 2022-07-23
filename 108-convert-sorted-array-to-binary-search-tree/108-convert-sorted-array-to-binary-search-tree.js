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
var sortedArrayToBST = function(nums) {
  if (!nums) return null
  
  const helper = (low, high) => {
    if (low > high) return null
    
    const mid = Math.floor((high + low) / 2)
    const root = new TreeNode(nums[mid])
    
    root.left = helper(low, mid - 1)
    root.right = helper(mid + 1, high)
    
    return root
  } 


  return helper(0, nums.length - 1)
};