/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) {
        return []
    }
    
   nums.sort((a,b) => {
        return a-b
    }) 
    
    let result = []
    
    for (let i = 0 ; i<nums.length; i++) {
        if (nums[i] > 0 ) {
            break
        }
        
        if (nums[i] === nums[i-1]) {
            continue
        }
        
        let leftPointer = i + 1
        let rightPointer = nums.length-1
        
        while(leftPointer < rightPointer) {
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer]
            
            if (sum === 0 ) {
                result.push([nums[i] , nums[leftPointer], nums[rightPointer]])
                
                leftPointer++
                rightPointer--
            
            
            while(leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer - 1]) {
                leftPointer++
            }
             while(leftPointer < rightPointer && nums[rightPointer] === nums[rightPointer + 1]) {
                rightPointer--
            }
            
            } else if (sum < 0) {
                leftPointer++
            } else {
                rightPointer--
            }
        }
    }
    return result
};
    
    
    
    //-4    -1   -1   0   1   2
    //i      L                R
    
    //-4 + -1 + 2