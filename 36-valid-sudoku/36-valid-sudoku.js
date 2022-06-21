/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for (let i = 0 ; i < 9 ; i++) {
        let row = new Set()
        let col = new Set()
        let box = new Set()
        
        
        for (let j = 0 ; j < 9 ; j++) {
            let boardRow = board[i][j]
            let boardCol = board[j][i]
            let boardBox = board[3* Math.floor(i/3) + Math.floor(j/3)][3*(i%3)+(j%3)]
                
                
            if (boardRow !== '.') {
                if (row.has(boardRow)) {
                    return false
                } else {
                    row.add(boardRow)
                }
            }
            
             if (boardCol !== '.') {
                if (col.has(boardCol)) {
                    return false
                } else {
                    col.add(boardCol)
                }
            }
            
            
             if (boardBox !== '.') {
                if (box.has(boardBox)) {
                    return false
                } else {
                    box.add(boardBox)
                }
            }
        }
    }
    return true
};