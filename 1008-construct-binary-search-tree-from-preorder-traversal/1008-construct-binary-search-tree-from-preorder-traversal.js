/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    
    function dfsHelper(lower, upper) {
        if (preorder[0] < lower || preorder[0] > upper) return null
        if (preorder.length == 0) return null;
        let root = new TreeNode(preorder.shift())
        root.left = dfsHelper(lower, root.val)
        root.right = dfsHelper(root.val, upper)    
        return root
    }
        return dfsHelper(-Infinity, Infinity)
};


//BST => left is always lower than the parent root and right is greater than parent root
    //need to check/confirm if this is valid per bst properties and if at any time it is not, we can return
// we will have to remove the first instances of our preorder
//if the length is 0 we can return 
//recursively call the left side of the BST due to this being a preorder traversal 
//recursively callour left and right side - per the left we need to pass in the lower value and the root value (again due to left side being lower than the parent)
//vice versa for right, we need to pass the root.val and the upper value as the root.val will need to be LOWER
//return root
//we can easily check/pass in infinity for the lower/higher checker

