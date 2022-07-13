/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0 ) return [[]]
    
    let firstNumber = nums[0]
    let rest = nums.slice(1)
    
    const permuteWithoutFirst = permute(rest)
    
    const allPermutations = []
    
    for (let perm of permuteWithoutFirst) {
        for (let i = 0 ; i <= perm.length;i++) {
            let permWithFirst = [...perm.slice(0, i ), firstNumber, ...perm.slice(i)]
            allPermutations.push(permWithFirst)
        }
    }
    return allPermutations
};