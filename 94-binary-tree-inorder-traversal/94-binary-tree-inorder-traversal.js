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
    const stack = [];
    const res = [];
    let pointerOne = root

  while (pointerOne !== null || stack.length > 0) {
    if (pointerOne) {
      stack.push(pointerOne);
      pointerOne = pointerOne.left;
    } else {
      pointerOne = stack.pop();
      res.push(pointerOne.val);
      pointerOne = pointerOne.right;
    }
  }

  return res;
//     const helperFunc = (node) =>{
//         if (!node) return;
//         helperFunc(node.left)
//         stack.push(node.val)
//         helperFunc(node.right)
//     }

//     helperFunc(root)
//     return stack
};