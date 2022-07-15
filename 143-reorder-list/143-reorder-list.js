/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let slowPointer = head
    let fastPointer = head
    
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }
    
    
    let previousNode = null
    let currentNode = slowPointer
    while (currentNode !== null) {
        let next = currentNode.next
         currentNode.next = previousNode
        previousNode = currentNode
        currentNode = next
    }
    
    let leftPointer = head
    let rightPointer = previousNode
    
    while (rightPointer.next !== null) {
        
        
        let tempOne = leftPointer.next
        leftPointer.next = rightPointer
        leftPointer = tempOne
        
        let tempTwo = rightPointer.next
        rightPointer.next = leftPointer
        rightPointer = tempTwo
    }
};



// [1,2,3,4,5]
//      S
//          F
    
//     1 - > 2      N <- 3 <- 4 <- 5
    // L                           R