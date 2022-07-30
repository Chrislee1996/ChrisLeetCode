/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
        function traverse(oNode, cNode) {
        if(!oNode) return;
        if(oNode === target) return cNode;
        return traverse(oNode.left, cNode.left) || traverse(oNode.right, cNode.right);
    }
    return traverse(original, cloned);
};