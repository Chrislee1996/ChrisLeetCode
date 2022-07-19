/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashmap = {}
    
    for (let value of arr) {
        if (!hashmap[value]) {
            hashmap[value] =1 
        } else {
            hashmap[value]++
        }
    }

 let set = new Set()

     for (let values in hashmap) {
        let hashmapValues = hashmap[values]
         if (set.has(hashmapValues)) {
             return false
         }
         set.add(hashmapValues)
     }
    return true
};