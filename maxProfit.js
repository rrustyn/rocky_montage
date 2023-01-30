/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxDiff = -Infinity;

    for (let i = 1; i < prices.length; i++) {
        maxDiff = Math.max(maxDiff, prices[i] - min);
        min = Math.min(min, prices[i])
    }

    return maxDiff > 0 ? maxDiff : 0;
};