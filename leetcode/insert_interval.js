/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }

    var result = [];
    var flag = 0;
    let i;
    for (i = 0; i < intervals.length; i++) {
        var interval = intervals[i];
        if (newInterval[0] > interval[1]) {
            result.push(interval);
        } else if (interval[0] > newInterval[1]) {
            result.push(newInterval);
            flag = 1;
            break;
        } else {
            newInterval[0] = Math.min(interval[0], newInterval[0]);
            newInterval[1] = Math.max(interval[1], newInterval[1]);
        }
    }

    if(flag === 0) {
        result.push(newInterval);
    } else {
        result = result.concat(intervals.slice(i));
    }
    return result;
};

var intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8];
console.table((insert(intervals, newInterval)));
