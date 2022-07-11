/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
//     let row = 0 
//     let col = matrix[0].length-1
    
//     while (row < matrix.length && col >= 0) {
//         if (matrix[row][col] === target) {
//             return true
//         } else if (matrix[row][col] > target) {
//             col--
//         } else {
//             row ++
//         }
//     }
//     return false
    
    
    for(let i = 0 ; i < matrix.length;i++) {
    let startPointer = 0
    let endPointer = matrix[0].length-1
        while(startPointer <= endPointer) {
            let middle = Math.floor((startPointer + endPointer)/ 2) 
            if (matrix[i][middle] === target) {
                return true
            } else if (matrix[i][middle] > target) {
                endPointer = middle - 1
            } else {
                startPointer = middle + 1
            }
        }
    }
    return false
};






    
    
    // for(let i = 0 ; i < matrix.length;i++) {
    // let startPointer = 0
    // let endPointer = matrix[0].length-1
    //     while(startPointer <= endPointer) {
    //         let middle = Math.floor((startPointer + endPointer)/ 2) 
    //         if (matrix[i][middle] === target) {
    //             return true
    //         } else if (matrix[i][middle] > target) {
    //             endPointer = middle - 1
    //         } else {
    //             startPointer = middle + 1
    //         }
    //     }
    // }
    // return false