/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
 let temp = head;
    let stack = [];
    
    while (head) {
        if (head.child) {
            if (head.next) {
                stack.push(head.next);
            }
            head.next = head.child;
            head.next.prev = head;
            head.child = null;
        } else if (!head.next && stack.length > 0) { //if head.next is null but there are still nodes in stack
            head.next = stack.pop(); //head.next will point to the popped value from stack
            head.next.prev = head;
        }
        head = head.next; //so the iteration continues to the next node and then next node
    }
    return temp;
};