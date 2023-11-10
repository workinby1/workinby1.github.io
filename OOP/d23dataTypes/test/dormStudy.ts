

//arrays and functions are objects
//null is not object, though it considered as object in js.


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

let people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

people.forEach(function(person) {
  person.age += 1;
});

console.log(people);
// Output: [{ name: 'Alice', age: 31 }, { name: 'Bob', age: 26 }, { name: 'Charlie', age: 36 }]
// These examples demonstrate different use cases for the forEach method in JavaScript. Depending on your specific scenario, you can adapt and modify the callback function to suit your needs.


let arr1 = [1,5,16,3,108]
let newArr:any = [];
arr1.forEach(function(item){
  if(item%2===0){
newArr.push(item)
  }
  return newArr;
})

console.log(newArr)
///



const arr = [1, 2, 3, 4, 5];
const result = replaceInterior(arr, 999);
console.log("expect [1, 999, 5]: ", result);
const result2 = replaceInterior(arr, 1234);
console.log("expect [1, 1234, 5]: ", result2);
console.log("expect [1, 2, 3, 4, 5]: ", arr);

function replaceInterior(arr:number[], num:number):number[]{
   arr.splice(1, arr.length - 2, num);
  return arr;
}console.log(replaceInterior(arr, 999));




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

function readNumber(arrOfStr:string[]){
  
  for(let i = 0; i<arrOfStr.length; i++){
  if(!isNaN(Number(arrOfStr[i]))){
    return arrOfStr[i]
  }
}
return null
}
console.log(readNumber(["123ab", "123.99", "12.3"]))
// • An occasional infinite loop
// • A random number from min to max (write a Mocha test with several different tests)
// Section: Strings (use the Mocha tests in dataTypeTests.js to test your implementations in VSCode)
// • Uppercase the first character
// • Check for spam
// • Truncate the text
// • Extract the money
// Section : Arrays
// • Is array copied?
// • Array operations
// • Calling in an array context
// o This one is a fine point of JavaScript. Do not worry too much about it.
// • Sum input numbers
// o If the user clicks "cancel" prompt returns null
// • A maximal subarray (use the Mocha test file dataTypeTests.js in VSCode for this exercise and the
// camelize exercise in the Array methods section)
// Section: Array methods
// • Translate border-left-width to borderLeftWidth