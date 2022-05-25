/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hashmap = {}
    let result = []
    
    for (let i = 0 ; i < nums1.length ; i++) {
        let valuesOne = nums1[i]
        
        if (!hashmap[valuesOne]) {
            hashmap[valuesOne] = 1
        } else {
            hashmap[valuesOne]++
        }
    }
    
    for (let i = 0 ; i < nums2.length ; i++) {
        let valuesTwo = nums2[i] 
        if (hashmap[valuesTwo]) {
            result.push(valuesTwo)
            hashmap[valuesTwo]--
        }
    }
    return result
} 



