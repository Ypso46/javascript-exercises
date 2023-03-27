const palindromes = function (input) {

    let withOutPunct = input.replace(/[!,. ]/g,'');
    console.log("punct = " + withOutPunct);

    let toLower = withOutPunct.toLowerCase();
    console.log("lower = " + toLower)

    let splitString = toLower.split('');
    console.log("split = " + splitString);

    let reverseString = splitString.reverse();
    console.log("reverse = " + reverseString);

    let finalString = reverseString.join('');
    console.log("final = " + finalString);

    if (finalString === toLower) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
