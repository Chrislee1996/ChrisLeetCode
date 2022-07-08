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
var inorderTraversal = function(root) {
//     const stack = [];
//     const res = [];
//     let pointerOne = root

//   while (pointerOne !== null || stack.length > 0) {
//     if (pointerOne !== null) {
//       stack.push(pointerOne);
//       pointerOne = pointerOne.left;
//     } else {
//       pointerOne = stack.pop();
//       res.push(pointerOne.val);
//       pointerOne = pointerOne.right;
//     }
//   }

//   return res;
    
    let result = []
    
    const traversalHelper = (node) => {
        if (node === null) {
            return
        }
        
        traversalHelper(node.left)
        result.push(node.val)
        traversalHelper(node.right)
        
        
    }
    traversalHelper(root)
    
    return result
    
};