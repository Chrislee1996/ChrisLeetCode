/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let currentWord = 0
    let longestWord = 0
    for (let i = 0 ; i < s.length ; i++) {
        if (s[i] !== ' ') {
            currentWord++
            longestWord = currentWord
        } else {
            currentWord = 0
        }
    }
    return longestWord
};