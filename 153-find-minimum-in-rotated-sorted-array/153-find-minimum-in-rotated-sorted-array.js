/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let leftPointer = 0 
    let rightPointer = nums.length-1
    
    while (leftPointer < rightPointer) {
        let middle = Math.floor((leftPointer + rightPointer)/ 2)
        if (nums[middle] > nums[rightPointer]) {
            leftPointer = middle + 1
        } else {
            rightPointer = middle
        }
    }
    return nums[leftPointer]
};