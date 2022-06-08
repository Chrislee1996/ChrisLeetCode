/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    if (head === null) {
        return null
    }
    
    let pointerOne = head
    while (pointerOne.next !== null) {
        if (pointerOne.val === pointerOne.next.val) {
            pointerOne.next = pointerOne.next.next
        } else {
            pointerOne = pointerOne.next
        }
    }
    return head
};