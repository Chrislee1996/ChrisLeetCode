/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let oddIndex = 0
    
    for (let i = 0 ; i < nums.length ; i++) {
        if (nums[i] % 2 === 0) {
            [nums[oddIndex], nums[i]] = [nums[i], nums[oddIndex]]
            oddIndex++
        }
    }
    return nums
};