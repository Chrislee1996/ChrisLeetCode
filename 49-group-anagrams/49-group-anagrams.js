/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = {}
    
    for (let i = 0 ; i < strs.length;i++){
        let chars = strs[i]
        
        const sortedArray = chars.split('').sort().join('')
        // console.log(sortedArray)
        if (!hashmap[sortedArray]) {
            hashmap[sortedArray] = [chars]
        } else {
            hashmap[sortedArray].push(chars)
        }
    }
    return Object.values(hashmap)
};