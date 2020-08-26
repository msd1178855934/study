/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    var dp = [];
    var rows = matrix.length, cols = rows > 0 ? matrix[0].length : 0;
    var max = 0;
    for (let i = 0; i < rows + 1; i++) {
        dp.push(new Array(cols + 1).fill(0));
    }
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i - 1][j - 1] == '1') {
                dp[i][j] = Math.min(Math.min(dp[i][j - 1], dp[i - 1][j]), dp[i - 1][j - 1]) + 1;
                max = Math.max(dp[i][j], max);
            }
        }
    }
    return max * max;
};

var matrix =
    [[1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]]

console.log(maximalSquare(matrix));
