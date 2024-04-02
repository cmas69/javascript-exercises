const repeatString = function(string, count) {
    return (count < 0) ? 'ERROR' : (count == 0) ? '' : string.repeat(count);
}

// Do not edit below this line
module.exports = repeatString;
