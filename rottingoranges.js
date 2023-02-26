/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let minMinutes = 0;

    visited = Array.from({ length: ROWS },
        x => Array.from({ length: COLS },
            x => false));

    directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    let queue = [];

    for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0]);
                visited[i][j] = true;
            }
        }
    }

    while (queue.length > 0) {
        let [row, col, minutes] = queue.shift();

        for (let [r, c] of directions) {
            let adjRow = row + r
            let adjCol = col + c

            if (adjRow < 0 || adjRow >= ROWS) continue;
            if (adjCol < 0 || adjCol >= COLS) continue;
            if (visited[adjRow][adjCol]) continue;

            visited[adjRow][adjCol] = true;

            if (grid[adjRow][adjCol] === 1) {
                grid[adjRow][adjCol] = 2;
                queue.push([adjRow, adjCol, minutes + 1])
                minMinutes = minutes + 1;
            }
        }
    }

    if (grid.every(a => a.every(b => b !== 1))) {
        return minMinutes;
    }

    return -1;
};