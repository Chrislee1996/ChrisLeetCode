/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
//     let numberSet = new Set()
    
//     for (let i = 0 ; i < nums.length; i++) {
//         if (numberSet.has(nums[i])) {
//             numberSet.delete(nums[i])
//         } else {
//             numberSet.add(nums[i])
//         }
//     }
//     return Array.from(numberSet)
    
    
    let hashmap = {}
    
    for (let i = 0 ; i < nums.length; i++) {
        let values = nums[i]
        if (!hashmap[values]) {
            hashmap[values] = 1
        } else {
            hashmap[values]++
        }
    }
    
    for (let values in hashmap) {
        if (hashmap[values] === 1) {
            return values
        }
    }
};




