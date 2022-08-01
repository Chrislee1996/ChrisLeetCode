/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


var solve = function(board) {
    if(board.length ==0) return null 
    
    for (let i = 0 ; i < board.length ; i++) {
        for (let j = 0; j < board[0].length ; j++) {
            if (board[i][j] === 'O' && (i==0 || i==board.length-1 || j==0 || j==board[0].length-1 )) {
                dfsHelper(board, i , j) 
            }
        }
    }
    
    for (let i = 0 ; i < board.length ; i++) {
        for (let j = 0 ; j < board[0].length ; j++) {
            if (board[i][j] === '#') {
                board[i][j] = 'O'
            } else {
                board[i][j] = 'X' 
            }
        }
    }
    return board
};


function dfsHelper(board, row, col) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length ||  board[row][col] == 'X' || board[row][col]=='#' ) return
    board[row][col] = '#'
    dfsHelper(board, row+1, col)
    dfsHelper(board, row-1, col)
    dfsHelper(board, row, col+1)
    dfsHelper(board, row, col-1)
    return
}


