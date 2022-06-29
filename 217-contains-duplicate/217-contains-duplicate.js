/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//     let hashmap = {}
    
//     for (let values of nums) {
//         if (!hashmap[values]) {
//             hashmap[values] = 1
//         } else {
//             hashmap[values]++
//         }
//     }
    
//     for (let values in hashmap) {
//         if (hashmap[values] > 1) {
//             return true
//         } 
//     }
//     return false
    
    let set = new Set()
    for (let num of nums) {
        if(set.has(num)) {
            return true
        }
                set.add(num)

    }
    return false
};