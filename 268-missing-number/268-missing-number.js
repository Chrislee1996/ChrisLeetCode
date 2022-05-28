/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let totalArraySum = nums.length
    let missingSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        totalArraySum += i
        missingSum += nums[i]
    }
    
    return totalArraySum - missingSum
};