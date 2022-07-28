/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
      let hashmap = {}
      let result =[]
      let count = p.length
      
      for (let chars of p) {
          if (!hashmap[chars]) {
              hashmap[chars] = 1
          } else {
              hashmap[chars]++
          }
      }
    
    let leftPointer = 0
    let rightPointer = 0
    while (rightPointer < s.length) {
        if (hashmap[s[rightPointer]] > 0) count--
        
        hashmap[s[rightPointer]]--
        rightPointer++
        
        if (count === 0) result.push(leftPointer)
       if (rightPointer - leftPointer === p.length) {
           if (hashmap[s[leftPointer]] >= 0) count++
           
           hashmap[s[leftPointer]]++
           leftPointer++
       }
    }

    return result
};


//at first, the window will increase its length by taking steps forward with its right end.
        // after the window length reaches p's length for the first time,
		// the window will start moving forward like a caterpillar with the left end moving first. 
//         if (right - left == p.length) {
            
//             // if the char left behind was a needed char, increase the total number of chars currently needed to form an anagram.
//             if (neededChars[s[left]] >= 0) count++;
            
//             // the lines below are the most important to understand: 
//             // every time a needed char is left behind (outside the window) as the window moves forward to search the rest of the string, 
//             // increment that char's value in the neededChars object (restore the need for that char for the window's future reference).
//             neededChars[s[left]]++;
//             left++;