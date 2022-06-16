/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0
    
    let leftPointer = 0
    let rightPointer = height.length-1
    
    while ( leftPointer < rightPointer) {
        let area = (rightPointer - leftPointer) * Math.min(height[leftPointer], height[rightPointer])
        result = Math.max(area,result)
        
        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++
        } else {
            rightPointer--
        }
    }
    return result
};