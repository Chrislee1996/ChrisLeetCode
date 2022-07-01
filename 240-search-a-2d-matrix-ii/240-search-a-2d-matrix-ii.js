/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = 0 
    let col = matrix[0].length-1
    
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true
        } else if (matrix[row][col] > target) {
            col--
        } else {
            row ++
        }
    }
    return false
};






    
    
//         if(!matrix.length) return false;
    
//     let row = 0, col = matrix[0].length-1;
    
//     while(row < matrix.length && col >= 0) {
//         if(matrix[row][col] === target) return true;
//         if(matrix[row][col] > target) col--;
//         else row++;
//     }
//     return false;