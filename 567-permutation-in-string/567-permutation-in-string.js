/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hashmap = {}
    let pointerLeft = 0
    let pointerRight = 0
    let requiredLength = s1.length
    
    if (s1.length > s2.length) {
        return false
    }
    
    // for (let i = 0 ; i < s1.length; i++) {
    //     let char = s1[i]
    //     if (!hashmap[char]) {
    //         hashmap[char] = 0
    //     } else {
    //         hashmap[char]++
    //     }
    // }
    
    	for (let i = 0; i < s1.length; i++) {
		// Initially neededChar[s1[i]] will be undefined and
		// undefined || 0 will return 0. So we increment it by 1
		hashmap[s1[i]] = (hashmap[s1[i]] || 0) + 1;
	}
    
    while (pointerRight < s2.length) {
        if (hashmap[s2[pointerRight]] > 0) {
            requiredLength--
        }
        hashmap[s2[pointerRight]]--
        pointerRight++
        
        if (requiredLength === 0) {
            return true
        }
        
        if (pointerRight - pointerLeft ===s1.length) {
            if (hashmap[s2[pointerLeft]] >= 0 ) {
                requiredLength++
            }
            hashmap[s2[pointerLeft]]++
            pointerLeft++
        }
    }
    
    return false
};