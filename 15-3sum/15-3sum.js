/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  nums.sort((a, b) => {
    return a - b
  })

  const result = []

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i - 1] === nums[i]) {
      // If they're the same, skip this iteration
      continue;
    }

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]


      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]])


        left++
        right--

        while (left < right && nums[left] === nums[left - 1]) {
          left++
        }
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }

  return result
};