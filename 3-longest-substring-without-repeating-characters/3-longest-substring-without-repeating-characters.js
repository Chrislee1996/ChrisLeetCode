/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let slowPointer = 0
    let fastPointer = 0
    let longestSubString = 0
    
    while(fastPointer < s.length) {
        if (!set.has(s.charAt(fastPointer))) {
            set.add(s.charAt(fastPointer))
            fastPointer++
            longestSubString = Math.max(longestSubString, set.size)
        } else {
            set.delete(s.charAt(slowPointer))
            slowPointer++
        }
    }
    return longestSubString
};


//a b c a b c b b
//        S
//              F




//set: {
    //a
    //b
    //c
//}

//longestSubString = 3 