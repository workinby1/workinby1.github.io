
//use this file for any code you want to try out



// Exercise
// 13
// ➢ Create 3 objects, student1, student2, student3
// ➢ property studentId : 101, 102, 103 respectively
// ➢ property quizAnswers: [1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4] respectively
// ➢ push the students into an array, quizAnswers
// ➢ write a function to compute the score for a given student
// ➢ computeStudentScore(student1, [3, 1, 2, 4]) should return 3
// ➢ second argument is array of correct answers

type student = {
  studentId: number;
  quizAnswers: number[];
};

 export const student1 = {
  studentId: 101,
  quizAnswers: [1, 1, 2, 4],
};
 export const student2 = {
  studentId: 101,
  quizAnswers: [2, 1, 2, 2],
};

 export const student3 = {
  studentId: 101,
  quizAnswers: [3, 1, 3, 4],
};


const classQuiz1 = [student1, student2, student3];
classQuiz1;
console.log("expect 3: ", computeStudentScore(student1, [3, 1, 2, 4]));
export function computeStudentScore(stu: student, quizKey: number[]): number {
  //get the student answers
  const answers = stu.quizAnswers;
  //loop through the parallel arrays and count the matches and return that;
  let numCorrect = 0
  for (let i=0; i<answers.length;i++){
    if(answers[i]===quizKey[i]){
      numCorrect = numCorrect + 1
    }
  }
  return numCorrect;
}

// student2;
console.log("expect 2: ", computeStudentScore2(student2, [3, 1, 2, 4]));
export function computeStudentScore2(stu: student, quizKey: number[]): number {
  //get the student answers
  const answers = stu.quizAnswers;
  //loop through the parallel arrays and count the matches and return that;
  let numCorrect = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === quizKey[i]) {
      numCorrect = numCorrect + 1;
    }
  }
  return numCorrect;
}
console.log("expect 3: ", computeStudentScore3(student3, [3, 1, 2, 4]));
export function computeStudentScore3(stu: student, quizKey: number[]): number {
  //get the student answers
  const answers = stu.quizAnswers;
  //loop through the parallel arrays and count the matches and return that;
  let numCorrect = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === quizKey[i]) {
      numCorrect = numCorrect + 1;
    }
  }
  return numCorrect;
}

