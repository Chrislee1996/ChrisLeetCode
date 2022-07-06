/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxIsland = 0
    for (let i = 0 ; i < grid.length ;i++) {
        for (let j = 0 ; j < grid[0].length; j++) {
            maxIsland = Math.max(maxIsland, islandCounter(grid, i , j))
        }
    }
    return maxIsland 
};

function islandCounter(grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) {
        return 0
    }
    grid[row][col] = 0
    let up = islandCounter(grid, row +1,col)
    let down = islandCounter(grid, row -1,col)
    let right = islandCounter(grid, row,col +1)
    let left = islandCounter(grid, row,col -1)

    return 1 + up + down + right + left
}


//  var maxScore = 0
//     for (var r = 0; r < grid.length; r++){
//         for (var c = 0; c < grid[0].length; c++){
//             maxScore = Math.max(maxScore, DFS(grid,r,c))
//         }
//     }
//     return maxScore
// };

// function DFS(grid, row, col){
    
//     if (row >= grid.length || col >= grid[0].length || col < 0 || row < 0 || grid[row][col] != 1) return 0

//     grid[row][col] = 2;
    
//     var up = DFS(grid, row + 1, col)
//     var down = DFS(grid, row - 1, col)
//     var right = DFS(grid, row, col + 1)
//     var left = DFS(grid, row, col - 1)
    
//     return 1 + up + down + left + right