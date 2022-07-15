/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []
    
    function dfsHelper(candidates, target, i,  combinations) {
        //base case
        if (target < 0) return
        
        if (target === 0 ) {
            result.push(combinations.slice())
            return
        }
        
        for (let j = i ; j < candidates.length; j++) {
            combinations.push(candidates[j])
            dfsHelper(candidates, target - candidates[j] ,j, combinations)
            combinations.pop()
        }
        
    }
    dfsHelper(candidates,target, 0, [])
    return result
};


// var combinationSum = function(candidates, target) {
//     let result = []
    
//     function dfsHelper(candidates, target, i,  combinations) {
//         //base case
//         if (target < 0) return
        
//         if (target === 0 ) {
//             result.push(combinations.slice())
//             return
//         }
        
//         for (let j = i ; j < candidates.length; j++) {
//             combinations.push(candidates[j])
//             dfsHelper(candidates, target - candidates[j] ,j, combinations)
//             combinations.pop()
//         }
        
//     }
//     dfsHelper(candidates,target, 0, [])
//     return result
// };