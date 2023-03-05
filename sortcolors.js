/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
[2,0,2,1,1,0] i = 0 l = 6
move 2 to back
[0,2,1,1,0,2] i = 1 l = 6
set i -= 1, l -= 1
[0,2,1,1,0,2] i = 0 l = 5
0 in front all is ok
[0,2,1,1,0,2] i = 1 l = 5
move 2 to back
[0,1,1,0,2,2] i = 2 l = 5
set i -= 1, l -= 1
[0,1,1,0,2,2] i = 1 l = 4
[0,1,1,0,2,2] i = 2 l = 4
[0,1,1,0,2,2] i = 3 l = 4
move 0 to front
[0,0,1,1,2,2] i = 3 l = 4

*/
var sortColors = function (nums) {
    let front = 0;
    let end = nums.length - 1;

    for (let i = 0; i <= end; i++) {
        //console.log("i is: ", i, "and nums is: ", nums);

        if (nums[i] === 2) {
            //console.log("swaping: ", nums[i], "and", nums[end]);
            [nums[i], nums[end]] = [nums[end], nums[i]];
            end -= 1;
            i -= 1;
        } else if (nums[i] === 0) {
            if (front < i) {
                //console.log("swaping: ", nums[i], "and", nums[front]);
                [nums[i], nums[front]] = [nums[front], nums[i]];
                i -= 1;
            }
            //console.log("i is", i,"nums[i] is:", nums[i])
            front += 1
        }

        //console.log("front is: ", front, "end is: ", end)
    }
};