/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numberSet = new Set()
    
    for (let i = 0; i < nums.length; i++) {
        if (numberSet.has(nums[i])) {
            numberSet.delete(nums[i])
        } else {
            numberSet.add(nums[i])
        }
    }
    console.log(numberSet[0])
    return Array.from(numberSet)
};

//     let hashmap = {}
    
//     for (let i=0;i<nums.length;i++ ) {
//         hashmap[nums[i]] = hashmap[nums[i]] +1 || 1
//     }
    
//     for (const value in hashmap) {
//         if (hashmap[value] === 1) {
//             return value
//         }
//     }


//this will host our table of numbers ex. {1000 : 5} - number 1000 appears 5 times
//     const hash = {}
    
//     for (const num of nums) {
//         //this creates a  count of our hash table - if a number appears, +1 will increase the number once - however, if a new number appears such as 1001 - the || 1 will now create a new count

//         hash[num] = hash[num] +1 || 1
//     }
    
//     //if our value in our ht only appears once(1) then we will return it
//     for (const value in hash) {
//         if (hash[value] === 1 ) {
//             console.log('here is our hash ', hash[value])
//             return value
//         }
//     }