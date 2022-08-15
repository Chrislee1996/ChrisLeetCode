/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0
    
    let romamNumbers = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    for (let i = 0 ; i < s.length;i++) {
        let currentValue = romamNumbers[s[i]]
        let nextValue = romamNumbers[s[i + 1]]
        
        if (nextValue) {
            if (currentValue >= nextValue) {
            total += currentValue
        } else {
            total += (nextValue - currentValue)
            i++
        }
        } else {
            total += currentValue
        }
    }
    return total
};

// M C M X C V I
//             i 1

//1000 > 100? Yes so we add 1000
//100 > 1000? No so we subtract
//10 > 100? 
//5 > 1

//total = 1000 + 900 + 90 + 4
//1994


//L V I I I
//  i 1


//total = 50 + 5 + 1 + 1 + 1

//50 > 5
//5 > 1
1 >= 1
