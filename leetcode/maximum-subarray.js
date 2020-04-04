/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let res = nums[0];
  let now = nums[0];
  for (let i = 1; i < nums.length; i++) {
    now = Math.max(now + nums[i], nums[i]);
    res = Math.max(res, now);
  }
  return res;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
