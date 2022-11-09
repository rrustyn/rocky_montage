const {sumToTarget} = require("./twosum");

test("returns target indexes", function() {
  expect(sumToTarget([3,3], 6)).toEqual([0,1])
  expect(sumToTarget([1,2,3], 3)).toEqual([0,1])
  expect(sumToTarget([2,4,8], 10)).toEqual([0,2])
});