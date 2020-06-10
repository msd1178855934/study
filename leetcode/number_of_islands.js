var l, w;

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;
    l = grid.length;
    if (l == 0) return 0;
    w = grid[0].length;

    for (let i = 0; i < l; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] == '1') {
                sink(grid, i, j);
                count++;
            }
            
        }
    }
    return count;
};

function sink(grid, i, j) {
    if (i < 0 || j < 0 || i >= l || j >= w || grid[i][j] != '1') return;
    grid[i][j] = '0';
    sink(grid, i - 1, j);
    sink(grid, i + 1, j);
    sink(grid, i, j - 1);
    sink(grid, i, j + 1);
}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));
