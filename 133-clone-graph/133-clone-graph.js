/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let visitedNode = {}
    
    let dfs = (node) => {
        if (!node) return node
        if (visitedNode[node.val] != null) return visitedNode[node.val]
        
        let root = new Node(node.val)
        visitedNode[node.val] = root
        
        for (let currentNode of node.neighbors) {
            root.neighbors.push(dfs(currentNode))
        }
        return root
    }
    
    return dfs(node)
    
//     let visited = {};
    
//     const dfs = (node) => {
//         if (!node) return node;
//         if (visited[node.val] != null) return visited[node.val];
        
//         let root = new Node(node.val);
//         visited[node.val] = root;

//         for (let n of node.neighbors) {
//             root.neighbors.push(dfs(n));
//         }
         
//         return root;
//     }
    
//     return dfs(node);
};



