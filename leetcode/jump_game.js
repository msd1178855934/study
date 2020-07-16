/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastPoint = nums.length - 1;
    for (let i = lastPoint; i >= 0; i--) {
        if (i + nums[i] >= lastPoint) lastPoint = i;
    }
    return lastPoint == 0;
};

const nums = [2,3,1,1,4];
console.log(canJump(nums));
