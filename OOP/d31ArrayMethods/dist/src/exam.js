//4. Implement the firstLast function.  Use the appropriate array method in your function.
//  const names = ["Fred Smith", "Carl Lindstrom"];
// import { type } from "os";
//  it("firstLast", function () {
//    const names = ["Fred Smith", "Carl Lindstrom"];
//    const output = [
//      { firstName: "Fred", lastName: "Smith" },
//      { firstName: "Carl", lastName: "Lindstrom" },
//    ];
//    assert.deepEqual(firstLast(names), output);
//  });
export function firstLast(names) {
    const resultArr = names.map((fullName) => {
        const eachName = fullName.split(" ");
        return { firstName: eachName[0], lastName: eachName[1] };
    });
    return resultArr;
}
let result = firstLast(["Fred Smith", "Carl Lindstrom"]);
console.log(result);
/////////////
//q5
//  Use slice and splice to write TypeScript code for the replaceEnds function.  replaceEnds should be a pure function.
export function replaceEnds(arr, startValue, endValue) {
    const copyArr = arr.slice();
    for (let i = 0; i < startValue.length; i++) {
        copyArr[i] = startValue[i];
    }
    for (let i = 0; i < endValue.length; i++) {
        copyArr[copyArr.length - 1 - i] = endValue[i];
    }
    copyArr.splice(0, startValue.length, ...startValue);
    copyArr.splice(copyArr.length - endValue.length, endValue.length, ...endValue);
    //       copyArr.splice(copyArr.length-1, 1, endValue)
    //       copyArr.splice(0,1,startValue);
    //       copyArr.splice(copyArr.length-1, 1, endValue)
    return copyArr;
}
// const arr = [1,2,3,4,5];
// const result = replaceEnds(arr,0,100);
// console.log("expect [0,2,3,4,100]:",result )
// const result2 = replaceEnds(arr, 100,0);
// console.log("expect [100,2,3,4,0]:",result2 );
// console.log("expect [100,2,3,4,0]:",result2 )
//first two number arguments replace the first
//first two number arguments replace the first and second elements of the array, last two number arguments replace the 
//last two elements of the array
// const arr = [5, 4, 3, 2, 1, 0];
// const result = [6, 1, 3, 2, 4]
// assert.deepEqual(replaceEnds(arr, 6, 1, 2, 4), result);
// assert.deepEqual(arr, [5, 4, 3, 2, 1, 0]); //original array is unchanged
//q6. 
//Implement functions higho, square, and cube.  
//higho takes a function and a number as arguments and returns the result of the function called on the number.
export function cube(num) {
    return num * num * num;
}
export function square(arr) {
    if (Array.isArray(arr)) {
        return arr.map(num => num * num);
    }
    else {
        return arr * arr;
    }
}
// export function square(num: number): number {
//   return num * num;
// }
export function absVal(arr) {
    if (Array.isArray(arr)) {
        return arr.map(num => Math.abs(num));
    }
    else {
        return Math.abs(arr);
    }
}
export function higho(func, num) {
    return func(num);
}
// it("tests square", function () {
//     const numArr1 = [1, -2, 3];
//     const numArr2 = [-1, 4, -10];
//     assert.deepEqual(higho(square, numArr1), [1, 4, 9]);
//     assert.deepEqual(higho(square, numArr2), [1, 16, 100]);
// });
// Implement a fitness tracking application that allows users to monitor their daily workout statistics.
// •	define types for Session and Day
// •	should work for a dailyRecord with 1 or more day objects.
const session1 = { userId: 1, duration: 60 };
const session2 = { userId: 2, duration: 45 };
const session3 = { userId: 2, duration: 30 };
const session4 = { userId: 3, duration: 15 };
const session5 = { userId: 3, duration: 75 };
const day1 = { sessions: [session1, session2], date: "01/10/2022" };
const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
const dailyRecord = [day1, day2];
// dailyRecord:Day[]
//     Utilize a for..of loop in a function, calculateDailyTotalDuration, to find the total workout duration for a given day.
export function calculateDailyTotalDuration(sessions) {
    let totalDuration = 0;
    for (const session of sessions) {
        totalDuration += session.duration;
    }
    return totalDuration;
}
let result1 = (calculateDailyTotalDuration(day1.sessions));
console.log(result1);
// // Develop a function, calculateTotalDuration, using a for..of loop, to find the total workout duration across all days in the dailyRecord array. Utilize the previously defined calculateDailyTotalDuration function.
///func2
export function calculateTotalDuration(dailyRecord) {
    let allDurations = 0;
    for (const day of dailyRecord) {
        allDurations += calculateDailyTotalDuration(day.sessions);
    }
    return allDurations;
}
console.log(calculateTotalDuration(dailyRecord));
//  //Write a function getAllSessions that will use the concat method to return an array with all  the sessions in the dailyRecord.
export function getAllSessions(dailyRecod) {
    let allSessions = [];
    // for(const day of dailyRecod){
    //   allSessions = allSessions.concat(day.sessions)
    dailyRecod.forEach(day => {
        allSessions = allSessions.concat(day.sessions);
    });
    // }
    return allSessions;
}
console.log(getAllSessions(dailyRecord));
//  //Use an appropriate array method to get all sessions for a given userid .  Hint:  use getAllSessions.  
export function getAllSessionsForUser(dailyRecord, userId) {
    let allSessions = getAllSessions(dailyRecord);
    return allSessions.filter((session) => session.userId === userId);
}
console.log(getAllSessionsForUser(dailyRecord, 2));
//   //Use an appropriate array method to get array of just duration times [60, 45, 30, 15 ,75] Hint:  use getAllSessions. 
export const getAllDurations = function (dailyRecord) {
    let allSessions = getAllSessions(dailyRecord);
    return allSessions.map(session => session.duration);
};
console.log(getAllDurations(dailyRecord));
