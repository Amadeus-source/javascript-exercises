const fibonacci = function(input) {
    // checks argument's type and makes sure we use 
    // a number throughout rest of function.
    let count
    if (typeof input !== 'number') {
        count = parseInt(input)
    } else {
        count = input
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
