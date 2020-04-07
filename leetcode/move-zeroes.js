/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  let last = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[last] = nums[i];
      last++;
    }
  }

  for (let i = last; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// const moveZeroes = function(nums) {
//   for (let i = 0, j = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       const temp = nums[i];
//       nums[i] = nums[j];
//       nums[j++] = temp;
//     }
//   }
// };

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
