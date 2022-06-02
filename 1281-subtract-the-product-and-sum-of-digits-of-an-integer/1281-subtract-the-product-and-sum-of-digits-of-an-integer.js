/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    while (n > 0) {
        const modNumber = n % 10
        sum += modNumber
        product *= modNumber
        n = Math.floor(n/10)
    }
    return product - sum
};