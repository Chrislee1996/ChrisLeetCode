/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  // First, let's sort the array. 
  // This gives us two benefits: 
  // 1. We can avoid duplicates, because skipping duplicate values in a sorted array is trivial (check if the prior value === current value)
  // 2. We can stop once we hit positive values, because no three positive values can be added to reach 0
  //
  // Finally, it's OK to sort, because we accept a quadratic runtime here,
  // and adding an O(logn) sort operation won't make that any worse
  nums.sort((a, b) => {
    return a - b
  })

  // With a sorted array, let's initialize a result array, which we'll use to hold our triplets
  const result = []

  // Now, loop through the sorted input array
  for (let i = 0; i < nums.length; i++) {

    // And if the number is greater than zero, 
    // that means the only have positive integers left in the sorted array,
    // and three positive integers will never equal 0,
    // so we're done with the input and can break.
    if (nums[i] > 0) {
      break;
    }

    // At each iteration, we want to make sure we skip duplicates,
    // so check that the prior number doesn't equal the current number.
    if (i > 0 && nums[i - 1] === nums[i]) {
      // If they're the same, skip this iteration
      continue;
    }

    // With the prior conditions satisfied, 
    // we can be certain we're looking at negative integers.
    // In which case, we want to find two integers further down the array, such that all three integers added together equals 0.
    //
    // Now we solve this with two pointers, which is how we would solve Two Sum II.
    // We use the sorted nature of the array to hone in on values that will equal zero.
    // 
    // Start the left pointer at the current index + 1, and the right pointer at the end of the array
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      // Calculate the sum
      const sum = nums[i] + nums[left] + nums[right]

      // Check if the sum is equal to 0
      // if so, push nums[i], nums[left], and nums[right] to our top level result array
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])

        // Then, increment the left pointer and the right pointer, 
        // to see if there are any additional triplets that satisfy the conditions.
        left++
        right--

        // Also make sure we increment the left pointer past any possible duplicates
        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else if (sum < 0) {
        // If the sum is less than zero, we want to see if we can increase it to hit zero. 
        // With a sorted input array, we can attempt this by incrementing the left pointer, 
        // to look at bigger numbers.
        left++
      } else {
        // Otherwise, sum is greater than zero, and we should try decreasing the sum, by decrementing the right pointer
        right--
      }
    }
  }

  return result
};