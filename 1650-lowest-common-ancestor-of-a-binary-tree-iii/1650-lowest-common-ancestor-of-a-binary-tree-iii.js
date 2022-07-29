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
    if(p == q) 
    return p;
    
    let pointerP = p;
    let pointerQ = q;
    
    while(pointerP != pointerQ) {
       
        pointerP = pointerP.parent;
        pointerQ = pointerQ.parent;
      
        if(pointerP == null) 
			pointerP = q;
        if(pointerQ == null) 
			pointerQ = p;
        
        if(pointerP == pointerQ) 
			return pointerP;
    }
    
};