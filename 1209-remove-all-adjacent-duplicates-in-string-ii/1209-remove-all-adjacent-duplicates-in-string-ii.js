/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = []
    
    for (let i = 0; i < s.length ; i++) {
        let char = s[i]
        let peek = stack[stack.length-1]
        
        if (stack.length === 0 || peek[0] !== char) {
            stack.push([char,1])
        } else {
            peek[1]++
            if (peek[1] === k) stack.pop()
        }
    }
    
    let result = ''
    
    for (let [char, counter] of stack) {
        result += char.repeat(counter)
    }
    return result
};