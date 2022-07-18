/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = []
    
    let startingRow = 0
    let startingCol = 0
    let endRow = matrix.length-1
    let endCol = matrix[0].length-1
    
    while(result.length < matrix.length * matrix[0].length) {  //matrix*matrix[0] counts the number of cells
        
        for (let col = startingCol; col <= endCol; col++) {
            result.push(matrix[startingRow][col])
        }
        
        for (let row = startingRow + 1; row <= endRow; row++) {
            result.push(matrix[row][endCol])
        }
        
        for (let col = endCol - 1; col >= startingCol; col--) {
            if (startingRow === endRow) break
            result.push(matrix[endRow][col])
        }
        
        for (let row = endRow- 1; row >= startingRow + 1; row--) {
            if (startingCol === endCol) break
            result.push(matrix[row][startingCol])
        }
        startingRow++
        startingCol++
        endRow--
        endCol--
        
    }
    return result
};



// const results = []
//     let startRow = 0, startCol = 0, endRow = matrix.length-1, endCol = matrix[0].length-1;
    
//     while(results.length < matrix.length * matrix[0].length) {
        
//         for(let col = startCol; col <= endCol; col++ ) {
//             results.push(matrix[startRow][col])
//         }
        
//         for(let row = startRow + 1; row <= endRow; row++) {
//             results.push(matrix[row][endCol])
//         }
        
//         for(let col = endCol - 1; col >= startCol; col--) {
//             if(startRow === endRow) break;
//             results.push(matrix[endRow][col])
//         }
        
//         for(let row = endRow - 1; row >= startRow + 1; row--) {
//             if(endCol === startCol) break;
//             results.push(matrix[row][startCol])
//         }
        
//         startRow++
//         startCol++
//         endRow--
//         endCol--
//     }
    
//     return results