/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
//     let hashmap = {}
    
    
//     for (let i = 0 ; i< ransomNote.length;i++) {
//         let char = ransomNote[i]
        
//         if (!hashmap[char]) {
//             hashmap[char] =1 
//         } 
//             hashmap[char] ++
//     }
    
//     for (let j = 0 ; j < magazine.length;j++) {
//         let char = magazine[j]
//         if (!hashmap[char]) {
//             return false
//         }
//             hashmap[char]--
//     }
//     return true
// };
    
    
    let hashmap = {}
    
    for (let firstString of magazine) {
        if (!hashmap[firstString]) {
            hashmap[firstString] = 0
        } 
            hashmap[firstString]++
    }
    
    
    for (let firstString of ransomNote) {
        if (!hashmap[firstString]) {
            return false
        } 
            hashmap[firstString]--
    }
            return true

}



