/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (stones.length == 0) return -1;
    while (stones.length > 1) {
      stones.sort((a, b) => a - b);
      let diff = stones.pop() - stones.pop();
      stones.push(diff);
    }
    return stones[0];
};

console.log(lastStoneWeight([2,7,4,1,8,1]));
