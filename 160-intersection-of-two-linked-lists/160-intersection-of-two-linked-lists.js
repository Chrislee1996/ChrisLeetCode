/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointerA = headA
    let pointerB = headB
    while (pointerA !== pointerB) {
        pointerA = pointerA.next
        pointerB = pointerB.next
        
        if (pointerA === pointerB) {
            return pointerA
        }
        
        if (pointerA === null) {
            pointerA = headB
        }
        
        if (pointerB === null) {
            pointerB = headA
        }
    } 
    return pointerA
};


 // let a = headA, b = headB
 //    while (a !== b) {
 //        a = !a ? headB : a.next
 //        b = !b ? headA : b.next
 //    }
 //    return a