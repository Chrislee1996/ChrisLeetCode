/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a-b)
    
    let result = []
    
    for (let i = 0 ; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let leftPointer = j + 1
            let rightPointer = nums.length-1
            
            if (nums[i] === nums[i - 1]) continue 

            
            while (leftPointer < rightPointer) {
                const sum = nums[i] + nums[j] + nums[leftPointer] + nums[rightPointer]
                if (sum === target) {
                    result.push([nums[i] ,nums[j] ,nums[leftPointer] ,nums[rightPointer]])
                    while (nums[leftPointer] === nums[leftPointer+1]) leftPointer++
                    while (nums[rightPointer] === nums[rightPointer-1]) rightPointer--
                    leftPointer++
                    rightPointer--
                } else if (sum < target) {
                    leftPointer++
                } else {
                    rightPointer--
                }
            }
            while(nums[j] === nums[j + 1]) j++;
        }   
        while(nums[i] === nums[i + 1]) i++;
    }
    return result
};

