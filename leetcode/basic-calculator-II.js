/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    if (!s) return 0;
    const stack = [];
    let num = 0;
    let sign = '+';
    for (let i = 0; i < s.length; i++) {
        if (!Number.isNaN(Number.parseInt(s.charAt(i)))) {
            num = num*10 + Number(s.charAt(i) - '0');
        }
        if((Number.isNaN(Number.parseInt(s.charAt(i))) && s.charAt(i) != ' ') || i == s.length - 1) {
            if (sign == '+') {
                stack.push(num);
            }
            if (sign == '-') {
                stack.push(-num);
            }
            if (sign == '*') {
                stack.push(Number.parseInt(stack.pop()*num));
            }
            if (sign == '/') {
                stack.push(Number.parseInt(stack.pop()/num));
            }
            sign = s.charAt(i); 
            num = 0;
        }
    }

    let result = 0;
    for (const num of stack) {
        result += num;
    }
    return Number.parseInt(result);
};

const s = "14/3*2";
console.log(calculate(s));