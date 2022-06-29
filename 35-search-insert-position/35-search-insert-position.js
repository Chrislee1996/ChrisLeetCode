/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let leftPointer = 0 
    let rightPointer = nums.length-1
    while(leftPointer <= rightPointer) {
        let middle = Math.floor((leftPointer + rightPointer) / 2)
        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] < target ) {
            leftPointer = middle + 1
        } else {
            rightPointer = middle -1 
        }
    }
    return leftPointer
};