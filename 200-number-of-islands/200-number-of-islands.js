/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid === null || grid.length === 0 ) {
        return 0
    }
    
    let numberOfIsland = 0
    
    for (let i = 0 ; i < grid.length ;i++) {
        for(let j = 0 ; j < grid[i].length; j++) {
            if (grid[i][j] === '1') {
                numberOfIsland += getIslandCount(grid, i ,j)
            }
        }
    }
    
    return numberOfIsland
};

const getIslandCount = (grid, row , col) => {
    
    if (row < 0 || row >=grid.length || col < 0 || col >=grid[0].length || grid[row][col] ==='0'  ) {
        return 0
    }
    
    grid[row][col] = '0'
    getIslandCount(grid, row+1, col)
    getIslandCount(grid, row-1, col)
    getIslandCount(grid, row, col+1)
    getIslandCount(grid, row, col-1)

    return 1
}