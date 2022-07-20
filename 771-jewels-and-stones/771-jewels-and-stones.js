/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let hashmap = {}
    let count = 0
    
    for (let jewel of jewels) {
        if (!hashmap[jewel]) {
            hashmap[jewel] = true
        } 
    }
    console.log(hashmap)
    for (let stone of stones) {
        if (hashmap[stone]) {
            count++
        }
    }
    return count
};