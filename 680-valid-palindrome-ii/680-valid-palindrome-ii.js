/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let leftPointer = 0
    let rightPointer = s.length -1
    while (leftPointer < rightPointer) {
        if (s[leftPointer] !== s[rightPointer]) return isPalindrome(s, leftPointer + 1, rightPointer) || isPalindrome(s, leftPointer, rightPointer-1)
        leftPointer++
        rightPointer--
        
    }
    return true
};


function isPalindrome (s, leftPointer, rightPointer) {
  while (leftPointer < rightPointer) {
    if (s[leftPointer] !== s[rightPointer]) return false;
    leftPointer++;
    rightPointer--;
  }
  
  return true
}




// var validPalindrome = function(s) {
//     let low = 0, high = s.length-1;
//     while (low < high) {
//         if (s[low] !== s[high]) {
//             return isPalindrome(s, low+1, high) || isPalindrome(s, low, high-1);
//         }
//         low++, high--;
//     }
//     return true;
//     // T.C: O(N)
//     // S.C: O(1)
// };

// function isPalindrome(str, low, high) {
//     while (low < high) {
//         if (str[low] !== str[high]) return false;
//         low++, high--;
//     }
//     return true;
// }