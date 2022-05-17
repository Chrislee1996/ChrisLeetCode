/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  //   let result = []
  // for (let i =0; i< nums.length;i++){
  //     for (let j = i+1; j < nums.length;j ++) {
  //       if (nums[i] + nums[j] === target) {
  //           return result = [i, j];
  //         }
  //     }
  // }  
    
    // let hash = {}
    // for (let i =0 ; i<nums.length ; i ++) {
    //     let value = nums[i]
    //     let pairValues = target - value
    //     if (hash[pairValues] !== undefined) {
    //         return [hash[pairValues], i]
    //     } else {
    //         hash[value] = i
    //     }
    // }

    
    let hashmap = {}
    
    for (let i = 0 ; i < nums.length; i++) {
        let values = nums[i]
        let pairSum = target - values
        if (hashmap[pairSum] !== undefined) {
            return [hashmap[pairSum], i] 
        } else {
            hashmap[values] =i
        }
    }
    
};