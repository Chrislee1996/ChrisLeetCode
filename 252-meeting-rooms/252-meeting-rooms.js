/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) =>  a[0] - b[0])
    for (let i = 0 ; i < intervals.length -1 ;i++) {
        if (intervals[i][1] > intervals[i+1][0]) {
            return false
        }
    }
    return true
};


//[[0,30],[5,10],[15,20]]
//     n          i
// [0,30] [5,10] [15,20] 
//     i          n
// [2,4]  [7,10]
//    i    n


// [[0,30],[60,240],[90,120]]
//      n    i


//     intervals.sort((a, b) => a.start - b.start);
    
//     // can't attend if the next meeting starts before the previous ends
//     for (let i = 1; i < intervals.length; i++)
//         if (intervals[i].start < intervals[i-1].end) return false;
        
//     return true;