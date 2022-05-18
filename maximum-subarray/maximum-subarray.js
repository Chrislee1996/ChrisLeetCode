/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    
    let currentMaxNumber = nums[0]
    let maxSubArray = nums[0] 
    
    for (let i = 1; i < nums.length; i++) {
        currentMaxNumber = Math.max(nums[i], nums[i] + currentMaxNumber) 
        if (currentMaxNumber > maxSubArray) {
            maxSubArray = currentMaxNumber
        }
    }
    return maxSubArray
};

