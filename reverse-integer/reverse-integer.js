/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let negativeNumber = x < 0
    let reversedNumber = 0
    
    if (negativeNumber ) {
        x = x * -1
    }
    
    while (x > 0) {
        reversedNumber = (reversedNumber * 10) + (x % 10)
        x = Math.floor( x  / 10)
    }
    
    if (reversedNumber > 2 ** 31 -1) {
        return 0
    }
    
    return negativeNumber ? (reversedNumber * -1) : reversedNumber
   
};





















//   let negative = x < 0
//      let reversed = 0
     
//      if (negative) {
//          x *= -1
//      }

//     while (x > 0) {
//         reversed = (reversed * 10) + (x % 10)
//         x = Math.floor( x / 10 )
//     }
    
    
//     if (reversed > (2 ** 31 -1)) {
//         return 0
//     }
    
//     return negative ? (reversed * -1) : reversed


