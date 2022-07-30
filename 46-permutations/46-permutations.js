/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = []
    
    const dfs = (i, nums) => {
        if (nums.length === 0 ) return [[]]
        
        if (i === nums.length) {
            result.push(nums.slice())
            return
        }
        
        for (let j = i ; j < nums.length; j++) {
            // [nums[i], nums[j]] = [nums[j], nums[i]]
            // dfs(i + 1, nums)
            // [nums[i], nums[j]] = [nums[j], nums[i]]
            // swap the positions
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            dfs(i + 1, nums);
            // unswap the positions as we go back up the tree
            nums[j] = nums[i];
            nums[i] = temp;
        }
    }
    
    dfs(0,nums)
    return result
};

//time = n!
//space = n^2