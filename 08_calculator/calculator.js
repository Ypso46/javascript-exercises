const add = function(first, second) {
    return first + second;
};

const subtract = function(first, second) {
    return first - second;
};

const sum = function(para) {
    let interSum = 0;
    for (let i = 0; i < para.length; ++i) {
        interSum += para[i];
    }
    return interSum;
};

const multiply = function(para) {
    let interSum = 1;
    for (let i = 0; i < para.length; ++i) {
        interSum *= para[i];
    }
    return interSum;
};

const power = function(first, second) {
    let interSum = 1;
    for (let i = 1; i <= second; ++i) {
        interSum *= first;
    }
    return interSum;
};

const factorial = function(fact) {
    let interSum = 1;
    if (fact === 0) {
        interSum = 1;
    }
    for (let i = 1; i <= fact; ++i) {
        interSum *= i;
    }
    return interSum;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
