/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a-b)
    
    let boats = 0
    let leftPointer = 0
    let rightPointer = people.length-1
    while (leftPointer <= rightPointer) {
        if (people[leftPointer] + people[rightPointer] <= limit) {
            leftPointer++
            rightPointer--
            boats++
        } else {
            rightPointer--
            boats++
        } 
    }
    return boats
};