/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])
    let removalCounter = 0 
    let firstInterval = intervals[0]
    for (let i = 1 ; i < intervals.length ; i++) {
        if (firstInterval[1] > intervals[i][0]) {
            removalCounter++
        } else {
            firstInterval = intervals[i]
        }
    }
    return removalCounter
};

// [[1,2],[2,3],[1,3], [3,4]]
//           F   I
