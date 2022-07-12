/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
        // [1,2,3],    
        // [4,5,6],
        // [7,8,9]
    
    
        // [1,4,7],    
        // [2,5,8],
        // [3,6,9]
    
    for (let i = 0 ; i < matrix.length ; i++ ) {
        for (let j = i ; j < matrix[0].length ; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }
    
        // [1,4,7],    
        // [2,5,8],
        // [3,6,9]
    
        // [7,4,1],    
        // [8,5,2],
        // [9,6,3]
    
    for (let i = 0 ; i < matrix.length ; i++) {
        for (let j = 0;  j < matrix[0].length/2;j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][matrix[0].length-j-1]
            matrix[i][matrix[0].length-j-1]  = temp
        }
    }
};