class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        """
        - loop through list finding the difference between target and num
        - check if that difference has been seen yet:
            - yes: return current index and index of difference
            - no: add difference to list of seen values with current index
        """

        found = {}

        for i in range(len(nums)):
            if nums[i] in found:
                return [i, found[nums[i]]]
            else:
                found[target - nums[i]] = i