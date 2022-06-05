/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     s = s.split(' ')
    for (let word = 0 ; word < s.length; word++) {
        s[word] = reverse(s[word])
    } 
    
    return s.join(' ')
};

function reverse(word) {
	// 1. Split the word into an array of characters
    word = word.split('')
	
	// 2. Initialize our two pointers, left and right
    for (let left = 0, right = word.length - 1; left < right; left++, right--) {
		// 3. Swap the left and right characters with the help of a temp variable
        const temp = word[left]
        word[left] = word[right]
        word[right] = temp
		
		// 4. Increment left and decrement right to move towards the middle of the array
		// 5. Repeat the loop while left < right
		// (The above steps are implemented in the definition of the for loop)
    }

	// 6. Join the array and return it as a string
    return word.join('')
}