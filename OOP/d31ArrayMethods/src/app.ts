// //  it("firstLast", function () {
// //    const names = ["Fred Smith", "Carl Lindstrom"];
// //    const output = [
// //      { firstName: "Fred", lastName: "Smith" },
// //      { firstName: "Carl", lastName: "Lindstrom" },
// //    ];
// //    assert.deepEqual(firstLast(names), output);
// //  });

import { type } from "os";

// function firstLast() {
//   const names = ["Fred Smith", "Carl Lindstrom"];
//   const resultArr = names.map((fullName) => {
//     const eachName = fullName.split(" ");
//     return { firstName: eachName[0], lastName: eachName[1] };
//   });
//   return resultArr;
// }
// let result = firstLast();
// console.log(result);
// /////////////
// //q5
// //  Use slice and splice to write TypeScript code for the replaceEnds function.  replaceEnds should be a pure function.
// function replaceEnds(
//   arr: number[],
//   startValue: number,
//   endValue: number
// ): number[] {
//   const copyArr = arr.slice();
//   copyArr.splice(0, 1, startValue);
//   copyArr.splice(copyArr.length - 1, 1, endValue);

//   return copyArr;
// }
// const arr = [1,2,3,4,5];
// const result11= replaceEnds(arr,0,100);
// console.log("expect [0,2,3,4,100]:",result11)
// const result2 = replaceEnds(arr, 100,0);
// console.log("expect [100,2,3,4,0]:",result2 );
// console.log("expect [100,2,3,4,0]:",result2 )


// //q6.
// //Implement functions higho, square, and cube.
// //higho takes a function and a number as arguments and returns the result of the function called on the number.

// function cube(num: number): number {
//   return num * num * num;
// }
// console.log(cube(3))
// function square(num: number): number {
//   return num * num;
// }
// console.log(square(3));
// function higho(func: (num: number) => number, num: number): number {
//   return func(num);
// }
// console.log(higho(cube,3));


// // Implement a fitness tracking application that allows users to monitor their daily workout statistics.
// // •	define types for Session and Day
// // •	should work for a dailyRecord with 1 or more day objects.

// const session1 = { userId: 1, duration: 60 };
// const session2 = { userId: 2, duration: 45 };
// const session3 = { userId: 2, duration: 30 };
// const session4 = { userId: 3, duration: 15 };
// const session5 = { userId: 3, duration: 75 };
// const day1 = { sessions: [session1, session2], date: "01/10/2022" };
// const day2 = { sessions: [session3, session4, session5], date: "01/11/2022" };
// const dailyRecord = [day1, day2];

// type Session = {
//   userId: number;
//   duration: number;
// };

// type Day = {
//   sessions: Session[];
//   date: string;
// };
// // dailyRecord:Day[]

// //     Utilize a for..of loop in a function, calculateDailyTotalDuration, to find the total workout duration for a given day.

// function calculateDailyTotalDuration(sessions: Session[]): number {
//   let totalDuration = 0;
//   for (const session of sessions) {
//     totalDuration += session.duration;
//   }
//   return totalDuration;
// }

// let result1: number = calculateDailyTotalDuration(day1.sessions);
// console.log(result1);

// // // Develop a function, calculateTotalDuration, using a for..of loop, to find the total workout duration across all days in the dailyRecord array. Utilize the previously defined calculateDailyTotalDuration function.

// function calculateTotalDuration(dailyRecord: Day[]): number {
//   let allDurations = 0;
//   for (const day of dailyRecord) {
//     allDurations += calculateDailyTotalDuration(day.sessions);
//   }
//   return allDurations;
// }
// console.log(calculateTotalDuration(dailyRecord));


//
// Recall the makeCounter code:

// function makeCounter(): ()=>number { 

//   let count = 0;   

//   return function():number { count++; return count; };

// }

// // Rewrite makeCounter to that the callback function it returns can take an increment as an argument.  This will allow the caller to increase the count by a given number.  E.g., 

// const myCount = makeCounter();

// myCount(10);  // will return the count incremented by 10.

// function makeCounter(): (num:number)=>number{
//   let count = 0;
//   return function(num:number):number{
//     count += num;
//   }
// return count;
// }

function makeCounter(): (num: number) => number|string {
  let count = 0;

  return function(increment: number): number|string {
    count += increment;
    return (count + "your value rised by one");
  };
}

const myCount = makeCounter();

console.log(myCount(10));  // Output will be the count incremented by 10.
console.log(myCount(5));   // Output will be the count incremented by 5 from the previous count.


////The following objects record the season statistics for players on a basketball team.
const player1 = {jersey: 8, stats: [ {game : 1, points: 6}, {game : 2, points : 7} ] };
const player2 = {jersey: 12, stats: [ {game : 1, points: 16}, {game : 2, points : 14} ] };
const player3 = {jersey: 6, stats: [ {game : 1, points: 10}, {game : 2, points : 6} ] };
const teamStats = [player1, player2, player3];

//Write a function, findHighScores, that finds the high score in the season for each player as follows:
console.log("expect [{jersey: 8, high: 7}, {jersey: 12, high: 16}, {jersey: 6, high: 10}]: " , findHighScores(teamStats));

// Be sure to use meaningful variable names and write JSdoc comments for findHighScores and any helper functions. You can write this in VS Code and then paste your solution into Sakai.

type Stats = {
  game:number;
  points:number;
  name: string
}

type Player = {
  stats:Stats[]


}

function findHighScores (teamStats:Player[]):number{

  let playerMaxScore = 0

  teamStats.forEach(player=>{ 
     if(playerMaxScore<player.name.points){
      playerMaxScore = player.name.points
    }

  return playerMaxScore;
})
}




function sum(x: number, y: number, ...more: number[]) {
  //"more" is array of all extra passed params
  let total = x + y;
  if (more.length > 0) {
    for (const num of more) {
      total += num;
    }
  }
  console.log("Total: " + total);
  return total;
}
sum(5, 5, 5);
sum(6, 6, 6, 6, 6);

//
Exercise
// • write a function, multiplyEvens
// • can be called with any number of arguments
// • returns the product of the even arguments
// • hint: …rest parameter
multiplyEvens(1, 6, 3, 4, 17, 2) //→ 48

//
function multiplyEvens (...nums:number[]):number{
  // let prod = x*y;

  let product = 1;
for(const num of nums){
  if(num%2===0){
    product *=num  }
}
return product;


  }




