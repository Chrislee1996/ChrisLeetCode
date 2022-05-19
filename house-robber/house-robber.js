/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0 ) {
        return 0
    }
    
    if (nums.length === 1) {
        return nums[0]
    }
    
    let robbedTotal = []
    
    robbedTotal[0] = nums[0]
    robbedTotal[1] = Math.max(nums[0], nums[1])
    
    for (let i = 2; i < nums.length;i++) {
        robbedTotal[i] = Math.max(robbedTotal[i - 1] , robbedTotal[i - 2 ] + nums[i])
    }
    
    return robbedTotal[robbedTotal.length - 1]
};