/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    for (let i = 1 ; i < intervals.length; i++) {
        let firstMeeting = intervals[i-1][1]
        let nextMeeting = intervals[i][0]
        if (firstMeeting>nextMeeting) {
            return false
        }
    }
    return true
};