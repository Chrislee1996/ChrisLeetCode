/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
//     if (n===0) return 0
//     if (n===1) return 1
    
//     return fib(n - 1) + fib(n - 2)
    
    if (n==0 || n ===1) {
        return n
    }
    
    let arr = [0,1]
    for (let i = 2; i <=n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n]
};