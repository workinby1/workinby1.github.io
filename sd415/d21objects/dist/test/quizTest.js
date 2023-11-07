"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
var chai_1 = require("chai");
var quiz_js_1 = require("../src/quiz.js"); //import all of the app.js functions used in the Mocha tests
describe("quiz tests", function () {
    var student1 = {
        studentId: 101,
        quizAnswers: [1, 1, 2, 4]
    };
    var student2 = {
        studentId: 102,
        quizAnswers: [2, 1, 2, 2]
    };
    var student3 = {
        studentId: 103,
        quizAnswers: [3, 1, 3, 4]
    };
    var CORRECT_ANSWERS = [3, 1, 2, 4];
    var studentQuizzes = [student1, student2, student3];
    it("gradeStudent -- grade for 1 student", function () {
        chai_1.assert.deepEqual((0, quiz_js_1.gradeStudent)(student1.quizAnswers, CORRECT_ANSWERS), 3);
    });
    it("gradeQuiz -- grade for all students", function () {
        chai_1.assert.deepEqual((0, quiz_js_1.gradeQuiz)(studentQuizzes, CORRECT_ANSWERS), [3, 2, 3]);
    });
    it("gradeQuizLabeled -- labeled objects grades for all students", function () {
        chai_1.assert.deepEqual((0, quiz_js_1.gradeQuizLabeled)(studentQuizzes, CORRECT_ANSWERS), [
            { id: 101, score: 3 },
            { id: 102, score: 2 },
            { id: 103, score: 3 }
        ]);
    });
});
