/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    let max = -1
    for (let i = 0 ; i< nums.length-1 ; i++) {
        for (let j = i+ 1; j < nums.length ; j++) {
            let sum = nums[i] + nums[j]
            if (sum < k && sum > max) max = sum
        }
    }
    return max
};


//34,23,1,24,75,33,54,8
//   O                T

    //42
    //31