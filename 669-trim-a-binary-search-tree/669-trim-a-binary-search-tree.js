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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
    if (root === null) return null
    if (root.val < low) return trimBST(root.right, low, high)
    if (root.val > high) return trimBST(root.left, low, high)
    
    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)  
    return root
};

//Since this is a BST, we know that the left side of our tree is less than the root and the right is greater than our root
//Since we also know the low and high, we can just compare the current root.val with the low and high
//IF our current root value is less than the low it is out of bounds => we can traverse to the right
    //for example, in our 2nd example, 0 < 1 so we know there is no point in checking our left side since it is less
//IF our current root value is greater than the low it is out of bounds => we can traverse to the left
    //again, if our root was 3 and the low was 4 and high was 5 we can just ignore the right and go left
// if none of these events occur, we can just traverse left/right to continue our checking
//return root
