/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    if (grid.length === 0) return 0;

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let result = 0, traversable = 1, sx, sy;
    let w = grid.length, h = grid[0].length;

    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            if (grid[i][j] === 0)
                traversable++;
            else if (grid[i][j] === 1)
                sx = i, sy = j;
        }
    }

    dfs(sx, sy);
    return result;

    function dfs(x, y) {
        if (x < 0 || y < 0 || x >= w || y >= h || grid[x][y] < 0) return;

        if (grid[x][y] === 2) {
            return result += !traversable;
        }

        grid[x][y] = -2, traversable--;

        for (let [dx, dy] of directions) {
            dfs(x + dx, y + dy);
        }

        grid[x][y] = 0, traversable++;
    }
};

const grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]];
console.log(uniquePathsIII(grid));
