/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    if (n < 3) {
        return n
    }
    
    let firstStep = 1
    let secondStep = 2
    for (let i =3 ; i <= n; i++ ) {
        let currentStep = firstStep + secondStep
        firstStep = secondStep
        secondStep = currentStep
    }
    return secondStep
};