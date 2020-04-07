/**
 * @param {number[]} arr
 * @return {number}
 */
const countElements = function(arr) {
  let res = 0;
  const set = new Set();
  for (const i of arr) {
    set.add(i);
  }

  for (const i of arr) {
    if (set.has(i + 1)) {
      res++;
    }
  }
  return res;
};

const nums = [1, 3, 2, 3, 5, 0];
console.log(countElements(nums));
