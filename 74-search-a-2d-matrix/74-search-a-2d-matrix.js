/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

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





//     for(let i = 0; i < matrix.length; i++) {
//         let start = 0, end = matrix[0].length - 1

//         while(start <= end) {
//             let mid = Math.floor((start + end) / 2)
//             if(matrix[i][mid] === target) return true
            
//             if(matrix[i][mid] > target) end = mid - 1
//             else start = mid + 1
//         }
//     }
//     return false