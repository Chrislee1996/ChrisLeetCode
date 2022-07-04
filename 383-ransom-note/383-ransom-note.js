/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hashmap = {}
    
    for (let char of magazine) {
        if (!hashmap[char]) {
            hashmap[char] = 1
        } else {
            hashmap[char]++
        }
    }
    
    for (let value of ransomNote) {
        if (hashmap[value]) {
            hashmap[value]--
        } else {
            return false
        }
    }
    return true
};