/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let leftPointer = 0
    let rightPointer = nums.length-1
    
    
    while(leftPointer <= rightPointer) {
        let middle = Math.floor((leftPointer + rightPointer) / 2) 
        if ( target <= nums[middle]) {
            rightPointer = middle -1
        } else {
            leftPointer = middle + 1
        }
    }
    if (nums[leftPointer] !== target) return [-1,-1]
    
    const start = leftPointer
    
     leftPointer = 0
     rightPointer = nums.length-1

        while(leftPointer <= rightPointer) {
        let middle = Math.floor((leftPointer + rightPointer) / 2) 
        if ( target >= nums[middle]) {
            leftPointer = middle + 1
        } else {
            rightPointer = middle -1 
        }
    }
    return [start, rightPointer]
};





//    let firstPosition = -1, lastPosition = -1;
//     let lo = 0, hi=nums.length-1; 
    
//     // Search firstPosition
//     while(lo<=hi){
//         let mid = Math.floor((lo+hi)/2);
//         if(nums[mid] >= target) hi = mid-1;
//         else lo=mid+1;
//     }
    
//     // Check if number exists
//     if(nums[lo] !== target) return [-1, -1];
//     firstPosition = lo;
    
//     // Reset pointers
//     let lo =0, hi=nums.length-1; 
    
//     // Search lastPosition
//     while(lo<=hi){
//         let mid =  Math.floor((lo+hi)/2);
//         if(nums[mid] > target) hi = mid-1;
//         else lo=mid+1;
//     }
//     lastPosition=hi;
    
//     return [firstPosition, lastPosition]
// };