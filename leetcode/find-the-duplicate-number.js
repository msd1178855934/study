/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return nums[i];
        }
        set.add(nums[i]);
    }
    return -1;
};

const nums = [1,3,4,2,2];
console.log(findDuplicate(nums));