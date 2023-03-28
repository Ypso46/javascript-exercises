const palindromes = function (input) {

    let withOutPunct = input.replace(/[!,. ]/g,'');

    let toLower = withOutPunct.toLowerCase();

    let splitString = toLower.split('');

    let reverseString = splitString.reverse();

    let finalString = reverseString.join('');

    return finalString === toLower;
};

// Do not edit below this line
module.exports = palindromes;
