// udemy
// overview
// 4 fundamental ppls
// oop- based on the concept of oobject
// objects may contain DataTransfer(properties) and code(method)
//we pack in to one block
//objects are blocks of code
//building blocks of application
//interactions happen by interface-public interface(api)
//class- blueprint to create objects

import { expect } from "chai";

// import { userInfo } from "os"

// //
// user{
//   user = "belay",
//   password = "dkdkd",
//   email = workinby1@gmail.com,

// }

// let houseKeeper1 = {
//   yesrsOfExperience:12,
//   name: "Jane",
//   cleaningProperties: ["bathroom", "lobby", "somthing"]
// }
// console.log(houseKeeper1.name);

// //constructor functions - functionName should be capitalized and takes a number of inputs
// function BellBoy(name, age, hasWorkPermit, languages){
//   this.name = name;
//   this.age = age;
//   this.hasWorkPermit = hasWorkPermit;
//   this.languages = languages;
// }
// //
// // let BellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
// function HouseKeeper (yesrsOfExperience, name,cleaningProperties){
//   this.yesrsOfExperience = yesrsOfExperience;
//   this.name = name;
//   this.cleaningProperties = cleaningProperties;
// }

// methods
// function moveSuitcase {
//   alert("may i take your Suitcase?");
//   pickUpSuitcase();
//   move();
// }

// call METHODS;
// bellBoy1

// user[key]= true;

// let user = {
//   name: "john",
//   age: 30
// };
// let key = prompt("what do you want to know about the user?", "name");
// //access by variable
// alert(user[key]); //John
// //dot notation  cann't be used.
// alert(user.key) //undefined

// //
// // computed properties
// // we can use square brackets '[]' in an object literal,  when creating object===> that is called computed proerties .
// let fruit = prompt("which fruit to buy?", "apple");
// let bag = {
//   [fruit]:5, //
// }
// alert(bag.apple); // 5 if fruit = "apple";
// // same as
// bag[fruit]= 5;

// //more complex expressions inside square brackets:
// let  fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']:5 //bag.appleComputers  = 5
// }

// //////In real code, we often use existing variables as values for property names.
// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let user = makeUser("John", 30);
// alert(user.name); // John

// //we can also write as:
// function makeUser(name, age){
//   return{
//     name, // same as name: name
//     age, //same as age:age
//   };
// }

//In short, there are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later).

// Other types are automatically converted to strings.

// For instance, a number 0 becomes a string "0" when used as a property key:

// let obj = {
//   0: "test" // same as "0": "test"
// };

// // both alerts access the same property (the number 0 is converted to string "0")
// alert( obj["0"] ); // test
// alert( obj[0] ); // test (same property)

//
// Property existence test, “in” operator
// A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist!

// Reading a non-existing property just returns UNDEFINED. So we can easily test whether the property exists:\
//let user = {};

// alert( user.noSuchProperty === undefined ); // true means "no such property"

// // "key" in object;
// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist

// Please note that on the left side of in there must be a property name. That’s usually a quoted string.

// If we omit quotes, that means a variable should contain the actual name to be tested. For instance:

// let user = { age: 30 };

// let key = "age";
// alert( key in user ); // true, property "age" exists

// It’s when an object property exists, but stores undefined:

// let obj = {
//   test: undefined
// };

// alert( obj.test ); // it's undefined, so - no such property?

// alert( "test" in obj ); // true, the property does exist!

// // the "for .. in" loop
// To walk over all keys of an object, there exists a special form of the loop: for ..in. This is a completely different thing from the for(;;) construct that we studied before.
// //
// //syntax
// for(key in object){
//   //excutes the body for each key among object properties
// }

// // for instance , let's output all properties of user:

// let user= {
//   name: "john",
//   age : 30,
//   isAdmin: true
// }

// for (let key in user){
//   //keys
//   alert(key);  // name, age, isAdmin,
//   //values for the keys
//   alert(user[key]); // John, 30, true
// }

// Ordered like an object
// Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? Can we rely on this?

// The short answer is: “ordered in a special fashion”: integer properties are sorted, others appear in creation order. The details follow.

// As an example, let’s consider an object with the phone codes:

// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   // ..,
//   "1": "USA"
// };

// for (let code in codes) {
//   alert(code); // 1, 41, 44, 49
// }

// sourceMapsEnabled, to fix issues with the integer order , we can "cheat" by makingvte codes non-SVGAnimatedInteger. Adding a plus "+" sign before each code is enough.

// // like this:
// let codes  = {
//   "+49": "Germany",
//   "+41": "Swizerland",
//   "+44": "Great Britain",
//   "+1": "USA"
// }
// for( let code in codes){
//   alert(codes[+code])// 49, 41, 44, 1
//   alert(+code) // 49, 41,44 ,1
// }

// Tasks

// write the code , one line for each action:

// Write the code, one line for each action:

// // Create an empty object user.

// user = {}
// // Add the property name with the value John.

// user.name = "John";

// // Add the property surname with the value Smith.
// user.username = "Smith";
// // Change the value of the name to Pete.
// user.name = "pete"
// // Remove the property name from the object.
// delete user.name;

// let salaries = {
//   john: 100,
//   Ann: 160,
//   pete: 130
// }
// let sum = 0
// for (salary in salaries){
// sum = sum+ salaries[salary];
// }
// alert(sum)

// Multiply numeric property values by 2
// importance: 3
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

// Open a sandbox with tests.

// solution
// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
// }

// let myObj = {
//  user1: {
// fname : 'john',
// lname : 'doe'
//  },
//  user2: {
// fname : 'john',
// lname : 'doe'
//  },
//  equals: function() {
//  return this.user1 === this.user2;
//  }
// }
// console.log((myObj.equals()));
// //ans false

// // 3. [2] Fill in the blank for the output of the following code.
// let anotherObject = {color: 'green'};
// let color='red';
// let myObject={
// anotherObject :{color: 'blue'},
// printColor:function(){
// console.log((this.anotherObject.color));
// }
// }
// myObject.printColor();// ans blue

// // 4. [5] Write a JavaScript function "checkExam" that returns the grade number. The
// // function receives two arguments, two arrays:
// // - The first input array contains the correct answers to an exam
// // - The second input array is "answers" array and contains student's answers.
// // - Return the grade number for the array of answers, giving +4 for each correct
// // answer,-1 for each incorrect answer
// // -If the score < 0, return 0.
// // Example:
// // checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) →6
// // checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) →7
// // checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) →16
// // checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) →0

// //ans
// function checkExam(correctAns , studentAns){

//   let score = 0;
//   for(i=0; i<correctAns.length; i++){
//     if(correctAns===studentAns){
//       score = score + 4;
//     }else if(studentAns !=="" && studentAns !==correctAns){
//       score = score-1;
//     }
//   }
//   return Math.max(0, score)
// }

// // 5. [5] Write a function ‘thisProgramIsTheBest’ which takes 3 parameters. First two
// // parameters are objects that have property ‘age and the last one is a function, “cbFun”. If
// // the age properties are equal, then return “Same Age!”, otherwise call the cbFun function
// // with the input parameters as arguments, and then return “Different Ages”.

// // 6. [6] a. Write a function, positive, that filter will use to return an array containing only
// // positive numbers. For example, in the code below returnVal should be [10, 20, 30].
// // Also, fill in the blank for what the second log will show as the value of the array:
// // let array = [-10, 10, 20, -20, -10, 30]
// // let returnVal= array.filter(positive);
// // console.log(returnVal); __________________
// // console.log(array);
// function positive(array){

//   let posNum = [];
//   for(let arr of array){
//     if(arr>=0){
//       posNum.push(arr);
//     }
//   }
//   return posNum;
// }
// console.log(positive([-10, 10, 20, -20, -10, 30]));
// console.log([-10, 10, 20, -20, -10, 30]);

// //negatives
// function negative(array) {
//   let negNum = [];
//   for (let arr of array) {
//     if (arr < 0) {
//       negNum.push(arr);
//     }
//   }
//   return negNum;
// }
// console.log(negative([-10, 10, 20, -20, -10, 30]));
// // console.log([-10, 10, 20, -20, -10, 30]);

// // 7. [4] Fill in the blanks below ?
// function haveFun(){
// let fun ={
// myFuns : []
// }
// let i =0;
// while(i<3){
// let myFunc = function(){
// console.log('Fun : ' + i);
// }
// fun.myFuns.push(myFunc);
// i++;
// }
// return fun;
// }
// let anotherFun = haveFun;
// let result = anotherFun();
// let output1 = result.myFuns[1];
// let output2 = result.myFuns[0]();
// console.log("ans1: " + anotherFun);//function haveFun(){...}
// console.log("ans2: " + result);//[object object]
// console.log("ans3: " +  output1 ); // function(){console.log("Fin: " + i)}
// console.log("ans4: " + output2); //undefined

// // 8. [2] Fill in the blank
// function fn(a,b){
//  console.log((a+b));
// }
// function fn(a){
//  console.log((a));
// }
// fn('CS');
// function fn(){
//  console.log('Hello');
// }

// What will the alert show? ______________________

// 9. [5] Write an iterative function, sumOfSquares(n) that will compute the sum of squares of all
// integers from 1 to n. E.g., sumOfSquares(3) will compute 1 + 4 + 9 and return 14.

// function sumOfSquares(num){

//   let sqr = 0;
//   let sum  = 0 ;
//   for(let i=1; i<=num; i++){
//     sqr = i**2;
//     sum = sum+sqr
//   }
//   return sum;
// }
// console.log(sumOfSquares(4))

// //
// function listNum(num){
// let list = []
// for(i=1; i<=num;i++){
// list.push(listNum(i))
// }
// return list
// }

// function sqrNum(arr) {
//   let sqr = [];
//   for (i = 1; i <= arr; i++) {
//     sqr.push(sqrNum[i**2]);
// }return sqr
// }

// function sum (nums){
//   let sum = 0;
//   for(i=0; i<nums.length;i++){
//     sum+=nums[i]
//   }
//   return sum
// }

// /////////
// /* write a function, sumPoints, to get the total points across all players */

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];
type player {
  name: String;
  pionts:number[];
}
function sumPoints(players:player[]):number {

  let totalPoints = 0;
  for (i = 0; i < players.length; i++) {
    let subTotal = 0;

    for (let j = 0; j < players[i].points; j++) {
      subTotal += players[i].points;
    }
    totalPoints += subTotal;
  }
  return totalPoints;
}

function sumPoints(players) {
  let totalPoints = 0;

  // Loop through each player
type player{
  name: String;
  points:number[]
}
function sumPoints2(players:player[]):number{


  let totalPoints: Number=0;
  for(let player of players){

    let subTotlal = 0;
    for(let points of player.points ){
      subTotlal +=player.points
    }
    totalPoints += subTotlal
  }
  return totalPoints;
}
console.log(sumPoints2(players))


function findProps(obj:any):string[]{
  return object.keys(obj)
}
//
// console.log("expect 10: ", sumPoints(players));

/* write a function findProps to return an array of all the properties in any given object */
// console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3}));

// function findProps(obj) {
//   return Object.keys(obj);
// }

function sliceStr(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr = str.slice(i, str.length - 1);
    console.log(newStr.trim());
  }
}
console
  .log(sliceStr("Slice is cool!"))

  [
    ////
    (1, 5, 16, 3, 108)
  ].forEach(isEven);

// use slice and splice to implement the replaceInterior function
const arr = [1, 2, 3, 4, 5];
const result = replaceInterior(arr, 999);
console.log("expect [1, 999, 5]: ", result);
const result2 = replaceInterior(arr, 1234);
console.log("expect [1, 1234, 5]: ", result2);
console.log("expect [1, 2, 3, 4, 5]: ", arr);

function replaceInterior(arr: number, num: number): number[] {
  const newArr = [...arr];
  // constneArr = arr.slice()
  newArr.splice(1, arr.length - 2, num);
  return newArr;
}

///////Exercise

const numbers = [1, 5, 18, 2, 77, 108];
// ➢ use filter, find, and findIndex to find
// ➢ all the even numbers
// ➢ the first even number
// ➢ the index of the first even number

// console.log("expect[18,2,108]:", numbers.find(num % 2 === 0));

// console.log("expect 18:", numbers.filter(num % 2 === 0));

// console.log("expect 2:", numbers.indexOf(num % 2 === 0));


//////////////////////////
// ➢ Write a function,
// myCallback( func: (num: number)=>number , arg: number): void.
// myCallback will call func with the given arg and then log the return
// value to the console.
// ➢Test myCallback by calling it with a function that takes a number and returns the cube of the
// argument. First write it as "cube" a normal named function declaration, then as an anonymous
// function expression.
// ➢Also test with a function that returns the cube if the arg is an even number, else the square.
// ➢ myCallback(cube, 10) → 100
// ➢ myCallback(cubeSquare, 10) → 100
// ➢ myCallback(cubeSquare, 9) → 81 