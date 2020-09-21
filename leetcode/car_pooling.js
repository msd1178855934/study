/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
    const path = [];
    for (let trip of trips) {
        var cost = trip[0];
        var start = trip[1];
        var end = trip[2];
        while (start < end) {
            path[start] = path[start] ? path[start] + cost: cost;
            if (path[start] > capacity) return false;
            start++;
        }
    }
    return true;
};

var trips = [[2,1,5],[3,3,7]], capacity = 5;
console.log(carPooling(trips, capacity));
