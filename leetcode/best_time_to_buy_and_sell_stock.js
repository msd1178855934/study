/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    var minValue = Number.MAX_VALUE;
    for (const price of prices) {
        if (price < minValue) minValue = price;
        else if (price - minValue > maxProfit) maxProfit = price - minValue;
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));
