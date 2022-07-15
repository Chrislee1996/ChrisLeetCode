/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxIslandArea = 0
    for (let i = 0 ; i < grid.length ; i++) {
        for (let j = 0 ; j < grid[0].length ; j++) {
            maxIslandArea = Math.max(maxIslandArea, islandCounter(grid, i , j))
        }
    }
    return maxIslandArea
};

const islandCounter = (grid, row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === 0) return 0
    grid[row][col] = 0
    let up = islandCounter(grid, row , col+1)
    let down = islandCounter(grid, row , col-1)
    let left = islandCounter(grid, row -1 , col)
    let right = islandCounter(grid, row +1 , col)
    return 1 + up + down + left + right
}