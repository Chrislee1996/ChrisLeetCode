/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
		// swap s[start] with s[end] 
		// for example ["h","e","l","l","o"]  swap `h(0)` with `o(4)` and `e(1)` with `l(3)`
        //temp is our place holder for the first letter so when we shift it to the end, we still have it as a placeholder - so when we assign the s[end] to temp, it will move the h to the end
    
    let firstPointer = 0
    let lastPointer = s.length-1
    
    while (firstPointer < lastPointer ) {
        let tempFirstLetter = s[firstPointer]
        s[firstPointer] = s[lastPointer]
        s[lastPointer] = tempFirstLetter
        firstPointer++
        lastPointer--
    }
    
    
};








//     let start = 0;
//     let end = s.length - 1;
    
//     while(start < end) {

        
        
//         const temp = s[start];
//         s[start] = s[end];
//         s[end] = temp;
        
//         start++;  // move to next index
//         end--; //move to previous index