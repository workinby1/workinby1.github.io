

//arrays and functions are objects
//null is not object, though it considered as object in js.

import { CLIENT_RENEG_WINDOW } from "tls";


// let intiger = parseInt("42px")
// console.log(intiger)

// parseFloat() method parses a string argument and returns a floating point

// function circumference(r: string): number {
//  if (isNaN(parseFloat(r))) {
//  return 0;
//  }
//  return parseFloat(r) * 2.0 * Math.PI;
// }
// console.log(circumference('4.567abcdefgh'));
// // expected output: 28.695307297889173
// console.log(circumference('abcdefgh'));
// expected output: 0


// ///////////
// let num:number = 12.34;
// console.log( num.toFixed(1) ); // "12.3"
// let num1 = 12.36;
// console.log( num1.toFixed(1) ); // "12.4"
// let num2 = 12.34;
// console.log( num2.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits

// ➢ Numeric conversion using a plus + or Number() is strict. If a value is not exactly a
// number, it fails:
// console.log( +"100px" ); // NaN
// console.log(+"1234") 
// // + "1234"; //→ 1234 
// // Number("1234")// → 1234
// console.log(Number("1234"))
// // ➢ we prefer Number (or alias unary + ) to parseInt and parseFloat


// const foo = 45;
// const bar = "" + foo;
// const bar2 = "" + 108;
// const bar3 = foo.toString();
// const bar4 = 108..toString(); //need both periods after number
// const bar5 = foo + "";
// console.log(typeof foo === "number"); //true
// console.log(typeof bar === "string"); //true
// console.log(typeof bar2 === "string"); //true
// console.log(typeof bar3 === "string"); //true
// console.log(typeof bar4 === "string"); //true
// console.log(typeof bar5 === "string"); //true


// console.log(0.66667==2/3);
// console.log(0.67 == Number((2 / 3).toFixed(2)));
// console.log(0.66667 == 2 / 3);


// //////////
// function sum(a: number, b: number): number {
//  return a + b;
// }
// console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// //searching for a subString


// let str

// = 'Widget with id';
// // console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// // console.log( str.indexOf('W') ); // 0, because 'Widget' is found at the beginning
// // console.log( str.indexOf('Wi') ); // 0, because 'Widget' is found at the beginning
// // console.log( str.indexOf('with') ); // 0, because 'Widget' is found at the beginning
// // console.log( str.indexOf('i') ); // 0, because 'Widget' is found at the beginning
// // console.log( str.indexOf('get') ); // -1, not found, the search is case-sensitive
// console.log( str.lastIndexOf(" ", 10) ); // 1, "id" is found at the position 1 (..idget with id)
// // console.log(str[-1]);




let str = ["Hi","Teddy", "my", "boss", "and", "manager"];
console.log(str.splice(1,0,"Belay"));//['Hi','Belay'] //Hi Belay boss ..
console.log(str);//[Hi]
///

let str1 = ["Hi","Teddy"];
console.log(str1.slice(1,2));//['Hi','Belay']
console.log(str1);//[Hi]


//////////////////
// forEach

// Example 1: Squaring each element in an array.
// javascript

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers:number[] = [];

numbers.forEach(function(item) {
  squaredNumbers.push(item * item);
});

console.log(squaredNumbers);
// Output: [1, 4, 9, 16, 25]
// Example 2: Logging only even numbers from an array.
// javascript

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(item) {
//   if (item % 2 === 0) {
//     console.log(item);
//   }
// });

// Output: 2, 4
// Example 3: Updating the original array.
// javascript

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(item, index, array) {
//   array[index] = item * 2;
// });

// console.log(numbers);
// // Output: [2, 4, 6, 8, 10]

// // Example 4: Summing all elements in an array.
// // javascript

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach(function(item) {
//   sum += item;
// });

// console.log(sum);
// Output: 15
// Example 5: Modifying an object property for each element in an array of objects.
// javascript

// let people = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 }
// ];

// people.forEach(function(person) {
//   person.age += 1;
// });

// console.log(people);
// // Output: [{ name: 'Alice', age: 31 }, { name: 'Bob', age: 26 }, { name: 'Charlie', age: 36 }]
// // These examples demonstrate different use cases for the forEach method in JavaScript. Depending on your specific scenario, you can adapt and modify the callback function to suit your needs.


// let arr1 = [1,5,16,3,108]
// let newArr:any = [];
// arr1.forEach(function(item){
//   if(item%2===0){
// newArr.push(item)
//   }
//   return newArr;
// })

// console.log(newArr)
// ///



// const arr = [1, 2, 3, 4, 5];
// const result = replaceInterior(arr, 999);
// console.log("expect [1, 999, 5]: ", result);
// const result2 = replaceInterior(arr, 1234);
// console.log("expect [1, 1234, 5]: ", result2);
// console.log("expect [1, 2, 3, 4, 5]: ", arr);

// function replaceInterior(arr:number[], num:number):number[]{
//    arr.splice(1, arr.length - 2, num);
//   return arr;
// }console.log(replaceInterior(arr, 999));




///

// 11/8/2023
// SD415 Object Oriented and Functional Programming in JavaScript
// W2D4 Data Types: Strings and Arrays Assignment
// Complete the following tasks from The JavaScript Language book. Try to answer them before looking at
// the solutions. These are all from the Chapter: Data Types and cover the sections noted below.
// Section: Primitives
// • Can I add a string property?
//strings adding results in concatination
// Section: Numbers
// • Sum numbers from the visitor
// • Repeat until the input is a number
// o Do this in the Plunker sandbox OR implement it in VSCode and node. In the node
// implementation your readNumber function should take an array of strings as input and
// return the first element of the array that is a regular number in a string. E.g., ‘123’,
// ’12.3’ are ok, ‘123abc’ is not ok. Write a Mocha test that tests against the array [‘abc’,
// ‘123a’, ‘ab123’, ‘123.3’, ‘123’]

// exAM PRACTICE


// 11/9/23

// Practice questions for exam 2.  (from previous exam)
// These questions are in JavaScript, but of course the current exam will be TypeScipt.

// // What will appear in console when this code runs? Enter BLANK if nothing is there.
// function foo(bat) [
//   if (bat) [
//     bat = console.log("bat");  
//     return bat;
//   ]    
//   const long = console.log("short");  
//   return long;]
// console.log(foo());  /////short and undefined

// // 2. What will appear in console when this code runs? Enter BLANK if nothing is there.
// // (Assume curly brace for where you see [ and ] -- Sakai issue )
// function foo(bat) {
//   if (bat) {
//     bat = console.log("bat");  
//     }
//   const long = console.log("short");  
//   return long;
// console.log(foo(""));  /////short and undefined

// // 3. What will appear in console when this code runs? Enter BLANK if nothing is there.
// // (Assume curly brace for where you see [ and ] -- Sakai issue )
// function foo(bat) {
//   if (bat) {
//     bat = console.log("bat");  
//     return bat;
// }
//   const long = console.log("short");  
//   return long;}
// console.log(foo("false"));  //bat and undefined


// const x = 123;
// const y = 123;
// const a = [1, 2, 3];
// const b = [1, 2, 3]; 
// // explain why a === b is false and x === y is true;

// const c=[4,5,6]
// const d = c;
// d===c //is it true?yes, true same reference value



//5. What is the object before the dot rule?  As briefly and succinctly as possible explain how it relates to usage of the keyword 'this' in object methods.

//The "object before the dot" rule refers to the object on which a method is called. In JavaScript, when a method is invoked using the dot notation (e.g., object.method()), the object before the dot becomes the value of the this keyword inside the method. The this keyword allows access to the object's properties and methods within the method. It dynamically refers to the object that invokes the method, providing a way to access and manipulate its data.


// function goStop(flag, go, stop){
//     //implement this function
//     if (flag) {return go();} else {return stop();}
// }

// let gosto = goStop(100, ()=> "go!", () => "stop!"); //gosto === "go!"
//  gosto =  goStop(0, ()=> "go!", () => "stop!"); //gosto === "stop!"
//  gosto = goStop(-100, ()=> "go!", () => "stop!"); //gosto === "go!"
//  gosto =  goStop(true, ()=> "go!", () => "stop!"); //gosto === "go!"
//  gosto = goStop(false, ()=> "go!", () => "stop!"); //gosto === "stop!"
 


// 4a. [3] What will appear in console when this code runs? (Read carefully and remember what console.log(“hi”) returns.)
// function foo(bat) {
//   if (bat) {
//     bat = console.log("bat");  ________________________
//     return bat;
//   }    
//   const long = console.log("short");  ________________________
//   return long;}
// console.log(foo());  ________________________

// b.	[3] What will appear in console when this code runs?
// function foo(bat) {
//   if (bat) {
//     bat = console.log("bat");  ________________________
//     return bat;
//   }
//   const long = console.log("short");  ________________________
//   return long;}
// console.log(foo(""));  ________________________

// c.	[3] What will appear in console when this code runs?
// function foo(bat) {
//   if (bat) {
//     bat = console.log("bat");  ________________________
//     return bat;
//   }
//   const long = console.log("short");  ________________________
//   return long;}
// console.log(foo("false"));  ________________________

/////////////////


// let nums = "4123".split("");
// nums.sort(a,b)=> b-a
// console.log(nums.join(""))

// let user1 =[{x:1}, {y:6}, {z:8}]
// let user2 = {x:1, y:6, z:8}
// function foo(){
//   const arr = [];
// for(const element in user2){ arr.push(element);}
// return arr}

// }
// console.log(foo())


// use strict;
// function birthday(){
//   this.age =this.age + 1;
//   console.log(this.age)
// }
// const person = {name:"Bob", age:10, birthday:birthday}
/////////////

// 11.  Assume that you are writing a program for an application like GoFundMe.  The owners want code that will give users a picture of their donations day by day.  Assume you have the following data structure for daily donations
// */
// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 4, amount: 5 };
// const donation5 = { funderId: 5, amount: 15 };
// const day1 = {    donations: [donation1, donation2],    date: "01/10/2022",};
// const day2 = {    donations: [donation3, donation4, donation5],    date: "01/11/2022",};
// const dailyRecord = [day1, day2];



// 11a.  [3] Use a for loop in a function, dailyTotal, to find total amount donated for a given day.
// console.log("expect 21: ", dailyTotal(day2.donations));














// 11b. [3] Use reduce in a function, dailyTotalReduce, to find total amount donated for a given day.
// console.log("expect 110: ", dailyTotalReduce(day1.donations));














// 11c. [ 4] Write a function totalDonations using a for loop that will find the total donations across all days in the dailyRecord array.  HINT:  Make use of dailyTotal.
// console.log("expect 131: ", totalDonations(dailyRecord));



// function totalDonations(dailyRecord:any){
//   let total = 0;
//   for(let i=0; i<dailyRecord.length; i++){
//     let dailyTotal = 0;
//     for(let j=0; j<dailyRecord[i].donations.length; j++){
//       dailyTotal +=dailyRecord[i].donations[j].amount
//     }
//    total += dailyTotal
//   }
// return total
// }
// console.log(totalDonations(dailyRecord))

// const dailyRecord = [day1, day2];
    

//  
// 11d. [3] Write a function for the same specs as 11c but use reduce.  HINT:  Make use of dailyTotal.
// console.log("expect 131 for: ", totalDonationsReduce(dailyRecord));













// 11e. [5] Write a function, findBigDonations, that will return an array with all the dates that daily donations exceeded the maximum amount goal.  Each entry in the array should be an object that contains the date, and the total amount donated.  The second parameter for your function should be the maximum amount goal.  For the example below, the result should return the date and amounts for every donation that had an amount > 10.  In this example those are donations 1 and 2.

// console.log(`expect [{day: "01/10/2022", amount: 100 },
//       {day: "01/11/2022", amount: 15 } :  `, findBigDonations(dailyRecord, 10) );







//  
// 11f.  [5] Write a function, averageDonation, that will find the average donation for a day.
// console.log("expect 55: ", averageDonation(day1));


















//////////////
// inClass
