/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let multiplyStack = []
    let result = ''
    let tempString = ''
    let repeatStr = []
    
    for (let i = 0 ; i < s.length; i++) {
        let char = s[i]
        if (!isNaN(char)) {
            tempString = `${tempString}${char}`
            
            
        } else if (char === '[') {
            multiplyStack.push(tempString)
            tempString=''
            
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