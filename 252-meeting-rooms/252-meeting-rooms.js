/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    
    for (let i = 1 ; i < intervals.length ;i++) {
        let firstMeeting = intervals[i-1][1]
        let secondMeeting = intervals[i][0]
        if (firstMeeting > secondMeeting) {
            return false
        }
    }
    return true
};


//[[0,30],[5,10],[15,20]]
//    m1   i  
//               m2
// [0,30] [5,10] [15,20] 
//     i          n
// [2,4]  [7,10]
//    i    n


