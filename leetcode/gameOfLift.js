/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

    const pos = [-1, 0, 1]
    let rows = board.length
    let cols = board[0].length

    const copy = [];
    for (let row = 0; row < rows; row++) {
        copy[row] = []
        for (let col = 0; col < cols; col++) {
            copy[row][col] = board[row][col];
        }
    }
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let live = 0

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (!(pos[i] == 0 && pos[j] == 0)) {
                        let r = row + pos[i]
                        let c = col + pos[j]

                        if ((r < rows && r >= 0) && (c < cols && c >= 0) && (copy[r][c] == 1)) {
                            live++
                        }
                    }
                }
            }

            if ((copy[row][col] == 1) && (live < 2 || live > 3)) {
                board[row][col] = 0
            }
            if (copy[row][col] == 0 && live == 3) {
                board[row][col] = 1
            }
        }
    }
};

let board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
]

gameOfLife(board)
console.log(board.toString())