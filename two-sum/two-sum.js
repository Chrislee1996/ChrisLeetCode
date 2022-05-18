/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    let hashmap = {}
    
    for (let i = 0 ; i < nums.length ; i++) {
        let values = nums[i]
        let pairValues = target - values
        if (hashmap[pairValues] !== undefined) {
            return [hashmap[pairValues], i]
        } else {
            hashmap[values] = i
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};






  //   let result = []
  // for (let i =0; i< nums.length;i++){
  //     for (let j = i+1; j < nums.length;j ++) {
  //       if (nums[i] + nums[j] === target) {
  //           return result = [i, j];
  //         }
  //     }
  // }  
    


    
//     let hashmap = {}
    
//     for (let i = 0 ; i < nums.length; i++) {
//         let values = nums[i]
//         let pairSum = target - values
//         if (hashmap[pairSum] !== undefined) {
//             return [hashmap[pairSum], i] 
//         } else {
//             hashmap[values] =i
//         }
//     }