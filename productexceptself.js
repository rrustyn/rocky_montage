/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //sliding window where the window is every element before nums[i] and after nums[i]
    //create two arrays of products before i and products after i
    const ans = [];
    const arrBefore = [1];
    const arrAfter = [];
    arrAfter[nums.length - 1] = 1;

    for (let i = 1; i < nums.length; i++) {
        arrBefore[i] = arrBefore[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        arrAfter[i] = arrAfter[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        ans[i] = arrBefore[i] * arrAfter[i];
    }

    return ans;
};