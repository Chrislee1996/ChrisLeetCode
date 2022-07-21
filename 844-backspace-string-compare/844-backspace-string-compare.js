/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let sStack = [];
    let tStack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '#') {
            sStack.pop();
        } else {
            sStack.push(s[i]);
        }
    }
    
    for(let i = 0; i < t.length; i++){
        if(t[i] === '#') {
            tStack.pop();
        } else {
            tStack.push(t[i]);
        }
    }
    
    if (sStack.toString() === tStack.toString()) {
        return true
    } 
    
    return false
};