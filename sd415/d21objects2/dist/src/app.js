// Exercise
// 13
// ➢ Create 3 objects, student1, student2, student3
// ➢ property studentId : 101, 102, 103 respectively
// ➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
// ➢ push the students into an array, quizAnswers
// ➢ write a function to compute the score for a given student
// ➢ computeStudentScore(student1, [3, 1, 2, 4]) should return 3
// ➢ second argument is array of correct answers
var student1 = {
    studentId: 101,
    quizAnswers: [1, 1, 2, 4],
};
var student2 = {
    studentId: 101,
    quizAnswers: [2, 1, 2, 2],
};
var student3 = {
    studentId: 101,
    quizAnswers: [3, 1, 3, 4],
};
console.log("expect 3: ", computeStudentScore(student1, [3, 1, 2, 4]));
function computeStudentScore(stu, quizKey) {
    //get the student answers
    var answers = stu.quizAnswers;
    //loop through the parallel arrays and count the matches and return that;
    var numCorrect = 0;
    for (var i = 0; i < answers.length; i++) {
        if (answers[i] === quizKey[i]) {
            numCorrect = numCorrect + 1;
        }
    }
    return numCorrect;
}
student2;
student3;
