/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0
    let max = 0;
    for (let i = 0; i < s.length; i++)
        if (s[i] !== ' ')
            length++, max = length;
        else
            length = 0;
    return max;
};