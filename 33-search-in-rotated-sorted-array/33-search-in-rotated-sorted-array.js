/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPointer = 0
    let rightPointer = nums.length-1
    
    while(leftPointer <= rightPointer) {
        let middle = Math.floor((leftPointer + rightPointer)/2)
        if (nums[middle] === target) {
            return middle
        }
        
        if (nums[leftPointer] <= nums[middle]) {
            if (nums[leftPointer] <= target && nums[middle] >= target) {
                rightPointer = middle - 1
            } else {
                leftPointer = middle + 1
            }
        } else {
            if (nums[middle] <= target && target <= nums[rightPointer]) {
                leftPointer = middle + 1
            } else {
                rightPointer = middle - 1
            }
        }
    }
    return -1
};