/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a- b)
    let result = []
    
    function dfsHelper(candidates, target, idx, combinations) {
        if (target < 0) return
        if (target === 0 ) {
            result.push(combinations.slice())
            return
        }
        
        for (let j = idx ; j < candidates.length ; j++) {
            if (idx !== j && candidates[j] === candidates[j-1]) continue
            combinations.push(candidates[j])
            dfsHelper(candidates, target - candidates[j] , j+1, combinations)
            combinations.pop()
        }
        
    }
    
    dfsHelper(candidates, target, 0, [])
    return result
};