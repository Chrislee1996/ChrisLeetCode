/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    //this changes our current node to the next node
    node.val = node.next.val
    //this will change our current node pointer to the next node (basically skips the node next to it)
    node.next = node.next.next
};