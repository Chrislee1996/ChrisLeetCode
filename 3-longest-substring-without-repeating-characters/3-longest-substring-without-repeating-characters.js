/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let fastPointer = 0
    let slowPointer = 0
    
    let longestSubstring = 0
    
    while (fastPointer < s.length) {
        if (!set.has(s.charAt(fastPointer))) {
            set.add(s.charAt(fastPointer))
            fastPointer++
            longestSubstring = Math.max(longestSubstring, set.size)
        } else {
            set.delete(s.charAt(slowPointer))
            slowPointer++
        }
    }
    return longestSubstring
};