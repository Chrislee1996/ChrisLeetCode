/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let result = ''
    let tempString = ''
    let multiplyStack = []
    let repeatStr = []
    
    for (let i = 0 ; i < s.length; i++) {
        let char = s[i]
        
        if (!isNaN(char)) {
            tempString = `${tempString}${char}`
        } else if (char === '[') {
            multiplyStack.push(tempString)
            tempString = ''
            
            repeatStr.push(result)
            result = ''
            
        } else if (char === ']') {
            
            result = repeatStr.pop() + result.repeat(multiplyStack.pop())
            
        } else {
            result += char
        }
    }
    return result
};


// "3[a]2[bc]"