/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity
    let rightPointer = 0
    let leftPointer = 0
    
    for (let i = 0 ; i < nums.length; i++) {
        leftPointer += nums[i]
        
        if (i - rightPointer === k -1) {
            let average = leftPointer / k
            max = Math.max(max, average)
            leftPointer -= nums[rightPointer]
            rightPointer ++
        }
    }
    return max
}; 