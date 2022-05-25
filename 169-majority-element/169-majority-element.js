/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    
    for (let i = 0 ; i < nums.length ; i++) {
        let char = nums[i]
        if (!map[char]) {
            map[char] = 1
        } else {
            map[char]++
        }
    }
    

     for (let key in map) {
         if (map[key] > Math.floor(nums.length/2)) {
             return key
         } 
     }
};