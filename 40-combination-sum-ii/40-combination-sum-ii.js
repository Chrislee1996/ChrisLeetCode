/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = []
    
    candidates.sort((a,b) => a-b)
    
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
            if (i !== j && candidates[j] === candidates[j-1]) continue
            combinations.push(candidates[j])
            dfs(j + 1, candidates, target - candidates[j] , combinations)
            combinations.pop()
        }
    }
    
    dfs(0, candidates,target, [])
    return result
    
};