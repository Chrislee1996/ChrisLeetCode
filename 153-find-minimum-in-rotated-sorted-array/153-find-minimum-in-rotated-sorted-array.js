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





//11 --- 13 --- 14 ---- 15 --- 17
//L             M              R
//              
//14 > 11? FALSE



// [3,4,5,1,2]
//  L   M   R

//5  > 3?