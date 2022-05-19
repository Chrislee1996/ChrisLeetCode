/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    //create memory object
    //go through array and see if what i see now is something ive seen before
    // if my number is never seen before - put it in our mem object
    // if the number does exist return true
    //ex nums = [1,2,3,1]
    
//     let memory = {}
    
//     for (let i =0 ; i< nums.length ; i++) {
//         if (memory[nums[i]] === undefined ) {
//             memory[nums[i]] = "new number"
//         } else {
//             return true 
//         }
//     }
//     return false 

    let numberSet = new Set()
    
    for (let i =0 ; i< nums.length ; i++) {
        if (!numberSet.has(nums[i])) {
            numberSet.add(nums[i])
        } else {
            return true
        }
    }
    return false
};







//     let numbers = new Set()
    
//     for (let num of nums) {
//         if (!numbers.has(num)) {
//             numbers.add(num)
//         } else {
//             return true
//         }
//     }
    
//     return false