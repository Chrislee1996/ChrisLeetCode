/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hashmap = {}
    for (let i = 0; i < nums.length;i++){
        let char = nums[i]
        if (!hashmap[char]) {
            hashmap[char] =1 
        } else {
            hashmap[char] ++
        }
    }
    
    for (let values in hashmap) {
        if (hashmap[values] === 1) {
            return values
        }
    }
};