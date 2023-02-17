/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let token of tokens) {
        if (isDigit(token)) {
            stack.push(parseInt(token));
        } else {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(calc(a,b,token))
        }
    }

    return stack[0];
};

function isDigit(str) {
    return Number.isInteger(parseInt(str));
}

function calc(a,b,operator) {
    switch (operator) {
        case '*': return a*b;
        break;
        case '/': 
        ans = a/b;
        return ans - ans % 1;
        break;
        case '+': return a+b;
        break;
        case '-': return a-b;
        break;
    }
}