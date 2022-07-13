/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
        let result = []
    
    // candidates.sort((a,b) => a-b)
    
    function dfs (i, candidates, target, combinations) {
        // back tracking case - 
        if (target < 0) return
        
        //base case
        if (target === 0) {
            result.push(combinations.slice())
            return
        }
        
        
        //dfs recursive call
        for (let j = i ; j < candidates.length ; j++) {
            combinations.push(candidates[j])
            dfs(j, candidates, target - candidates[j] , combinations)
            combinations.pop()
        }
    }
    
    dfs(0, candidates,target, [])
    return result
};