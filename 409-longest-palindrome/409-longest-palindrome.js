/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let hashmap = {}
    let result = 0

    
    for (let i = 0 ; i < s.length; i++) {
        let char = s[i]
        if (!hashmap[char]) {
            hashmap[char] = 1
        } else {
            hashmap[char]++
        }
        
    
        if(hashmap[char]%2==0){
                result+=hashmap[char]
                hashmap[char]=0
            }
        }

        return result < s.length ? result+1 : result

};