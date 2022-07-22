/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointerS = 0
    let pointerT = 0
    while (pointerS < s.length && pointerT < t.length) {
        if (s[pointerS] == t[pointerT]) {
            pointerS++
        }
            pointerT++
    }
    return pointerS == s.length
};


