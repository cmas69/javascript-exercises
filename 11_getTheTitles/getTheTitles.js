const getTheTitles = function(books) {
    const titles = [];

    for(book of books) {
        if("title" in book) {
            titles.push(book.title);
        }
    }

    return titles
};

// Do not edit below this line
module.exports = getTheTitles;
