/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length < 2){
        return intervals; 
    } 
    intervals.sort((a,b) => a[0] - b[0])
    let result = [intervals[0]]
    
    for (let values of intervals) {
        let lastEnd = result[result.length-1]
        if (lastEnd[1] >= values[0]) {
            lastEnd[1] = Math.max(lastEnd[1] , values[1])
        } else {
            result.push(values)
        }
    }
    return result
};


// var merge = function(intervals) {
//   intervals.sort((a, b) => a[0] - b[0])
//   const res = [intervals[0]]
//   for (let curr of intervals) {
//     prev = res[res.length - 1]
//     if (prev[1] >= curr[0]) {
//       prev[1] = Math.max(curr[1], prev[1])
//     } else {
//       res.push(curr)
//     }
//   }
//   return res
// };