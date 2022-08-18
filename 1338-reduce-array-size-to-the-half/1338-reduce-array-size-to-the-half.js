/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
       let m = new Map();
    for (let num of arr) m.set(num, m.get(num)+1 || 1);
    let occurrences = Array.from(m.values());
    occurrences.sort((a,b) => b-a);
    let removed = 0;
    for (let i = 0; i < occurrences.length; i++) {
        removed += occurrences[i];
        if (removed >= (arr.length/2)) return i+1;
    }
    return 0;
};