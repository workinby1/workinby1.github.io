// /* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";

// import { quiz } from "../src/grades.js";


// describe("grades from quiz", function () {

//     it("scoreStudent 10", function () {
//         assert.strictEqual(quiz.scoreStudent(10), 1);
//     });
//     it("scoreStudent 11", function () {
//         assert.strictEqual(quiz.scoreStudent(11), 2);
//     });
//     it("scoreStudent 12", function () {
//         assert.strictEqual(quiz.scoreStudent(12), 2);
//     });
//     it("getAverage", function () {
//         assert.strictEqual(+quiz.getAverage().toFixed(3), 1.667);
//     });

// });


// // Here are some additional explanatory comments for the grades and quiz exercise in today's assignment -- i.e., the gradeTests.ts.

// // I added this as a comment to the ./src/quiz.ts file.

// // This file contains  code for a quiz object. The quiz object has a key property that contains Answer objects that
// // each have a property for the correct answer and another for an identifier of the question.  The way to calculate scores
// // for this data structure is to order the answers for a given student according to the qid property and do the same
// // for the key.  Then compare the two lists of answers (parallel arrays) and add up the number of matches.  

// // You need to implement the three methods.

// // This is a good example of using a comparator function to sort an array of objects and working with a data structure of nesed
// // arrays and objects.