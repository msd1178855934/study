/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    var n = nums.length;
    var count = [];
    var pre = [];
    nums.sort((a, b) => a - b);
    var max = 0, index = -1;
    for (let i = 0; i < n; i++) {
        count[i] = 1;
        pre[i] = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] % nums[j] == 0) {
                if (1 + count[j] > count[i]) {
                    count[i] = count[j] + 1;
                    pre[i] = j;
                }
            }
        }
        if (count[i] > max) {
            max = count[i];
            index = i;
        }
    }
    var res = [];
    while (index != -1) {
        res.push(nums[index]);
        index = pre[index];
    }
    return res;
};

console.log(largestDivisibleSubset([1, 2, 4, 8, 16]));
