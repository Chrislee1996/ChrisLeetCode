/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = []
    let letterToNumbers = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    }
    
    function dfsHelper(digits, idx , combinations) {
        if (digits.length === 0) return
        
        if (digits.length === idx) {
            result.push(combinations.join(''))
            return
        }
        
        let chars = letterToNumbers[digits[idx]]
        
        for (let char of chars) {
            combinations.push(char)
            dfsHelper(digits, idx+1 , combinations)
            combinations.pop()
        }
        
    }
    

    
    dfsHelper(digits, 0 , [])
    return result
};