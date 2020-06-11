/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var left = 0, right = nums.length-1;
    while (left <= right) {
        var middle = Math.floor((right + left)/2);
        if (nums[middle] == target) {
            return middle;
        }else if (nums[middle] > target) {
            right = middle-1;
        } else {
            left = middle+1;
        }
    }
    return left;
};

console.log(searchInsert([1,3,5,6], 5));
