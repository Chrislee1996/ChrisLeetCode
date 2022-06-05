/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

        
    let leftPointer = 0
    let rightPointer = numbers.length-1
    
    let result = []
    
    while (leftPointer < rightPointer) {
        if (numbers[leftPointer] + numbers[rightPointer] === target) {
            result.push(leftPointer + 1) 
            result.push(rightPointer + 1)
            break
        } else if (numbers[leftPointer] + numbers[rightPointer] > target) {
            rightPointer--
        } else {
            leftPointer++
        }
    }
    return result
    
    
};



//2 pointers
//1 pointer at index 0
//1 pointer at index 1
//give our pairsum to equal numbers[i] - target
