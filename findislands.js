/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let islands = 0;
    let visited = Array.from({ length: grid.length }, x => Array.from({ length: grid[0].length }, x => false))

    function dfs(i, j) {
        if (0 > i || i >= grid.length) return;
        if (0 > j || j >= grid[0].length) return;
        if (grid[i][j] === "0") return;
        if (visited[i][j]) return;

        visited[i][j] = true;

        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1" && !visited[i][j]) islands++;
            dfs(i, j);
        }
    }

    return islands;
}