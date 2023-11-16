//write any code you want to test here and run with npm run app
// import {makeArmy } from './closures.js';

// import { config } from "chai";

// import { url } from "inspector";

// const army = makeArmy();

//  army[0](); // the shooter number 0 shows 10
//   army[5](); // and number 5 also outputs 10...



// function makeCounter ():() => number{
//   let count = 0;

//   function innerFun():number{
//     count++
//   return count;
//   }
//   return innerFun;
// }
// let couter1 = makeCounter();
// let couter2 = makeCounter();

// console.log(couter1());
// console.log(couter1())
// console.log(couter2());


// let name = "John";
// function sayHi(): void{
//   console.log("Hi, "+ name)
// }
// name= "Pete"
// sayHi()


// //
// function makeWorker():()=>void{
//   const  name3 = "John";
//   return function():void{
//     console.log(name3)
//   };
// }
// let name3 = "Bel";
// name3;
// const work = makeWorker();
// work()

// let myName = "Belay";

// function printName(){
//   console.log(myName)
// }
// printName();
// myName= "yirga"
// console.log(myName)
// myName = "workin";
// console.log(myName);


// function outerFunc(outerVar:string){
//   const outer2 = "hi"
//   return function innerFunc(innerVar:string){
//     console.log("outer var: " + outerVar);
//     console.log("inner var: " + innerVar);
//     console.log(outer2)
//   }
// }
// const newFunc = outerFunc("outside");
// newFunc("inside");
// console.log(newFunc)



// function outerFunc(url:string) {
//  fetch (url).then(()=>{
//   console.log(url)
//  })
// }
// const newFunc = outerFunc("outside");
// newFunc("inner");
// // console.log(newFunc);


// //Variable scope, closure
// JavaScript is a very function-oriented language. It gives us a lot of freedom. A function can be created at any moment, passed as an argument to another function, and then called from a totally different place of code later.


//Lexical Environment

// Step 1. Variables
// In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

// The Lexical Environment object consists of two parts:

// Environment Record – an object that stores all local variables as its properties (and some other information like the value of this).
// A reference to the outer lexical environment, the one associated with the outer code.


// function f(){
//   let value = Math.random();
//   return function(){
//     console.log(value);
//   }
// }

// let arr = [f(), f(), f()]
// console.log(arr)
// // arr[0]();
// // arr[1]();
// // arr[2]();

// type Counter = {
//   up:()=>number;
//   down:()=> number;
// }

// function createCounter():Counter {
//   let count = 0;

//   const up = function() {
//     return ++count;
//   };
//   const down = function() {
//     return --count;
//   };
//   return{up, down}
// }

// let counter:Counter = createCounter();

// console.log( counter.up() ); // ?
// console.log( counter.up() ); // ?
// console.log( counter.down() ); // ?


// Function in if


// Look at the code. What will be the result of the call at the last line?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();
// solution
// The result is an error.

// The function sayHi is declared inside the if, so it only lives inside it. There is no sayHi outside.


// Sum with closures

// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4
// functionsum(a){
//   return function(b){
//     return a + b; // takes "a" from the outer lexical environment
//   };
// }

// // //Is variable visible?

// // What will be the result of this code?

// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();
// // P.S. There’s a pitfall in this task. The solution is not obvious.

// // solution
// // The result is: error.

// // Try running it:

// let x = 1;

// function func() {
//   console.log(x); // ReferenceError: Cannot access 'x' before initialization
//   let x = 2;
// }

// func();
// // In this example we can observe the peculiar difference between a “non-existing” and “uninitialized” variable.

// // As you may have read in the article Variable scope, closure, a variable starts in the “uninitialized” state from the moment when the execution enters a code block (or a function). And it stays uninitalized until the corresponding let statement.

// // In other words, a variable technically exists, but can’t be used before let.

// // The code above demonstrates it.

// function func() {
//   // the local variable x is known to the engine from the beginning of the function,
//   // but "uninitialized" (unusable) until let ("dead zone")
//   // hence the error

//   console.log(x); // ReferenceError: Cannot access 'x' before initialization

//   let x = 2;
// }

