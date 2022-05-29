/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let pointerOne = 0
    let pointerTwo = nums.length-1 
    
    while(pointerOne <=pointerTwo) {
        let middle = Math.floor((pointerOne + pointerTwo)/2)
            if (nums[middle] === target) {
                return middle
            } else if (nums[middle] < target) {
                pointerOne = middle + 1
            } else {
                pointerTwo = middle -1
            }
        }
    return pointerOne
 
    
};