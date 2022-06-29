/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let absentCount = 0
    let consecutiveLate = 0
    for (const ch of s) {
        if (ch !== 'L') {
            consecutiveLate = 0
            if (ch === 'A') 
                absentCount++
        } else {
            consecutiveLate++
            if (consecutiveLate >= 3) 
                return false
        }
    }
    return absentCount < 2
};


//P P A L L P
//    i
//Count L >=3    
//count A++ < 2

//3 cons. L = false
//2 A = false