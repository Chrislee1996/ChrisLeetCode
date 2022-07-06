/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let currentColor = image[sr][sc]
    if (currentColor === color) {
        return image
    }  
    
    function callDFS(image, row, col) {
        if (row >= image.length || row < 0 || col >= image[0].length || col < 0 || image[row][col] !== currentColor ) {
            return
        }
        image[row][col] = color
        callDFS(image, row +1 , col)
        callDFS(image, row -1, col)
        callDFS(image, row , col +1)
        callDFS(image, row , col -1)
        return image

    }
    return callDFS(image,sr,sc)
};