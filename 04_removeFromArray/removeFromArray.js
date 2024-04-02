const removeFromArray = function(array, ...args) {
    console.log(array);
    console.log(args);

    if(args.length == 0) {
        return array;
    }

    let value = args.shift();

    console.log(`value: ${value}, remaining args: ${args}`);

    return removeFromArray(array.filter((v, i, a) => {
        return v !== value;
    }), ...args);
};


// Do not edit below this line
module.exports = removeFromArray;
