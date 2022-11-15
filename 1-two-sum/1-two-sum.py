class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # hashmap = {}
        # for i in range(len(nums)):
        #     complement = target - nums[i]
        #     if complement in hashmap:
        #         return [i, hashmap[complement]]
        #     hashmap[nums[i]] = i
        
        hashmap = {}
        for i in range(len(nums)):
            complementValue = target - nums[i]
            if complementValue in hashmap:
                return [i,hashmap[complementValue]]
            hashmap[nums[i]] = i
            