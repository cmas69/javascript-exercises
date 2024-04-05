const findTheOldest = function(peeps) {
    let winner = peeps
        .map((v, i, a) => {
            if(!("yearOfBirth" in v)) { v.yearOfBirth = 2024; }
            if(!("yearOfDeath" in v)) { v.yearOfDeath = 2024; }

            return v;
        })
        .reduce((oldest, next) => {
            let p1 = Number(oldest.yearOfDeath) - Number(oldest.yearOfBirth);
            let p2 = Number(next.yearOfDeath) - Number(next.yearOfBirth);

            return p1 > p2 ? oldest : next;
    });

    return winner;
};

// Do not edit below this line
module.exports = findTheOldest;
