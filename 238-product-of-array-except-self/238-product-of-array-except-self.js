/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftArray = []
    let leftMultiplier = 1
    
    for (let i = 0 ; i < nums.length ; i++) {
        leftArray[i] = leftMultiplier
        leftMultiplier *= nums[i]
    }
    
    let rightArray = []
    let rightMultiplier = 1
    
    for (let i = nums.length-1 ; i>=0;i--) {
        rightArray[i] = rightMultiplier
        rightMultiplier *= nums[i]
        rightArray[i] *= leftArray[i]
    }
    return rightArray
};