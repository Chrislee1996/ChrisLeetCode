/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let starts = intervals.map(interval => interval[0]);
    let ends = intervals.map(interval => interval[1]);
    starts.sort((a,b) => a-b);
    ends.sort((a,b) => a-b);
    let count = 0, j = 0;
    for (let i = 0; i < starts.length; i++) {
        count++;
        // a meeting ended and its room became available
        if (starts[i] >= ends[j]) {
            count--;
            j++
        }
    }
    return count;
};