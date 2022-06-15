/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashmap = {}
    for (let char of nums) {
        if (!hashmap[char]) {
            hashmap[char] = 1
        } else {
            hashmap[char]++
        }
    }
    
    for (let values in hashmap) {
        if (hashmap[values] > nums.length/2) {
            return values
        }
    }
};