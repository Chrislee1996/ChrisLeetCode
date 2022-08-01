/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if (root === null) return
    let mode = []
    let hashmap = {}
    let compareValue = -Infinity
    
    const dfs = (node) => {
        if (node === null) return
        
        if (!hashmap[node.val]) {
            hashmap[node.val] = 1
        } else {
            hashmap[node.val]++
        }
        
        if (hashmap[node.val] > compareValue) compareValue = hashmap[node.val]
        
        dfs(node.left)
        dfs(node.right)
        
    }
    
    dfs(root)
    // Object.keys(hashmap).forEach(modeValue => {if(hashmap[modeValue] == compareValue) mode.push(modeValue)});
    for (let values in hashmap) {
        if (hashmap[values] == compareValue) mode.push(values)
    }
    return mode
};