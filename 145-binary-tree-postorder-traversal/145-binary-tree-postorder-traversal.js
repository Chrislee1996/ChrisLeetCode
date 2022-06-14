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
var postorderTraversal = function(root) {
    // if (!root) {
    //     return []
    // }
    // let stack = []
//     let result = [];
//     let pointerOne = root
//     stack.push(pointerOne)

//     while(stack.length) {
//         let node = stack[stack.length-1]
//         if (node.left) {
//             stack.push(node.left)
//             node.left = null
//         } else if (node.right) {
//             stack.push(node.right)
//             node.right = null
//         }
//         else result.push(stack.pop().val)
//     }
//     return result
    
    let result = []
    
    const helperFunc = (node) => {
        if (!node) return;
        helperFunc(node.left)
        helperFunc(node.right)
        result.push(node.val)
    }
    
    helperFunc(root)
    return result
    
};




    // stack.push(root);
    // while (stack.length) {
    //     let node = stack[stack.length-1];
    //     if (node.left) {
    //         stack.push(node.left);
    //         node.left = null;
    //     }
    //     else if (node.right) {
    //         stack.push(node.right);
    //         node.right = null;
    //     }
    //     else res.push(stack.pop().val);
    // }
    // return res;