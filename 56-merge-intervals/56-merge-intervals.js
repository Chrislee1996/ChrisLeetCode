/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0]-b[0])
    let result = [intervals[0]]
    for (let i = 1 ; i < intervals.length; i++) {
        let firstEnd = result[result.length-1][1]
        let startTwo = intervals[i][0]
        let secondEnd = intervals[i][1]
        if (firstEnd >= startTwo) {
            result[result.length-1][1]  = Math.max(firstEnd, secondEnd)
        } else {
            result.push(intervals[i])
        }
    }
    return result
};