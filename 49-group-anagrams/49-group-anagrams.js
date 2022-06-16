/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashmap = {}
    
    for (let i = 0 ; i < strs.length ; i++) {
        // let char = strs[i]
        let sortedArray = strs[i].split('').sort().join('')
        if (!hashmap[sortedArray]) {

            hashmap[sortedArray] = [strs[i]]
                        console.log(hashmap[sortedArray])

        } else {
            hashmap[sortedArray].push(strs[i])
        }
    }
    return Object.values(hashmap)
};