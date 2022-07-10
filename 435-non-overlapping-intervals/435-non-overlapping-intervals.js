/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1] - b[1])
    let removalCount = 0
    let endingNumber = intervals[0]
    for (let i = 1 ; i < intervals.length;i++) {
        if (intervals[i][0] < endingNumber[1]) {
            removalCount++
        } else {
            endingNumber = intervals[i]
        }
    }
    return removalCount
};




	// sort by earliest finish time
//     intervals.sort((a, b) => a[1] - b[1]);
//     let prev = intervals[0], remove = 0;
    
//     for(let i = 1; i < intervals.length; i++) {
//         if(intervals[i][0] < prev[1]) remove++;
//         else prev = intervals[i];
//     }
//     return remove;
// };