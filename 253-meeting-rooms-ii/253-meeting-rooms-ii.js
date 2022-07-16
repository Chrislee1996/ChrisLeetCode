/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let rooms = 0
    let end = 0
    let startTime = intervals.map(a => a[0]).sort((a,b) => a-b)
    let endTime = intervals.map(a => a[1]).sort((a,b) => a-b)
    for (let i = 0 ; i < intervals.length; i++) {
        if (startTime[i] < endTime[end]) {
            rooms++
        } else {
            end++
        }
    }
    return rooms
};