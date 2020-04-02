/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const set = new Set();
  let sum; let rem;
  while (!set.has(n)) {
    set.add(n);
    sum = 0;
    while (n > 0) {
      rem = n%10;
      sum += rem*rem;
      n = Math.trunc(n/10);
    }
    if (sum == 1) {
      return true;
    } else {
      n = sum;
    }
  }
  return false;
};

console.log(isHappy(19));
