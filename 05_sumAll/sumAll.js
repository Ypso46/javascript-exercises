const sumAll = function(...arg) {
    let finalArray = [];

    for (let i = 0; i < arg.length; i++) {
        if (typeof(arg[i]) !== "number") {
            return 'ERROR'
        }
    }

    if (arg[0] > arg[1]) {
        arg.sort((a, b) => a - b);
    }

    for (let i = arg[0]; i <= arg[1]; i++) {
        if (arg[i] < 0) {
            return 'ERROR'
        } else {
            finalArray.push(i)
        }
    }

    return finalArray.reduce((acc, cur) => acc + cur);
};

// Do not edit below this line
module.exports = sumAll;
