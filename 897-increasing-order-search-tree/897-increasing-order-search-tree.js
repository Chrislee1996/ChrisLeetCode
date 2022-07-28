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
 * @return {TreeNode}
 */


var increasingBST = function(root) {
    if (root === null) return null
    let stack = []
    let newRoot = null
    let newTree = null
    
    while(root) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        while(stack.length > 0) {
            let node = stack.pop()
            if (!newRoot) {
                newRoot = newTree = node
            } else {
                newTree.right = node
                newTree = newTree.right
            }
            node.left = null
            if (node.right) {
                root = node.right
                break
            }
        }
    }
    return newRoot
};

//this is a in order traversal 
// we want to traverse to the left most node, then right, then right most nodes
//so we traverse all the way to the left because it is the smallest node , go back to the root which in this case is 2 -> check if there is a right 
//then we repeat 

//we can also use a stack
//for example, since this is inorder, we will have our stack as follows 5,3,2,1
//we then have a dummy node point to the first thing we pop which in this case is 1 -> then check if there is anything to the left or right
//do 2 then check the left and right if nothing, we pop
//at 3, we pop then search to the right, since there is something we search there and since there is something,  we push it to our array 
// Now at 4, since there is nothing, we can pop 5 from our stack
//now that 5 is done and our array is empty, we are done everything in our left side we check our right
//check the left most side, in this case is 6 -> push to stack
//check 6 right side -> check 8 if there is something to the left if so, push (7) - check if 7 has anything
//pop 7, go back to 8 then pop and check its right 



