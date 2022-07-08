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
    let slowPointer = head
    let fastPointer = head
    
    while(fastPointer !== null && fastPointer.next !== null) {
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
    let previousNode = null
    let currentNode = head
    while (currentNode !== null) {
        const next = currentNode.next
        currentNode.next = previousNode
        previousNode = currentNode
        currentNode = next
    }
    return previousNode
}


// [1,2,2] 
//  F
// [1,2]
//  S


//      2   ->   1    -> null

// null <-   2 <- 1   -> null
//                P   C         N   

//      1   ->   2    -> null