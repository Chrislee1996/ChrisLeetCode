/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPointer = 0
    let rightPointer = nums.length-1
    
    while (leftPointer <= rightPointer) {
        let mid = Math.floor((leftPointer + rightPointer) / 2)
        if (nums[mid] === target) {
            return mid
        }
        
        if (nums[leftPointer] <= nums[mid]) {
            if (nums[leftPointer] <= target && target <= nums[mid]) {
                rightPointer = mid - 1
            } else {
                leftPointer = mid + 1
            }
        } else {
            if (nums[mid] <= target && target <= nums[rightPointer]) {
                leftPointer = mid + 1
            } else {
                rightPointer = mid - 1
            }
        }
    }
    return -1
};







// let left = 0;
//   let right = nums.length - 1;
    
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
    
//     if (nums[mid] === target) {
//       return mid;
//     }
    
//     // When dividing the roated array into two halves, one must be sorted.
    
//     // Check if the left side is sorted
//     if (nums[left] <= nums[mid]) {
//       if (nums[left] <= target && target <= nums[mid]) {
//         // target is in the left
//         right = mid - 1;
        
//       } else {
//         // target is in the right
//         left = mid + 1;
//       }
//     } 
    
//     // Otherwise, the right side is sorted
//     else {
//       if (nums[mid] <= target && target <= nums[right]) {
//         // target is in the right
//         left = mid + 1;

//       } else {
//         // target is in the left
//         right = mid - 1;
//       }
//     }
    
    
//   }
    
//   return -1;