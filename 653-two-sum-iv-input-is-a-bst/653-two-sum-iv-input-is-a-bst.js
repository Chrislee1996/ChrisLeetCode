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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if (root === null) {
        return false
    }
    
      const set = new Map();
      const stack = [root];
      while (stack.length > 0) {
        const node = stack.pop();
        if (set.has(k - node.val)) return true;
        set.set(node.val);
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
      }
      return false;
    
    

};



//if we traverse and get null, return false
//create a new set and a stack
//we will then pop our stack
//we will then subtract that we just popped with our k value
//if that value is found within our set, we can return true
//add that popped number to our set
//continue via left and right
//if we have finished our traversal just return false

//ex- 
// stack will go 5-3-2-4
//when we reach 4, it will subtract from 9 which will return 5
//5 is found within our stack so return true