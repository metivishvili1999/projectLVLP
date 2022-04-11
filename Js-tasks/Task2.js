var isValid = function (s) {
    let status = false;
    let balancedBrackets = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    const Arr = [];
    for (let i = 0; i < s.length; i++) {
        if (balancedBrackets[s[i]]) {
            Arr.push(balancedBrackets[s[i]]);
        } else {
            if (Arr.pop() !== s[i]) {
                return status;
            }
        }
    };
    return Arr.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));