/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if (x < 0) {
        return false
    }

   return x === reversedInterger(x)
};


const reversedInterger = (x) => {
     let reversed = 0
    
    while (x > 0) {
        reversed = (reversed * 10) + (x % 10)
        x = Math.floor(x/10)
    }
    
    return reversed
}