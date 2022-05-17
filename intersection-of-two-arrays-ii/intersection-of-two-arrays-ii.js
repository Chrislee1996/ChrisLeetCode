/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hashmap = {}
    let result = []
    
    //create hashmap of the first array of nums
    for (let num of nums1) {
        if (!hashmap[num]) {
            hashmap[num] =1
        } else {
            hashmap[num]++
        }
    }
    
    
    //loop through the second array of nums and see if the hashmap has a count of the values
    for (let num of nums2) {
        if (hashmap[num]) {
            result.push(num)
            hashmap[num]--
        }
    }
    return result   
}