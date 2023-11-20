

// //You can write and run the timer code here via npm run app 

// //
// // setTimeout(() =>{
// //   console.log(("Hello"))
// // }, 100)

// // setTimeout(logHello, 100)
// // const logHello = () => {
// //   console.log("Hello");
// // };

// // console.log("1");
// // setTimeout(()=>{
// //   console.log("2")
// // }, 100)
// // console.log("3")
// lone

// //Spread operator (ES6)
// // ➢The same … notation can be used to unpack iterable elements (array, string, object)
// let a, b, c, d, e;
// a = [1,2,3];
// b = 500
// c = [42, 142];
// // Using the concat method.
// d = a.concat(b, c); // [1, 2, 3, 500, 42, 142]
// // Using the spread operator.
// e = [...a, b, ...c]; // [1, 2, 3, 500, 42, 142]
// const copyOfA = [...a] //[1, 2, 3]
// let str = "Hello";
// console.log( [...str] ); // H,e,l,l,o



// // Spread operator 2 (ES6)
// // ➢ make a (shallow) clone of an object
// let a, b;
// a = {x:1, y:2, z:3}
// b = {...a }
// console.log(b) // {x:1, y:2, z:3}
// b.x = 100;
// console.log(a) // {x:1, y:2, z:3}
// console.log(b) // {x:100, y:2, z:3} -- clone

//The rest operator (...) in JavaScript is used to collect multiple elements into a single array. It's commonly used in destructuring assignments and function calls to handle variable numbers of arguments or elements.



/////////
// a. In a destructuring assignment:

// Destructuring assignment with rest operator
const numbers = [1, 2, 3, 4, 5];

// Using rest operator to collect remaining elements into 'rest'
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]


// b. In a function call:


// Function using rest operator to collect multiple arguments into an array

function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

// Function call with variable number of arguments
const result1 = sum(1, 2, 3, 4, 5);
console.log(result1); // Output: 15

const result2 = sum(10, 20);
console.log(result2); // Output: 30

//In both cases, the rest operator (...) helps in collecting multiple elements into a single array.