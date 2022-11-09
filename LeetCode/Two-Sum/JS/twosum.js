// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// sumToTarget([3,3], 6) -> [0,1]
// sumToTarget([1,2,3],3) -> [0,1]
// sumToTarget([2,5,8], 10) -> [0,2]

function sumToTarget(nums, targetSum) {
  for (let i = 0; i < nums.length; i++) {
    debugger
    for (let j = i+1; i < nums.length; j++) {
      debugger
      if (nums[i] + nums[j] === targetSum) {
        return [i,j];
      }
    }
  }
}

module.exports = {sumToTarget}