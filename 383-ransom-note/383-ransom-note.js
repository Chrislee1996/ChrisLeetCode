/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    let hashmap = {}
    
    
    for (let i = 0 ; i< magazine.length;i++) {
        let firstString = magazine[i]
        
        if (!hashmap[firstString]) {
            hashmap[firstString] =1 
        } else {
            hashmap[firstString] ++
        }
    }
    
    for (let j = 0 ; j < ransomNote.length;j++) {
        let secondString = ransomNote[j]
        if (!hashmap[secondString]) {
            return false
        } else {
            hashmap[secondString]--
        }
    }
    return true
};
    
    
//     let hashmap = {}
    
//     for (let firstString of magazine) {
//         if (!hashmap[firstString]) {
//             hashmap[firstString] = 0
//         } 
//             hashmap[firstString]++
//     }
    
    
//     for (let firstString of ransomNote) {
//         if (!hashmap[firstString]) {
//             return false
//         } 
//             hashmap[firstString]--
//     }
//             return true

// }



