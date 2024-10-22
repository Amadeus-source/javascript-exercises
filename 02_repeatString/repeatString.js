const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR'
    }
    let repeat = 0;
    let result = '';
    while (repeat < num) {
        result += string;
        repeat++
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
