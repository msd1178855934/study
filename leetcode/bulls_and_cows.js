/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var sArr = [];
    var gArr = [];
    var len = secret.length;
    var bulls = 0;
    var cows = 0;
    for (let i = 0; i < len; i++) {
        var s = secret.charAt(i);
        var g = guess.charAt(i);
        if (s == g) {
            bulls++;
        } else {
            sArr.push(s)
            gArr.push(g);
        }
    }
    sArr.forEach(e => {
        var index = gArr.indexOf(e);
        if (index > -1) {
            cows++;
            gArr[index] = -1;
        }
    })
    return `${bulls}A${cows}B`;
};

var secret = "1122", guess = "2211";
console.log(getHint(secret, guess));
