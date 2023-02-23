/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let q = [[amount, 0]];
    let visited = new Set([amount]);

    while (q.length > 0) {
        let [curr, steps] = q.shift();
        // console.log(`curr is ${curr} and steps are ${steps}`)
        if (curr === 0) return steps;
        if (curr < 0) continue;

        for (let coin of coins) {
            let newVal = curr - coin;
            if (visited.has(newVal)) continue;

            q.push([newVal, steps + 1]);
            visited.add(newVal)
        }
    }

    return -1;
};