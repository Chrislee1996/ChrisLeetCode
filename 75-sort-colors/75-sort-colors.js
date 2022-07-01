/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    let leftPointer = 0
    let rightPointer = nums.length-1
    for(let i = 0 ; i <= rightPointer;i++) {
        if (nums[i] === 0) {
            swap(nums, leftPointer, i)
            leftPointer++
        } else if (nums[i] === 2) {
            swap(nums, i , rightPointer)
            rightPointer--
            i--
        }
    }
    
};

const swap = (arr, leftPointer, rightPointer) => {
    [arr[leftPointer], arr[rightPointer]] = [arr[rightPointer], arr[leftPointer]]
}



//     if (nums === null || nums.length === 0) {
//         return;
//     }
//     let idx1 = 0, idx2 = nums.length - 1;
//     for (let i = 0; i <= idx2; i++) {
//         if (nums[i] === 0) {
//             swap(nums, idx1, i);
//             idx1++;
//         } else if (nums[i] === 2) {
//             swap(nums, i, idx2);
//             idx2--;
//             // we want to check on the swapped element because
//             // it could be 2
//             i--;
//         }
//     }
//     // T.C: O(N)
//     // S.C: O(1)
// };

// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }