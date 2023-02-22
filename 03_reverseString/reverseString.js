const reverseString = function(string) {
    let splitString = string.split('');
    let revertArray = splitString.reverse();
    let joinArray = revertArray.join('');
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
