/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // const firstString = s.split("").sort().join("")
    // const secondString = t.split("").sort().join("")
    // return firstString === secondString
    
    if (s.length !== t.length) {
        return false
    }
    
    const letterCount = {}
    
    for (let i = 0; i < s.length; i++) {

        if (!letterCount[s[i]]) {
            letterCount[s[i]] = 0
        }
        letterCount[s[i]]++

        if (!letterCount[t[i]]) {
            letterCount[t[i]] = 0
        }
        letterCount[t[i]]--
    }
    // console.log(s, "count:", firstStringCount)
    // console.log(t, "count:", secondStringCount)
    
    for (let characters in letterCount) {
        if (letterCount[characters] !== 0) 
            return false
    }
    return true

};