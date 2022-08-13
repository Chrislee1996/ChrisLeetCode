/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
        let m = new Map(), res = [];
    for (let i = 0; i < arr1.length; i++) {
        m.set(arr1[i], m.get(arr1[i]) + 1 || 1);
    }
    for (let i = 0; i < arr2.length; i++) {
        let freq = m.get(arr2[i]);
        for (let j = 0; j < freq; j++) res.push(arr2[i]);
        m.delete(arr2[i]);
    }
    let remains = [];
    for (let [num, freq] of m) {
        for (let i = 0; i < freq; i++) remains.push(num);
    }
    remains.sort((a,b) => a-b);
    return res.concat(remains);
};