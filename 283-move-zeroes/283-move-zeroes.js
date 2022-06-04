/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slowPointer = 0
    let fastPointer = 0
    
    for (let fastPointer = 0 ; fastPointer < nums.length; fastPointer++) {
        if (nums[fastPointer] !== 0) {
            let temp = nums[slowPointer]
            nums[slowPointer] = nums[fastPointer]
            nums[fastPointer] = temp
            
            slowPointer ++
            
        }
    }
};