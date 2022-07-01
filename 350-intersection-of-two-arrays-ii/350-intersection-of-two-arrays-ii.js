/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hashmap = {}
    let result = []
    
    for (let num of nums1) {
        if (!hashmap[num]) {
            hashmap[num] = 1
        } else {
            hashmap[num]++
        }
    }
    
    for (let num2 of nums2) {
        if (hashmap[num2]) {
            result.push(num2)
            hashmap[num2]--
        }
    }
    return result
};
