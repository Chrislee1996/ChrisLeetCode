/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sHashmap = {}
    let tHashmap = {}
    
    for (let i = 0 ; i < s.length ; i++) {
        let sChar = s[i]
        let tChar = t[i]
        
        if (!sHashmap[sChar]) sHashmap[sChar] = tChar
        if (!tHashmap[tChar]) tHashmap[tChar] = sChar
        
        if (sHashmap[sChar] !== tChar || tHashmap[tChar] !== sChar ) return false
    }
    return true
};
