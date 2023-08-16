class Solution:
    def search(self, nums: List[int], target: int) -> int:
        """
        - find mid point of list
        - check value against target
        - if lower search again with midpoint in lower half
        - if higher search again with midpoint in upper half
        """
        lower_bound = 0
        upper_bound = len(nums) - 1

        while lower_bound <= upper_bound:
            midpoint = (upper_bound + lower_bound) // 2

            if nums[midpoint] == target:
                return midpoint
            if nums[midpoint] > target:
                upper_bound = midpoint - 1
            else:
                lower_bound = midpoint + 1

        return -1