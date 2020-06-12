/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var lo = 0, hi = nums.length-1;
    for (let i = 0; i <= hi; i++) {
        while(nums[i] == 2 && i < hi) {
            swap(nums, i, hi--);
        }
        while(nums[i] == 0 && i > lo) {
            swap(nums, i, lo++);
        }
    }
};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

var nums = [2,0,2,1,1,0];
sortColors(nums);
console.log(nums);
