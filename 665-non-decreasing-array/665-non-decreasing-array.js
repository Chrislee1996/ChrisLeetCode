/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
      let elemToModify = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1]) {
            if (nums[i-1] > nums[i+1]) {
                nums[i+1] = nums[i];
            }
            elemToModify++;
        }
        if (elemToModify > 1) return false;
    }     
    return true;
};