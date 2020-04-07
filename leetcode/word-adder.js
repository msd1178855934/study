/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function(beginWord, endWord, wordList) {
  const L = beginWord.length;
  const map = new Map();

  wordList.forEach((word) => {
    for (let i = 0; i < L; i++) {
      const key = word.substring(0, i) + '*' + word.substring(i + 1, L);
      const transformation = map.has(key) ? map.get(key) : [];
      transformation.push(word);
      map.set(key, transformation);
    }
  });

  const queue = [];
  queue.unshift({[beginWord]: 1});

  const visited = new Map();
  visited.set([beginWord], true);

  while (queue.length > 0) {
    const node = queue.pop();
    const word = Object.keys(node)[0];
    const level = Object.values(node)[0];
    for (let i = 0; i < L; i++) {
      const key = word.substring(0, i) + '*' + word.substring(i + 1, L);
      for (const adjacentWord of (map.has(key) ? map.get(key) : [])) {
        if (adjacentWord == endWord) return level + 1;
        if (!visited.has(adjacentWord)) {
          visited.set(adjacentWord, true);
          queue.unshift({[adjacentWord]: level + 1});
        }
      }
    }
  }

  return 0;
};

const beginWord = 'hit';
const endWord = 'cog';
const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
console.log(ladderLength(beginWord, endWord, wordList));
