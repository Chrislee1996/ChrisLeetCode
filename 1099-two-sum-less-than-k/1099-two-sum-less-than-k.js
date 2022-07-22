/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    // let max = -1
    // for (let i = 0 ; i< nums.length ; i++) {
    //     for (let j = i+ 1; j < nums.length ; j++) {
    //         let sum = nums[i] + nums[j]
    //         if (sum < k && sum > max) max = sum
    //     }
    // }
    // return max
    
    
    nums.sort((a,b) => a-b)
    let leftPointer = 0
    let rightPointer = nums.length-1
    let max = -1
    
    while (leftPointer < rightPointer ) {
        if (nums[leftPointer] + nums[rightPointer] < k ){
            max = Math.max(nums[leftPointer] + nums[rightPointer], max)
            leftPointer++
        } else {
            rightPointer--
        }
    }
    return max
};


// [34,23,1,24,75,33,54,8]
//  1 8 23 24 33 34 54 75 
//         o      o