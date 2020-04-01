/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function(nums) {
//     nums.sort((a, b) => a - b);
//     if (nums[0] != nums[1]) return nums[0];
//     for (let i = 1; i < nums.length - 1; i++) {
//         if( nums[i] != nums[i - 1] && nums[i] != nums[i + 1]) {
//             return nums[i];
//         }
//     }
//     return nums[nums.length - 1];
// };
var singleNumber = function(nums) {
    let res = 0;
    for (const i of nums) {
        res ^= i;
    }
    return res;
};

console.log(singleNumber([2,2,1]));