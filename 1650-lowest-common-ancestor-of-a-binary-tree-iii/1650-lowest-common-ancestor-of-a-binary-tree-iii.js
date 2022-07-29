/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    
//     let pointerP = p;
//     let pointerQ = q;

//     while(pointerP != pointerQ) {
       
//         pointerP = pointerP.parent;
//         pointerQ = pointerQ.parent;
      
//         if(pointerP == null) 
// 			pointerP = q;
//         if(pointerQ == null) 
// 			pointerQ = p;
        
//         if(pointerP == pointerQ) 
// 			return pointerP;
//     }
    
    
    let parents = new Set();
    let node = p;
    while(node !== null)
        {
            parents.add(node);
            node = node.parent;
        }
    node = q;
    while(node !== null)
        {
            if(parents.has(node))
            {
                return node;
            }
            node = node.parent;
        }
    // return node;
    
};