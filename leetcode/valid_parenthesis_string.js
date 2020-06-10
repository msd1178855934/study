/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    var lo = 0, hi = 0;
    for (const c of s) {
        lo += c == '(' ? 1 : -1;
        hi += c != ')' ? 1 : -1;
        if (hi < 0) break;
        lo = Math.max(lo, 0);
    }
    return lo == 0;
};

console.log(checkValidString('()*()'));