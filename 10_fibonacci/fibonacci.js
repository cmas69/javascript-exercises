const GOLDEN_RATIO = 1.618034
const DIVISOR = Math.sqrt(5);

const fibonacci = function(step) {
    let actualStep = +step;

    if(actualStep < 0) { return 'OOPS'; }
    
    return Math.round((Math.pow(GOLDEN_RATIO, actualStep) - Math.pow(1 - GOLDEN_RATIO, actualStep)) / DIVISOR);
};

// Do not edit below this line
module.exports = fibonacci;
