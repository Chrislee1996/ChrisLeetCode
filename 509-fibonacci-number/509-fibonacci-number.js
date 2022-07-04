/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
//     if (n===0) return 0
//     if (n===1) return 1
    
//     return fib(n-1) + fib(n-2)
    
        if (n == 0 || n == 1) {
        return n
    }
    
    let arr = [0, 1]
    
    // n-1 due to if it wants to find n=5, it would need to be based off fib(4)+fib(3)
    for (let i=2; i<=n; i++) {
        arr.push(arr[i-1] + arr[i-2])
    }
    
    return arr[arr.length-1]
};