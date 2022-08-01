/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    let successor = null
    
    const search = (node) => {

        if (node === null) return null
        if (p.val >= node.val) {
            search(node.right)
        } else {
            successor = node
            search(node.left)
        }

    }
    search(root)
    return successor
};



    // let successor = null;
    
//     const search = (node) => {
//         if (!node) return null;
        
//         if (p.val >= node.val) {
//             search(node.right);
//         } else {
//             successor = node;
//             search(node.left);
//         }
//     }
//     search(root);
//     return successor;