/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    for (let i in nums) {
        sum += nums[i]        
        nums[i] = sum
    }
    return nums
};