/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let pointerOne = 0
    let pointerTwo = s.length-1
    
    while (pointerOne < pointerTwo) {
        while(!isValidCharacter(s.charAt(pointerOne))) {
            pointerOne++
        }
         while(!isValidCharacter(s.charAt(pointerTwo))) {
            pointerTwo--
        }
        
        if (s.charAt(pointerOne).toLowerCase() !== s.charAt(pointerTwo).toLowerCase()) {
            return false
        }
        pointerOne++
        pointerTwo--
        
    }
    return true
}
    
    const isValidCharacter = (char) => {
        let validCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'
        return validCharacters.indexOf(char.toLowerCase()) > -1

    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
//     let pointerOne = 0
//     let pointerTwo = s.length-1
    
    
    
//     while (pointerOne < pointerTwo) {
//         while(!isValidCharacter(s.charAt(pointerOne))) {
//             pointerOne++
//         }
//         while (!isValidCharacter(s.charAt(pointerTwo))) {
//             pointerTwo--
//         }
//         if (s.charAt(pointerOne).toLowerCase() !== s.charAt(pointerTwo).toLowerCase()) {
//             return false
//         }
        
//         pointerOne++
//         pointerTwo--
//     }
//     return true
// };
    


// const isValidCharacter = (char) => {
//     let validCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    
//     return validCharacters.indexOf(char.toLowerCase()) > -1
// }