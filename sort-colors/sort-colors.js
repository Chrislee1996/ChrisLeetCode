/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let leftPointer = 0 
    let indexPointer = 0
    let rightPointer = nums.length-1

    while(indexPointer <= rightPointer){
        if (nums[indexPointer] === 0) {
            swap(leftPointer, indexPointer)
            leftPointer++
            indexPointer++
        } else if (nums[indexPointer] === 1) {
            indexPointer++
        } else if (nums[indexPointer] === 2) {
            swap(indexPointer, rightPointer)
            rightPointer--
        }
    }

    
    function swap (a,b) {
        [nums[b] , nums[a]] = [nums[a], nums[b]]
    }
}



//1 0 1 2
//  i
//l