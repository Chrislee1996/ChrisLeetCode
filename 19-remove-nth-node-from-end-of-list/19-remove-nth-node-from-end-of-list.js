/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyNode = new ListNode(0, head)
    let slowPointer = dummyNode
    let fastPointer = head
    
    while(n > 0) {
        fastPointer = fastPointer.next
        n--
    }
    
    while(fastPointer !== null) {
        fastPointer = fastPointer.next
        slowPointer = slowPointer.next
    }
    
    slowPointer.next = slowPointer.next.next
    
    return dummyNode.next
};