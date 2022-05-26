/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let hashmap = {}
    
    for (let i = 0 ; i < nums.length; i++) {
        let char = nums[i]
        if (!hashmap[char]) {
            hashmap[char] = 1
        } else {
            hashmap[char]++
        }
    }
    
    for (let values in hashmap) {
        if (hashmap[values] > Math.floor(nums.length / 2)) {
            return values
        }
    }
    
    
};