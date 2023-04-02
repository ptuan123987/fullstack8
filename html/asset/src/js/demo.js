/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let valid = []
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']',

    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (obj[char]) {
            valid.push(char)
        } else {
            let pop = valid.pop()
            if (char !== obj[pop]) {
                return false
            }
        }


    }
    return valid.length > 0 ? false : true
};
console.log(isValid(['(', ')']))