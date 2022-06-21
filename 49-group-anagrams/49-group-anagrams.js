/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = {}
    
    for (let i = 0 ; i < strs.length ; i ++) {
        let sortedArray = strs[i].split('').sort().join('')
        
        if (!hashmap[sortedArray]) {
            hashmap[sortedArray] = [strs[i]]
        } else {
            hashmap[sortedArray].push(strs[i])
        }
    }
    return Object.values(hashmap)
};