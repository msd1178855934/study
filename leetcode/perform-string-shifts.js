/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function(s, shift) {
  const arr = s.split('');
  for (const item of shift) {
    if (item[0] == 0) {
      for (let i = 0; i < item[1]; i++) {
        arr.push(arr.shift());
      }
    } else {
      for (let i = 0; i < item[1]; i++) {
        arr.unshift(arr.pop());
      }
    }
  }
  return arr.join('');
};

console.log(stringShift('abc', [[0,1],[1,2]]));
