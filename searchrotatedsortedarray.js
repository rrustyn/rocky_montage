/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
t = 0
n = [4,5,6,7,0,1,2]

s = 0, e = 6, m = 3
n[s] = 4 n[e] = 2 n[m] = 7

check mid compared to target
7 > 0
check start compared to target
4 > 0
search right

s = 4, e = 6, m = 5
n[s] = 0 n[e] = 2 n[m] = 1

check mid compared to target
1 > 0
check start compared to target
0 !> 0
search left

s = 4, e = 4, m = 4


*/
var search = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) return mid;
        if (nums[start] === target) return start;
        if (nums[end] === target) return end;

        if (nums[start] <= nums[mid]) { //is left sorted
            if (target > nums[start] && target < nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        if (nums[end] >= nums[mid]) {
            if (target < nums[end] && target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }

    return -1;
}