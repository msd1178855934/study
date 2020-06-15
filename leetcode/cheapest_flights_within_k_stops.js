/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, K) {
    let flightHash = {};
    for (const flight of flights) {
        let [from, to, price] = flight;
        if (flightHash[from] == null) flightHash[from] = {};
        flightHash[from][to] = price;
    }

    let pq = [[0, 0, src]];

    while (pq.length != 0) {
        let [price, stop, from] = pq.shift();
        if (stop > K + 1) continue;
        if (from == dst) return price;
        let to = flightHash[from];
        for (let t in to) {
            let costToNext = price + to[t];
            pq.push([costToNext, stop + 1, t]);
        }
        pq.sort((a, b) => a[0] - b[0]);
    }

    return -1;
};

var n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
src = 0, dst = 2, k = 1;

console.log(findCheapestPrice(n, edges, src, dst, k));
