/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let hashmap = {}
    
    for (let i = 0 ; i < magazine.length; i ++) {
        let char = magazine[i]
        if (!hashmap[char]) {
            hashmap[char] = 1
        } else {
            hashmap[char]++
        }
    }
    
    for (let i = 0 ; i<ransomNote.length ; i++) {
        let charRansomNote = ransomNote[i]
        if (!hashmap[charRansomNote]) {
            return false
        } else {
            hashmap[charRansomNote]--
        }
    }
    return true
};