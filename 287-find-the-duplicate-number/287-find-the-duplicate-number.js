/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
        let hashmap = {}
    
    for (let i = 0 ; i < nums.length ; i++) {
        let values = nums[i]
        if (!hashmap[values]) {
            hashmap[values] = 1 
        } else {
            hashmap[values]++
        }
    }
    
    for (let values in hashmap) {
        if (hashmap[values] > 1) {
            return values
        }
    }

};