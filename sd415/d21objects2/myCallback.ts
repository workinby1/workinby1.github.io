// 11/5/2023
// Review questions for lesson 6: Objects
// Object Properties and References
// 1. In what sense is an object like a cabinet of files?
// 2. How are primitives different from objects?
// 3. Give an example of creating an object using an object literal?
// 4. Give an example of an object type declaration.
// 5. When should object types be inferred versus explicitly declared?
// 6. What does it mean that object properties can be dynamically created and deleted?
// 7. How is dynamic creation and deletion different in TypeScript from JavaScript?
// 8. What does it mean for an object to be stored and copied by reference? How does that differ
// from primitives?
// 9. Are objects always equal if they have the same properties and same values for their properties?
// Explain.
// 10. Can const variables be changed after assignment? Can const objects be changed after
// assignment?
// 11. What is garbage collection in JavaScript and what is the concept of “reachability”?
// 12. What is the mark and sweep algorithm?


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



function cube(num:number):number{
  return num*num*num;
}
// else{
//   return num*number;
// }

function myCallback(func:(num:number)=>number, arg:number):void {
  console.log(func(arg));
}
console.log("expect 1000", myCallback(cube, 10))





