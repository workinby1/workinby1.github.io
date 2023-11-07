"use strict";
/*
o	createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library,
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
o	findTitles, which will find all the book titles in libraryBooks and return them in an alphabetically ordered array.
o	findAuthors, which will find all the authors in libraryBooks and return them in an alphabetically ordered array.
o	findIDs, which will find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.scramble = exports.createBook = exports.findIDs = exports.findAuthors = exports.addBook = exports.findTitles = exports.showTitles = exports.library = void 0;
exports.library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {
    /* this function is complete, no need to modify.  Inspect it as an example for the other functions. */
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */
    var titles = findTitles();
    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();
    var titleString = titles.join("\n");
    var textArea = document.getElementById("displayArea");
    if (textArea) {
        textArea.innerHTML = titleString;
    }
}
exports.showTitles = showTitles;
/**
 *
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    //fix this to work according to the specs
    var titles = ["This is a test title", "Another test title", "And another test title for good measure"];
    return titles;
}
exports.findTitles = findTitles;
/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook() {
    console.log("finish the implementation -- get the author, create a book object, and add to the library array!!");
}
exports.addBook = addBook;
/**
 *
 * @returns {string[]} find all  authors in libraryBooks and return them in alphabetically ordered array.
 */
function findAuthors() {
    //implement this
}
exports.findAuthors = findAuthors;
/**
 *
 * @returns {number[]} find all the libraryIDs in libraryBooks and return them in an alphabetically ordered array.
*/
function findIDs() {
    //implement this
}
exports.findIDs = findIDs;
/**
 * @returns {book} new book object
 * createBook, which will take title, author, and libraryID as inputs.  It will create a new book object and add it to the library,
which will be represented as a global array named libraryBooks.  createBook should return the newly created book.
 */
function createBook(title, author, libraryID) {
    //implement this
}
exports.createBook = createBook;
/**
 *
 * @returns {undefined}
 */
function scramble() {
    console.log("implement scramble if you have time ...");
}
exports.scramble = scramble;
