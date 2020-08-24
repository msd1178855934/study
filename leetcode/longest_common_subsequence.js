/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var dp = [];
    for (let i = 0; i < text1.length + 1; i++) {
        dp.push(new Array(text2.length + 1).fill(0));
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    return dp[dp.length-1][dp[0].length-1];
};

console.log(longestCommonSubsequence('abcde', 'ace'));
