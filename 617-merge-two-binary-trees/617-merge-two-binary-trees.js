/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (root1 === null || root2 === null) {
        return root1 || root2
    }
    
    const root = new TreeNode(root1.val + root2.val)
    root.left = mergeTrees(root1.left , root2.left)
    root.right = mergeTrees(root1.right, root2.right)
    return root
    
    
};


   // goal is to merge t2 to t1
    
    // if one of the node missing, return the other
//     if (t1 === null) {
//         return t2;
//     }
//     if (t2 === null) {
//         return t1;
//     }
//     // if both nodes exist, sum the values
//     t1.val += t2.val;
    
//     // do the same thing for left and right branch
//     t1.left = mergeTrees(t1.left, t2.left);
//     t1.right = mergeTrees(t1.right, t2.right);
    
//     // return the merged t1
//     return t1;