/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0 ) return [[]]
    let result = []
    
    let firstNumber = nums[0]
    let otherNumbers = nums.slice(1)
    
    let allOtherNumbers = permute(otherNumbers)
    
    for (let numbers of allOtherNumbers) {
        for (let i = 0 ; i <= numbers.length ; i++) {
            let allNumbers = [...numbers.slice(0,i), firstNumber, ...numbers.slice(i)]
            result.push(allNumbers)
        }
    }
    return result
};