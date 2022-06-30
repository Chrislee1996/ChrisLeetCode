/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fastPointer = head
    let slowPointer = head
    
    while(fastPointer !==null && fastPointer.next !== null) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }
    
    fastPointer = head
    slowPointer = reverse(slowPointer)
    
    while (slowPointer !== null) {
        if (slowPointer.val !== fastPointer.val) {
            return false
        }
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next
    }
    return true
};

const reverse = (head) => {
    let previousHead = null
    let current = head
    while(current !== null) {
        let next = current.next
        current.next = previousHead
        previousHead = current
        current = next
    }
    return previousHead
}

//1 2 2 1
//^ ^
//1 1 2 2 1 1
//    ^ ^
//1 2 2 2 2 1
//^ ^


//n -> 2 -> 1 -> n
//P    C    N