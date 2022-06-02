/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPointer = 0
    let rightPointer = nums.length-1
    
    while (leftPointer <= rightPointer) {
        let middle = Math.floor((leftPointer + rightPointer) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (target < nums[middle]) {
            rightPointer = middle - 1 
        } else {
            leftPointer = middle + 1
        }
    }
    return -1
};