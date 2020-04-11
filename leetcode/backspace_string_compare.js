/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
  const a = [];
  const b = [];

  for (const c of S) {
    if (c == '#') {
      a.pop();
    } else {
      a.push(c);
    }
  }

  for (const c of T) {
    if (c == '#') {
      b.pop();
    } else {
      b.push(c);
    }
  }

  while (a.length > 0) {
    if (a.pop() != b.pop()) return false;
  }

  return true;
};

const S = 'a#c'; const T = 'b';
console.log(backspaceCompare(S, T));
