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
    
    const firstStringCount = {}
    const secondStringCount = {}
    
    for (let i = 0; i < s.length; i++) {

        if (!firstStringCount[s[i]]) {
            firstStringCount[s[i]] = 0
        }
        firstStringCount[s[i]]++

        // console.log(firstStringCount, 'hash map one')
        // console.log([s[i]], 'first String')
        if (!secondStringCount[t[i]]) {
            secondStringCount[t[i]] = 0
        }
        secondStringCount[t[i]]++
    }
    // console.log(s, "count:", firstStringCount)
    // console.log(t, "count:", secondStringCount)
    
    for (let characters in firstStringCount) {
        console.log(characters,'char')
        if (firstStringCount[characters] !== secondStringCount[characters]) 
            return false
    }
    return true

};