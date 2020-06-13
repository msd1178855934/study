/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    var count = 0, sum = 0;
    var map = new Map();
    map.set(0, 1);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.has(sum) ? map.get(sum) : 0) + 1);
    }
    return count;
};

console.log(subarraySum([1,1,1], 2));
