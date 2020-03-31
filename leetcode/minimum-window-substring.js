/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length == 0 || t.length == 0) {
        return '';
    }

    const dictT = new Map();
    for (const c of t) {
        let count = 0;
        if (dictT.has(c)) {
            count = dictT.get(c);
        }
        count++;
        dictT.set(c, count);
    }

    const required = dictT.size;
    let l = 0, r = 0;
    let formed = 0;
    const counts = new Map();
    const ans = [-1, 0, 0];

    while (r < s.length) {
        let c = s.charAt(r);
        let count = counts.has(c) ? counts.get(c) : 0;
        counts.set(c, count + 1);

        if (dictT.has(c) && counts.get(c) == dictT.get(c)) {
            formed++;
        }

        while (l <= r && required == formed) {
            c = s.charAt(l);

            if (ans[0] == -1 || r - l + 1 < ans[0]) {
                ans[0] = r - l + 1;
                ans[1] = l;
                ans[2] = r;
            }

            counts.set(c, counts.get(c) - 1);
            if (dictT.has(c) && counts.get(c) < dictT.get(c)) {
                formed--;
            }

            l++;
        }

        r++;
    }

    return ans[0] == -1 ? '' : s.substring(ans[1], ans[2] + 1);
};

const S = "q", T = "q";
console.log(minWindow(S, T));