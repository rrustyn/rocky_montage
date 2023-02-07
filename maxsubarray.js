/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    currSum = nums[0];
    maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) currSum = 0;
        currSum += nums[i];
        maxSum = Math.max(currSum,maxSum);
    }

    return maxSum;
};