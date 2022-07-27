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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let queue = [root], result, qLength,node
    while(queue.length) {
        qLength = queue.length, result = 0
        for (let i = 0 ; i < qLength ; i++) {
            node = queue.shift(), result += node.val
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return result
};

//use BFS to traverse
// need to create a q with our root values
// create variables for our function (result, q.length, current nodes)
//iterate our queue
//shift/remove the node from our queue lvl and add the current value
//check if the queue has a left or right child
//if it does, push it to queue 
//return the result



//     let q = [root], ans, qlen, curr
//     while (q.length) {
//         qlen = q.length, ans = 0
//         for (let i = 0; i < qlen; i++) {
//             curr = q.shift(), ans += curr.val
//             if (curr.left) q.push(curr.left)
//             if (curr.right) q.push(curr.right)
//         }
//     }
//     return ans
// };