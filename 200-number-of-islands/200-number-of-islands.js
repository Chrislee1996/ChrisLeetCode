/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0 ) {
        return 0
    }
    
    let numberOfIslands = 0
    for (let i = 0 ; i < grid.length ; i++) {
        for (let j = 0 ; j < grid[0].length ; j++) {
            if (grid[i][j] === '1') {
                numberOfIslands += islandCounter(grid,i,j)
            }
        }
    }
    return numberOfIslands
};

const islandCounter = (grid, row, col) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') return
    grid[row][col] = '0'
    islandCounter(grid, row +1 , col)
    islandCounter(grid, row -1, col)
    islandCounter(grid, row , col + 1)
    islandCounter(grid, row , col - 1)
    return 1
}