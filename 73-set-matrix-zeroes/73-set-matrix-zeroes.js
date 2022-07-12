/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let zeroIndex = []
    
    for (let i = 0 ; i < matrix.length ; i++) {
        for (let j = 0 ; j < matrix[0].length;j++) {
            if (matrix[i][j] === 0) zeroIndex.push([i,j])
        }
    }
    
    for (let indexes of zeroIndex) {
        let row = indexes[0]
        let col = indexes[1]
        setZero(row, col)
    }
    
    function setZero(row,col) {
        for (let i = 0 ; i < matrix.length;i++) {
            matrix[i][col] = 0
        }
        
        for (let i = 0 ; i< matrix[0].length;i++) {
            matrix[row][i] = 0
        }
        
    }
    
};