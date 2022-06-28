/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let leftPointer = 0
    let rightPointer = 0
    let maxChar = 0
    let hashmap = {}
    
   while (rightPointer < s.length) {
       let char = s[rightPointer]
       
       if (!hashmap[char]) {
           hashmap[char] = 1
       } else {
           hashmap[char]++
       }
       
       if (hashmap[char] > maxChar) {
           maxChar = hashmap[char]
       }
       
       if (rightPointer - leftPointer + 1 - maxChar > k) {
           hashmap[s[leftPointer]]--
           leftPointer++
       }
       rightPointer++
   }
    return rightPointer - leftPointer
};