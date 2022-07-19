/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    
    function dfsHelper(nums,idx,combinations) {
        if (nums.length === 0) return
        
        if (idx === nums.length) {
            result.push(combinations.slice())
            return
        }
        
        dfsHelper(nums, idx+1, combinations)

        combinations.push(nums[idx])
        dfsHelper(nums, idx+1, combinations)
        combinations.pop()
    }
    
    dfsHelper(nums, 0, [])
    return result
};