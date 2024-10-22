const reverseString = function(string) {
    let end = string.length;
    let result = '';
    for (let i =  end - 1; i >= 0; i--) {
        result += string[i];  
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
