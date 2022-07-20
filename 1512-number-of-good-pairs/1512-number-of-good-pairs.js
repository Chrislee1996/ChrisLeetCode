/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0
    let hashmap = {}
    
    for (let num of nums) {
        if (hashmap[num]) {
            count +=hashmap[num]
            hashmap[num]++ 
        } else {
            hashmap[num]=1
        }
    }
    return count  
};