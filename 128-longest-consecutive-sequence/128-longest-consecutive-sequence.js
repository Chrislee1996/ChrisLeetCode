/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set = new Set(nums)
    
    // for (let num of nums) {
    //     set.add(num)
    // }
    
    let longestStreak = 0
    
    for (let num of nums) {
        if (!set.has(num - 1)) {
            let currentStreak = 1
            let currentNumber = num
            
            while (set.has(currentNumber + 1)) {
                currentStreak +=1 
                currentNumber +=1
            }
            longestStreak = Math.max(currentStreak , longestStreak)
        }
    }
    return longestStreak
};