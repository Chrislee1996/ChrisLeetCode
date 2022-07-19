/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   let result = []
   let setNums1 = new Set(nums1)
   let setNums2 = new Set(nums2)
   
for (let values of setNums1) {

    if (setNums2.has(values)) {
        result.push(values)
    }
}
    return result
};