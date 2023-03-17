/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length === 1) return [nums];

    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        let remaining = nums.slice(0, i).concat(nums.slice(i + 1))
        let perms = permute(remaining);
        for (let perm of perms) {
            ans.push([nums[i], ...perm]);
        }
    }

    return ans;
};