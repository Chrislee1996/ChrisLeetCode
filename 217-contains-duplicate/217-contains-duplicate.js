/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
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
            return true
        }
    }
    return false
};





//     let numberSet = new Set()
    
//     for (let i =0 ; i< nums.length ; i++) {
//         if (!numberSet.has(nums[i])) {
//             numberSet.add(nums[i])
//         } else {
//             return true
//         }
//     }
//     return false

//     let numbers = new Set()
    
//     for (let num of nums) {
//         if (!numbers.has(num)) {
//             numbers.add(num)
//         } else {
//             return true
//         }
//     }
    
//     return false