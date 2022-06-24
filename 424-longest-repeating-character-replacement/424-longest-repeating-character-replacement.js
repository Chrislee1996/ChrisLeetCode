/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let leftPointer = 0
    let rightPointer = 0
    let maxCharCount = 0
    const hashmap = {}
    
    while (rightPointer < s.length) {
        const char = s[rightPointer]
        
        if (!hashmap[char]) {
            hashmap[char] = 1
        } else {
            hashmap[char]++
        }
        
        if (hashmap[char] > maxCharCount) {
            maxCharCount = hashmap[char]
        }
        
        if (rightPointer - leftPointer + 1 - maxCharCount > k) {
            hashmap[s[leftPointer]]--
            leftPointer++
        } 
        rightPointer++
    }
    return rightPointer - leftPointer
};





//   let left = 0;
//   let right = 0;
//   let maxCharCount = 0;
//   const visited = {};

//   while (right < s.length) {
//     const char = s[right];
//     visited[char] = visited[char] ? visited[char] + 1 : 1;

//     if (visited[char] > maxCharCount) maxCharCount = visited[char];

//     if (right - left + 1 - maxCharCount > k) {
//       visited[s[left]]--;
//       left++;
//     }

//     right++;
//   }

//   return right - left;
// };