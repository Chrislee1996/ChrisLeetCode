/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map()
    
    for (let num of nums) {
        map.set(num, (map.get(num) + 1) || 1)
    }

  
    return nums.sort((a,b) => {
        if(map.get(a) === map.get(b)) {
            return b-a
        } else {
            return map.get(a) - map.get(b)
        }
    })
    
};