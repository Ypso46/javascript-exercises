const removeFromArray = function(array, ...arg) {
    return array.filter(toBeDeleted => !arg.includes(toBeDeleted));
};

// Do not edit below this line
module.exports = removeFromArray;