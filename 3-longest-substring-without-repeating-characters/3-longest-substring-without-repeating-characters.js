/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let leftPointer = 0
    let rightPointer = 0
    
    let subStringLength = 0
    
    while (rightPointer < s.length) {
        if (!set.has(s.charAt(rightPointer))) {
            set.add(s.charAt(rightPointer))
            subStringLength = Math.max(subStringLength, set.size)
            rightPointer++
        } else {
            set.delete(s.charAt(leftPointer))
            leftPointer++
        }
    }
    return subStringLength
};