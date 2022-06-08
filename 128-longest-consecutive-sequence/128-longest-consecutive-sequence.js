/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set()
    

    
    for (let i = 0 ; i < nums.length;i++) {
        let number = nums[i]
        set.add(number)
    }
    
    let longestStreak = 0
    
    for (let num of set) {
        if (!set.has(num-1)) {
            let currentNum = num
            let currentStreak = 1
            
            while (set.has(currentNum + 1)) {
                currentStreak +=1
                currentNum +=1
            }
            longestStreak = Math.max(longestStreak, currentStreak)
        }
    }
    return longestStreak
};