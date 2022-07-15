/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for (let i = 0 ; i < board.length; i++) {
        for (let j = 0 ; j < board[0].length; j++) {
            if (board[i][j] === word[0] && wordSearch(i ,j, 0)) return true
        }
    }
    return false

            function wordSearch(row , col, index){
            if (word.length === index) return true
            if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index]) return
            board[row][col] = null
                
                if (wordSearch(row + 1, col, index+1) ||
                wordSearch(row -1, col, index+1) ||
                wordSearch(row, col + 1 , index+1) ||
                wordSearch(row, col -1 , index+1)) return true
                    
                board[row][col] = word[index]
    }
};



//loop through the 2d array
//compare our board with the 0index word 
//if it matches - we can do our dfs call
//if not we can just return false


//in our dfs - check boundries
//make sure to mark if a grid is checked
//if a word matches, we can do our recur call
//reset board 