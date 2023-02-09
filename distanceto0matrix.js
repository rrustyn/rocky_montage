/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {

    const h = mat.length;
    const w = mat[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const distances = (
        Array.from({ length: h }, () => (
            Array.from({ length: w }, () => Infinity))
        )
    );
    const queue = [];

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (mat[i][j] === 0) {
                distances[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    console.log(distances);

    while (queue.length > 0) {
        let [row, col] = queue.shift();

        for (let [y, x] of directions) {
            if (0 <= row + y && row + y < h && 0 <= col + x && col + x < w) {
                console.log(`row: ${row + y} col: ${col + x}`)
                if (distances[row + y][col + x] > distances[row][col] + 1) {
                    distances[row + y][col + x] = distances[row][col] + 1
                    queue.push([row + y, col + x])
                }
            }
        }
    }

    return distances;
};
