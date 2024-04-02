const palindromes = function (string) {
    const re = /[0-9A-Za-z]/;

    let arr1 = string
        .toLowerCase()
        .split("")
        .filter((v) => {
            return v.match(re) != null;
        });

    let clean = arr1.join("");
    let reversed = arr1.reverse().join("");
    
//    console.log(`clean: ${clean} == reversed: ${reversed}`);
    return clean == reversed;
};

// Do not edit below this line
module.exports = palindromes;
