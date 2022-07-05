/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let currentColor = image[sr][sc]
    if (newColor === currentColor) {
        return image
    }
    
    function callDFS(image, row, col) {
        if (row >= image.length || row < 0 || col >= image[0].length || col < 0 || image[row][col] !== currentColor) {
            return
        }
        image[row][col] = newColor
        callDFS(image, row + 1, col)
        callDFS(image, row - 1, col)
        callDFS(image, row, col +1)
        callDFS(image, row, col -1)
        return image
    }
    return callDFS(image,sr,sc)
};



//     const currColor = image[sr][sc];
//     if(newColor === currColor) return image;
    
//     function callDFS(img, row, col) {
//         if(row >= img.length || row < 0 || col >= img[0].length || col < 0 || img[row][col] !== currColor) return;
//         img[row][col] = newColor;
// 		callDFS(img, row-1, col);  //up
//         callDFS(img, row+1, col);  //down
//         callDFS(img, row, col+1);  //right 
//         callDFS(img, row, col-1);  //left
//         return img;
//     }
//     return callDFS(image, sr, sc);