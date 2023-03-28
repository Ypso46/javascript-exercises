const fibonacci = function(num) {
    let number = Number(num);
    let oneBefore = 1;
    let twoBefore = 0;
    let sum = 0;
    let count = 1;
    if (number < 0) {
        return "OOPS"
    } else if (number === 1 || number === 2) {
        return 1;
    } else {
        {
            while (count !== number) {
                sum = twoBefore + oneBefore;
                twoBefore = oneBefore;
                oneBefore = sum;
                ++count;
            }
            return sum;
        }
    }

};

// Do not edit below this line
module.exports = fibonacci;
