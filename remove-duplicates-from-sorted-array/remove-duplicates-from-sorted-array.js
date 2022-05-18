/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
     if (nums.length === 0 ) {
         return 0
     }
    
    let counter = 0
    
    for (let i =0; i< nums.length;i++){
        if (nums[i] !== nums[i+1]) {
            nums[counter] = nums[i] 
            counter++
        }
    }
    return counter
};















//     let arrayCounter = 0
    
//     for (let i =0 ;i < nums.length ;i++) {
//         if (nums[i] !== nums[i + 1]) {
//             nums[arrayCounter] = nums[i]
//             arrayCounter++
//         }
//     }
//     return arrayCounter