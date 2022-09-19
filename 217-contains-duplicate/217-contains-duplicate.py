class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        counter = {}
        for num in nums:
            if num not in counter:
                counter[num] = 0
            counter[num] += 1
        for num, freq in counter.items():
            if freq > 1:
                return True
        return False
        
        
        
        
        
        
