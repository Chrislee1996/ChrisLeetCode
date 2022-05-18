/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const hashmap = {}
    
    for (let i =0 ; i < s.length; i++) {
        const char = s[i]
        hashmap[char] = hashmap[char] +1 || 1
    }
    
    for (let i =0 ; i < s.length; i++) {
        const char = s[i]
        if (hashmap[char] === 1) {
            return i
        }
    }
    return -1
}; 