/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
//     let firstLetter = 0
//     let lastLetter = s.length-1
    
//     while (firstLetter <= lastLetter) {
//         let temp = s[firstLetter]
//         console.log(temp, 'here is the temp')
//         s[firstLetter] = s[lastLetter]
//         console.log(s[lastLetter], 'last char')
//         s[lastLetter] = temp
//         firstLetter++
//         lastLetter--
//     }
//     return s
    
    
// return s.reverse()
    
    
    
    let start = 0;
    let end = s.length - 1;
    
    while(start < end) {
		// swap s[start] with s[end] 
		// for example ["h","e","l","l","o"]  swap `h(0)` with `o(4)` and `e(1)` with `l(3)`
        //temp is our place holder for the first letter so when we shift it to the end, we still have it as a placeholder - so when we assign the s[end] to temp, it will move the h to the end
        
        
        const temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        
        start++;  // move to next index
        end--; //move to previous index
    }
    


};