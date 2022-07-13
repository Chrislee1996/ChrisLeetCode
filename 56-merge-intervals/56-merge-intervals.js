/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    
    intervals.sort((a,b) => a[0]-b[0])
    // let result = [intervals[0]]
    
//     for (let interval of intervals) {
//         let endOne = result[result.length-1][1]
//         let endTwo = interval[1]
//         let startTwo = interval[0]
        
//         if (endOne >= startTwo) {
//             result[result.length-1][1] = Math.max(endOne, endTwo)
//         } else {
//             result.push(interval)
//         }
//     }
//     return result
    
    let result = [intervals[0]]
    
    for (let i = 1 ; i < intervals.length ; i++) {
        let endOne = result[result.length-1][1]
        let endTwo = intervals[i][1]
        let startTwo = intervals[i][0]
                if (endOne >= startTwo) {
            result[result.length-1][1] = Math.max(endOne, endTwo)
        } else {
            result.push(intervals[i])
        }
    }
    return result  
};


//     for (let interval of intervals) {
//         let endOne = result[result.length-1][1]
//         let endTwo = interval[1]
//         let startTwo = interval[0]
        
//         if (endOne >= startTwo) {
//             result[result.length-1][1] = Math.max(endTwo, endOne)
//         } else {
//             result.push(interval)
//         }
//     }
//     return result