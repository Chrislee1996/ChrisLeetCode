/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arraySum = nums.length
    let totalSum = 0
    
    for (let i = 0 ; i < nums.length ; i++) {
        arraySum += i
        totalSum += nums[i]
    }
    return arraySum - totalSum
};