/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    for(let i = 0 ; i < matrix.length; i++) {
        let firstPointer = 0
        let endPointer = matrix[0].length-1
        while(firstPointer <= endPointer) {
        let middlePointer = Math.floor((firstPointer + endPointer)/2) 
        if (matrix[i][middlePointer] === target) {
            return true
        } else if (matrix[i][middlePointer] < target) {
            firstPointer = middlePointer + 1
        } else {
            endPointer = middlePointer - 1
            }
        }
    }
        return false
}; 






    
    
