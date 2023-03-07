/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    let sortedIntervals = intervals.sort((a,b) => a[0] - b[0])

    let newIntervals = [sortedIntervals[0]]
    let newIndex = 0;

    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];

        if (newIntervals[newIndex][1] >= next[0]) {
            newIntervals[newIndex] = [
                Math.min(newIntervals[newIndex][0],next[0]),
                Math.max(newIntervals[newIndex][1],next[1])
                ]
        } else {
            newIntervals.push(next);
            newIndex++;
        }
    }

    return newIntervals;
};