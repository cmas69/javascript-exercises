const sumAll = function(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number") {
        return 'ERROR'
    }

    if(num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    let next, last;

    if(num1 > num2) {
        next = num2;
        last =num1;
    }
    else {
        next = num1;
        last = num2;
    }

    let sum = 0;
    while(next <= last) {
        sum += next++;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
