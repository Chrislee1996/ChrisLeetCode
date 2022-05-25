/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let hashmap = {}
    
    for (let i = 0 ; i < magazine.length ; i++) {
        let firstStringCharacter = magazine[i]
        if (!hashmap[firstStringCharacter]) {
            hashmap[firstStringCharacter] = 1
        } else {
            hashmap[firstStringCharacter]++
        }
    }
    
    for (let i = 0 ; i < ransomNote.length; i++) {
        let secondStringCharacter = ransomNote[i]
        if (!hashmap[secondStringCharacter]) {
            return false
        } else {
            hashmap[secondStringCharacter] --
        }
    }
    return true
}
    
