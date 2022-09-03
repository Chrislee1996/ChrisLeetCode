/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
       let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    while(--n > 0){
        let tmp = []
        for(let val of list){
            let rem = val % 10
            if(rem + k < 10)     tmp.push(val * 10 + rem + k)
            if(k != 0 && rem - k >= 0)   tmp.push(val * 10 + rem - k)
        }
        list = tmp
    }
    return list
};