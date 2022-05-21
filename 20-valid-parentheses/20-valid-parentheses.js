/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
        let hash = {
            '(' : ')',
            '[' : ']',
            '{' : '}'
        }

        let stack = []
    
        
    for (let char of s) {
        if (hash[char]) {
            stack.push(hash[char])
        } else if (stack.length > 0 && stack[stack.length-1] === char) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
        
}
    

    









//  let hashmap = {'(':')' , '[':']' , '{':'}' }
//     let stack = []
    
//     for (let char of s) {
//         if (hashmap[char]) {
//             console.log(hashmap[char])
//             stack.push(hashmap[char])
//         } else if (stack.length > 0 && stack[stack.length-1] === char) {
//             stack.pop()
//         } else {
//             return false
//         }
//     }
//     return stack.length === 0
// };