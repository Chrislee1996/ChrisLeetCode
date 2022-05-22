/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

    
    if (nums.length === 1) {
        return nums[0]
    }
    
    let currentMax = nums[0]
    let globalMax = nums[0]
    
    for (let i = 1; i < nums.length ; i++) {
        currentMax = Math.max(nums[i], nums[i] + currentMax)
        if (currentMax > globalMax) {
            globalMax = currentMax
        }
    }
    return globalMax
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};









//     if (nums.length === 1 ){
//         return nums[0]
//     }
    
//     let currentMaxNumber = nums[0]
//     let maxSubArray = nums[0] 
    
//     for (let i = 1; i < nums.length; i++) {
//         currentMaxNumber = Math.max(nums[i], nums[i] + currentMaxNumber) 
//         if (currentMaxNumber > maxSubArray) {
//             maxSubArray = currentMaxNumber
//         }
//     }
//     return maxSubArray