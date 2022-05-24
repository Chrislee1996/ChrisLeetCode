/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let pointerOne = head
    let pointerTwo = head
    
    while (pointerOne !== null && pointerOne.next !== null) {
        pointerTwo = pointerTwo.next
        pointerOne = pointerOne.next.next
        
        if (pointerOne === pointerTwo) {
            return true
        }
    }
    return false
};