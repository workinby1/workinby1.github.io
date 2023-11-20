// // recursion and stack
// // recursion when a functioncalls itself
// //example
// // pow(x,n)====== x multiplis itself n times

// //two ways to implement it
// //1. iterative thinking: the for loop:

// // function pow(x,n){
// //   let result = 1;
// //   for(let i = 0; i<n; i++){
// //     result *=x;
// //   }
// //   return result;
// // }

// //2. recursive thinking: simplfy the task and call self
// // function pow(x,n){
// //   if(n=1){ ///called the base of recursion it produces x*1= x;
// //     return x;
// //   }else{
// //     return x*pow(x,n-1)
// //   }
// // }
// //a recursion is usually shorter than an iterative one.
// // function pow(x,n){
// //   return (n==1)?x:(x*pow(x,n-1))
// // }

// //the execution conext and stack

// //one function call has exactly one excution contex associated with it

// //recusion deepth equals the maximum number of context in the stack

// //any recursion can be writen s a loop.

// //recursive traversals

// //recursive structures

// // function sumTo(n){

// //   if(n=1 )return 1
// //   let x =0;
// //   return x+sumTo(x-1) //for n>1
// // }

// // calculate facrorial

// //fibonacci number

// // Exercise
// // • Write both iterative and recursive solutions to calculate factorial of an integer.
// // factorial (0) = 1
// // factorial (n) = n * factorial (n-1) [for n>0]

// // function factorial(num:number):number{
// //   let total = 1
// //   for(let i=num; i>0; i=i-1){
// // total = total*i;
// //   }

// //   return total
// // }
// // console.log("expect 120 :" , factorial(5))
// // //
// // function fact (num:number):number{
// //   if(num===1){
// //     return 1;

// //   }else{
// //     return num*fact(num-1);
// //   }
// // }
// // console.log("expect 120 :" , fact(5))

// // function countInstances(str:string, letter:string):number{
// // if(str===''){
// //   return 0;
// // }else if(str[0]===letter){
// //   //add 1 if letter equals str[0]
// //   return 1+countInstances(str.substring(1), letter)
// // }else{
// //   return countInstances(str.substring(1), letter);
// // }
// // }
// // console.log(countInstances("Hi All", "l"))

// //recursion for web cev simplified
// //******************************* */
// // function countDown(n:number){
// //   for (let i = n; i>0; i--){
// // console.log(i)
// //   }
// //   console.log("hoorey")
// // }
// // countDown;

// // function countDownRecursive(n){
// //   if(n<=0){
// //     console.log("Hoorey")
// //     return ;
// //   }
// //   console.log(n);
// //   countDownRecursive(n-1)

// // }
// // countDownRecursive(3)
// //   countDownRecursive(2)
// //     countDownRecursive(1)
// //      countDownRecursive(0)

// // function sumRange(n, total=0){
// // if(n<=0){  //guard class of our function
// //   return total;
// // }
// // return sumRange(n-1, total +n);
// // }
// // sumRange(3,0);
// //  sumRange(2,3)
// //    sumRange(1,5)
// //     sumRange(0, 6)

// // function printChildren(t){
// //   if(t.children.length ===0){
// //     return;
// //   }
// //   t.children.forEach(child =>{
// //     console.log(child.name)
// //     printChildren(child)
// //   })
// // }

// // let company = {
// //   sales: [
// //     {
// //       name: "John",
// //       salary: 1000,
// //     },
// //     {
// //       name: "Alice",
// //       salary: 1600,
// //     },
// //   ],

// //   development: {
// //     sites: [
// //       {
// //         name: "Peter",
// //         salary: 2000,
// //       },
// //       {
// //         name: "Alex",
// //         salary: 1800,
// //       },
// //     ],

// //     internals: [
// //       {
// //         name: "Jack",
// //         salary: 1300,
// //       },
// //     ],
// //   },
// // };

// // function sumSalaries(department) {
// //   if (Array.isArray(department)) {
// //     // Base case: if it's an array of employees, sum their salaries
// //     return department.reduce((total, employee) => total + employee.salary, 0);
// //   } else {
// //     // Recursive case: if it's a department object with sub-departments
// //     let totalSalary = 0;
// //     for (const subDepartment of Object.values(department)) {
// //       totalSalary += sumSalaries(subDepartment); // Recursively calculate salaries of sub-departments
// //     }
// //     return totalSalary;
// //   }
// // }

// // sum numbers till the given one
// function sumTill(num:number):number{
//   if(num===1 || num===0){
//     return num;
//   }else if(num>1){
//     return num + sumTill(num-1)
//   }else{
//     return num + sumTill(num + 1)
//   }
// }
// console.log(sumTill(1))

// function calcFactorial(num1:number):number{
//   if(num1===0 ||num1===1){
// return 1;
//   }else{
//     return num1* calcFactorial(num1-1)
//   }

// }
// console.log(calcFactorial(3))

// //calculate fibonacci
// function fibonacci(num2:number):number{
//   if(num2<=1){
//     return num2;
//   }else{
//     return fibonacci(num2-1) + fibonacci(num2-2);
//   }
// }
// console.log(fibonacci(8));

///////////quiz revision for exam
////////////////////////////////
// w2d4 methods
//q1.
// * write a function, sumPoints, to get the total points across all players */

// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// console.log("expect 10: ", sumPoints(players));

// function sumPoints(players) {
//   return players.reduce((total, player) => {
//     // Concatenate all points arrays using spread operator (...) and sum the values
//     return total + player.points.reduce((sum, point) => sum + point, 0);
//   }, 0);
// }

// console.log("expect 10: ", sumPoints(players));

//q2. /* write a function findProps to return an array of all the properties in any given object */
// console.log("expect [a, b, c]: ", findProps({a: 1, b: 2, c: 3}));

// function findProperties(obj:object):string[]{
//   return Object.keys(obj);
// }

// //to find all the values
// function findValues(obj: object): [string, any][] {
//   return Object.values(obj);
// }

// console.log("expect [1, 2, 3]: ", findProps({ a: 1, b: 2, c: 3 }));

// //ti find all the entries
// function findEntries(obj: object): [string, any][] {
//   return Object.entries(obj);
// }
// console.log(
//   "expect [['a', 1], ['b', 2], ['c', 3]]: ",
//   findProps({ a: 1, b: 2, c: 3 })
// );

//quiz
// w2d5 data types

// slice and splice are both destructive operations on arrays. Both modify the original array.
// True
// False--ans
//splice-- destructive as it modifies the originl array
//slice-- non-destructive. it returns a new array containing a copy of elements of the original array.

//Higher-order functions: These are functions that either take other functions as arguments or return functions, or both.

// reduce(): It applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

// --//The callback function provided to reduce() is the arrow function (accumulator, currentValue) => { return accumulator + currentValue; }.

// This function receives two arguments:

// accumulator: Holds the accumulated value. It starts at the initial value passed to reduce (0 in this case) and accumulates the result of each iteration.
// currentValue: Represents the current element being processed in the array (1, 2, 3, etc., in each iteration).

// sort(): While primarily used for sorting arrays, sort() can take a comparison function as an argument, making it a higher-order function.

// every(): It checks if all elements in an array pass a test implemented by a provided function.

// some(): It checks if at least one element in an array passes a test implemented by a provided function.

// find() and findIndex(): find() returns the first element in an array that satisfies a provided testing function, and findIndex() returns the index of the first element that satisfies the testing function.

// flatMap(): It first maps each element using a mapping function, then flattens the result into a new array. It's similar to map(), followed by calling flat() with a depth of 1.

// map(), filter(): These are indeed higher-order functions as they take a callback function as an argument. map() applies a function to each element of an array and returns a new array with the results. filter() creates a new array with elements that pass the provided function's test.

//q
//const array123 = [1, 2, 3]

// use map and an arrow function to get a new array with the squares of each element -- i.e., [1, 4, 9]
// let arr1= [1,2,3]

// const myMap =arr.map((x)=>x**2)

// console.log(myMap)

// Model Short Answer: array123 .map(e => e*e)

//quiz
// w3d2
//q7
//const guess = prompt("Enter either alpha or beta") ?? "alpha;" const abc = {[key: string]: number} = {alpha: 1, beta: 0}; //which of the following will output 1 or 0? (assume prompt is installed and declared)
//  A. abc.guess
//  B. abc[0]
//  C. abc[1]
//  D. abc.guess[1]
//  E. abc[guess]

// Answer Key:E

//This will output 1 if the user enters "alpha" and 0 if the user enters "beta" or if the prompt defaults to "alpha" due to nullish coalescing.

// For example:

// If the user enters "alpha" in the prompt, abc["alpha"] will output 1.
// If the user enters "beta" in the prompt, abc["beta"] will output 0.
// If the user cancels or inputs nothing in the prompt, the default value "alpha" will lead to abc["alpha"], resulting in 1.

//q8
///* write a function, maxPoints, to find and return the maximum points of any single player.   */
// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];

// console.log("expect 4:",  maxPoints(players));

//function maxPoints(players: { name: string, points: number[] }[]): number {
//     let playerMaxPoints: number = 0;

//     for (const player of players) {
//         const totalPoints: number = player.points.reduce((acc, cur) => acc + cur, 0);

//         if (totalPoints > playerMaxPoints) {
//             playerMaxPoints = totalPoints;
//         }
//     }

//     return playerMaxPoints;
// }

//q9
//Use reduce to find the sum of an array.
// Use reduce to find the largest element of an array.
// [you may run out of time for these in the quiz, but they will be good practice later for the exam. Note that there are 0 points in this quiz for this question.]

//a. sum
// function arraySum(arr:number[]):number{
//   return arr.reduce((total, num)=>total + num,0)
// }

// console.log(arraySum([1,2,43,5,6]))

// //b. largest
// function findLargest(arr1:number[]){

//   return arr1.reduce((largest, curVal)=> Math.max(largest,curVal),-Infinity);
// }

//quiz
// w3d3
//const arr1234 = [1, 2, 3, 4, 5];
// const [a, b, ...c] = arr1234;
// console.log(a);  1
// console.log(b);  2
// console.log(c);  [3,4,5] //ans-rest operator is array type

//q2
// Write a typescript function, flatten, that returns an array that has objects of the form {date: "...", id: 1, amt: 15} for all donations.
// flatten(dailyRecord) returns: [
// { date: '01/10/2022', id: 1, amount: 100 },
// { date: '01/10/2022', id: 2, amount: 10 },
// { date: '01/11/2022', id: 3, amount: 1 },
// { date: '01/11/2022', id: 2, amount: 5 },
// { date: '01/11/2022', id: 1, amount: 15 }
// ]

// const donation1 = { funderId: 1, amount: 100 };
// const donation2 = { funderId: 2, amount: 10 };
// const donation3 = { funderId: 3, amount: 1 };
// const donation4 = { funderId: 2, amount: 5 };
// const donation5 = { funderId: 1, amount: 15 };
// const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
// const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };

// const dailyRecord = [day1, day2];

// //ans

// type Donation = { funderId: number; amount: number };
// type DailyRecord = { donations: Donation[]; date: string };

// function flatten( dailyRecord: DailyRecord[]): { date: string; id: number; amt: number }[] {
//   const flattenedArray: { date: string; id: number; amt: number }[] = [];

//   for (const day of dailyRecord) {
//     // const { date, donations } = day;
//     for (const donation of day.donations) {
//       flattenedArray.push({
//         date:day.date,
//         id: donation.funderId,
//         amt: donation.amount,
//       });
//     }
//   }

//   return flattenedArray;
// }

// const donation1: Donation = { funderId: 1, amount: 100 };
// const donation2: Donation = { funderId: 2, amount: 10 };
// const donation3: Donation = { funderId: 3, amount: 1 };
// const donation4: Donation = { funderId: 2, amount: 5 };
// const donation5: Donation = { funderId: 1, amount: 15 };
// const day1: DailyRecord = {
//   donations: [donation1, donation2],
//   date: "01/10/2022",
// };
// const day2: DailyRecord = {
//   donations: [donation3, donation4, donation5],
//   date: "01/11/2022",
// };

// const dailyRecord: DailyRecord[] = [day1, day2];

// const flattenedResult = flatten(dailyRecord);
// console.log(flattenedResult);

// //ORRRRRRRRRRRRRRRRR
// //WITH HIGH ORDER FUNCTIONS
// function flatten(dailyRecord: DailyRecord[]): { date: string; id: number; amt: number }[] {
//   return [].concat(...dailyRecord.map(day =>
//     day.donations.map(donation => ({
//       date: day.date,
//       id: donation.funderId,
//       amt: donation.amount,
//     }))
//   ));
// }
//Note []arr which acted to concat , it created on the fly as place holder
//Q5
//Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and a function as arguments and returns a new array that is formed by applying the function to each element of the array and saving the result in the new array. Do not use the Array.map method in your code.

//ans
// //function myMap(arr, fun) {
//   const mappedArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     mappedArray.push(fun(arr[i], i, arr));
//   }

//   return mappedArray;
// }

// //const numbers = [1, 2, 3];

// const doubled = myMap(numbers, (num) => num * 2);
// console.log(doubled); // Output: [2, 4, 6]

//q6
// Write a function, smash, that uses map and destructuring in parameters of the callback function. Remember that you need () around destructuring brackets for an object if you do not have let or const.  smash input is an array of objects with x and y properties.  It returns an array that has the x and y values added together.

// const bar = [{x:1, y:2}, {x:10, y:4}, {x:4, y:2}]
// console.log("expect [3, 14, 6]:", smash(bar));
///

// function smash(arr) {
//   return arr.map(({ x, y }) => x + y);
// }

// const bar = [
//   { x: 1, y: 2 },
//   { x: 10, y: 4 },
//   { x: 4, y: 2 },
// ];
// console.log("Expect [3, 14, 6]:", smash(bar));

//Note:
// When trying to destructure an object without using let, const, or var to declare a variable, JavaScript assumes the curly braces {} as a block instead of an object destructuring assignment. To resolve this ambiguity and allow the destructuring assignment to work properly,you need to wrap it in parentheses .

//Destructuring in JavaScript is a concise way to extract multiple values from arrays or objects and assign them to variables. It allows you to unpack values from arrays or properties from objects into distinct variables in a single line of code.

//exMPLE
// const person = { name: 'Alice', age: 30 };
// const { name, age } = person;
// name = 'Alice', age = 30

//
// QUIZ W3D4
//Recall the makeCounter code:

// function makeCounter(): ()=>number {

//   let count = 0;

//   return function():number { count++; return count; };

// }

// Rewrite makeCounter to that the callback function it returns can take an increment as an argument.  This will allow the caller to increase the count by a given number.  E.g.,

// const myCount = makeCounter();

// myCount(10);  // will return the count incremented by 10.

// function makeCounter(): (increment: number) => number {
//   let count = 0;

//   return function(increment: number): number {
//     count += increment;
//     return count;
//   };
// }

// const myCount = makeCounter();
// console.log(myCount(10)); // Output: 10
// console.log(myCount(5));  // Output: 15

// //quiz w3d6
// // Write a function, evenRecurse, that will use recursion to print all positive even numbers less than a given number, e.g.,
// // evenRecurse(7) will log 6,4,2,0

// function evenRecurse(num:number):void{
//   if(num<0){
//     return ;
//   }else{
//   if(num%2===0){
//     console.log(num-2);
//   }
//   evenRecurse(num-1);
// }
// }
// evenRecurse;

// //ORRR
// function evenRecurse(num:number):void{

//   if(num>=0){
//     if(num%2===0){
//       console.log(num)
//     }
//     evenRecurse(num - 1)
//   }

// }

// // //q2
// // write a function, averagePoints, to get an array containing the average points across for each player . Then modify the function to return objects,

// // Try with a regular for..of loop and then using map and reduce.
// const player1 = {name: "Bob", points: [1, 2, 1]};
// const player2 = {name: "Andre", points: [2, 0, 1]};
// const player3 = {name: "Max", points: [1, 1, 1]};
// const players = [player1, player2, player3];
// console.log("expect [1.33, 1, 1 ]: ", averagePoints (players));
// //console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePointsLabeled (players));

// //ans

// type player={
//   name: string;
//   points:number
// }
// function averagePoints(playes:Player[]):number[]{

//   let arrAvg:number[]=[];

//   for(const player of players){
//     let totalPoints =0;
//     for(const point of player.points){
//       totalPoints +=point;
//     }
//     let avg = totalPoints/player.points.length;
//     arrAvg.push(parseFloat(avg.toFixed(2)));
//   }
// return arrAvg;
// }

//
// //ORRRRRRR
// function averagePoints(players:Player[]):number[]{

//   let arrAvg:number[]=[];
// for(const player of players){

//   const avg = player.points.reduce((sum, point)=>sum+point, 0)/player1.points.length;
//   arrAvg.push(parseFloat(avg.toFixed(2)))
// }
// return arrAvg;

// }

// //to modify it to return objects
// function avgPoinLabeled (players:Player[]):{[key:string]: number}[]{

//   return players.map(player =>{
//     const avg = player.points.reduce((sum, point)=>sum + point, 0)/player.points.length;
//     return {[player.name]:parseFloat(avg.toFixed(2))}
//   })
// }

// //q5
// //"use strict";

// let phrase = "Hello";
// if (true) {
//   let user = "John";
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi();  //what will this show?  Note scope of sayHi.

// //
// In this case, calling sayHi() outside the block where sayHi() is defined will result in an error. The function sayHi() is declared within an inner block and thus has block scope, confined to the block where it's defined.

// //q5
// let john = { name: "John", surname: "Smith", age: 10 };
// let pete = { name: "Pete", surname: "Hunt", age: 20 };
// let people = [ john, pete];

// Use the map function to map the people array to the following:
// [{ fullName: "John Smith", age: 10 },
// { fullName: "Pete Hunt", age: 20 },]

// //
// type Person= {
//   name: string;
//   surname: string;
//   age: number;
// }
// function mapPeople(people:Person[]):{fullName:string; age:number}[]{

//   let mappedPeople:{fullName:string; age:number}[] =
//   people.map(person =>{
//     return{fullName:`${person.name} ${person.surname}`, age:perosn.age,};

//   },

//   )}
//   console.log(mapPeople(people))

// Exam preparation slide review
//************************** */
// map/filter/find/reduce are “pure” functions
//pure functions have no side effects
//Take arguments and return a new value

// DESTRUCTURING ASSISGNMENTS AND JSON
//LAW OF LEAST ACTION

// special syntax that allows us to “unpack” arrays or objects into a set of variables

// let arr = ["iliya", "kotor"];
// let [firstName, surname] = arr;
// console.log([firstName, surname])

//the rest oprator"..."
// can use any other variable name in place of rest

// const [name1, name2, ...rest] = ["Julius", "Caesar", 'Consul', ' of the Roman Republic'];

// console.log(rest.length);//2
// console.log(rest.join(" "))//to string
// console.log(rest.join(" ").length);//29
// name1;
// name2;

// const team = [ "Bob", "Fred", "Jim"];

// let[bob,fred,jim]= team;
// console.log(bob);
// fred;
// jim;

//

// destructuring assignment also works with objects

// const options = {
//  title: "Menu",
//  width: 100,
//  height: 200
// };
// let {title, width, height} = options;
// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// const { height, width, title } = { title: "Menu", height: 200, width: 100 };
// console.log(height);
// console.log(width);
// console.log(title)

// ➢to assign a property to a variable with another name, set it using a colon

// const options = {
//   title: "Menu",
//   width: 100,
//   heigth: 200,
// };
// // { sourceProperty: targetVariable }

// const{width:w, heigth:h, title}= options;

// console.log(title); // Menu
// console.log(w); // 100
// console.log(h); // 200

// Destructure property to another name (TypeScript)

// const {width: w, height: h, title} = options;
// // Confusingly, the colon here does not indicate the type.
// // - type, if you specify it, needs to be written after the entire destructuring:
// const {width: w, height: h, title}: {width: number, height: number, title: string} = options;

// Exercise;
//
// const team = {
//   point: "Bob",
//   shooting: "Fred",
//   power: "Jim",
//   small: "Al",
//   center: "Big Sleep",
// };
// // let{point, shooting, power, small, center} = team;

// // power;small;center;
// // console.log({ point, shooting });

// // 2. destructure the team onto variables:
// let {point:one, shooting:two , power:three, small:four,center:five} = team;
// console.log({ one, two, three, four, five });

// Default values (JavaScript)

// // For potentially missing properties can set default values using "="
// const options = {
//  title: "Menu"
// };
// const {width = 100, height = 200, title} = options;
// console.log(title); // Menu
// console.log(width); // 100
// console.log(height); // 200

// ➢ above will show error in TypeScript because the object does not have height or title properties

// type OptionsType = {width:number, heigth:number, title:string}

// const options ={} as OptionsType;
// options.title = "Menu";
//  let {width = 100, heigth = 200, title} = options;
//  console.log(title); // Menu
//  console.log(width); // 100
//  console.log(heigth); // 200

//
//  Destructuring function parameters (JavaScript)

// ➢ can pass parameters as an object, and the function destructures them into parameters:
// let options = {
//  title: "My menu",
//  items: ["Item1", "Item2"]
// };
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//  // title, items – taken from options,
//  // width, height – defaults used
// console.log( `${title} ${width} ${height}` ); // My Menu 200 100
// console.log( items ); // Item1, Item2
// }
// showMenu(options);

// const obj = {a:1, b:2, c:10};
// function addObj({a,b,c}:{a:number, b:number,c:number}):number{
//   return (a+b)*c;
// }
// console.log(addObj(obj))

// let user = {name:"john", age:30};
// Object.keys(user) = ["name", "age"];
// Object.values(user)=['john', 30];
// object.entries(user) = [["name", "john"], ["age", 30]]

// JSON.stringify(john)--TO CONVRT TO OBJECT TO string;
// JSON.parse(johnJoson)- tparse to create a clone
// john!==clonedjohn====> separte objects in memory
// let student = {
//  name: 'John',
//  age: 30,
//  isAdmin: false,
//  courses: ['html', 'css', 'js'],
//  wife: null};
//  let json = JSON.stringify(student);
//  console.log(json);
//  let bela = JSON.parse(json)
//  console.log(bela)

//  let numbers = "[0, 1, 2, 3]";
//   console.log(numbers[0])//[
//   console.log(numbers[1])//0
//   console.log(numbers[2])//" " //empty space
//   console.log(numbers[3])//,

// numbers = JSON.parse(numbers);
// console.log( numbers[0] ); // 0
// console.log( numbers[1] ); // 1
// console.log( numbers[2] ); // 2

// const john = {
//   name: "John",
//   surname: "Smith",
//   isAdmin: false,
//   birthday: { year: 2000, month: "February", day: 3 },
//   friends: [0, 1, 2, 3],
// };

// let jsonstringified = JSON.stringify(john);
// console.log(jsonstringified[0])//{
// console.log(jsonstringified[1]);//"

// console.log(jsonstringified[2]);//n

// CLOSURES
// *******
// actions supported by All the laws of Nature
// Closures are created whenever an inner function with free variables is returned
// or assigned as a callback. Closures provide encapsulation of methods and
// data. Encapsulation promotes self-sufficiency, stability, and re-usability.

// js function oriented language

// function makeCount(){
//   let count = 0;
//   function innerFunc(){
//     count++
//     return count
//   }
//   return innerFunc;

// }

// const counter1 =makeCount();//innerFunc itself
// const counter2 = makeCount();//innerFunc itself

// console.log(counter1());//1 counter1 and counter2  are indepandant
// console.log(counter1())//2

// console.log(counter2())//1
// console.log(counter1());//3 they are indepandant
// console.log(counter2())//2

// Exercise

// function makeCounter(): () => number {
//  let count = 0;
//  return function(): number {
//  count += 1;
//  return count;
//  };
// }
// const counter = makeCounter();
// console.log(counter)//[Function anonymous]
// console.log( counter() ); // 1
// console.log( counter() ); // 2
// console.log( counter() ); // 3
// Draw the execution context diagram for this code
// Important: execution context cannot be discarded if it contains an external variable for
// a returned function

// Global Execution Context
// └── Variable Environment:
//     ├── makeCounter: <Function reference>
//     └── counter: undefined

// Execution of makeCounter Function
// └── Variable Environment:
//     ├── count: 0
//     └── Returned Function:
//         └── Function Reference

// Execution of counter Function (Call 1)
// └── Variable Environment:
//     ├── count: 1
//     └── Returned Value: 1

// Execution of counter Function (Call 2)
// └── Variable Environment:
//     ├── count: 2
//     └── Returned Value: 2

// Execution of counter Function (Call 3)
// └── Variable Environment:
//     ├── count: 3
//     └── Returned Value: 3

//ex2
// Exercise

// function makeCounter(): () => number {
//  let count = 0;
//  return function(): number {
//  count += 1;
//  return count;
//  };
// }
// const counter1 = makeCounter();
// const counter2 = makeCounter();
// console.log( counter1() ); // 1
// console.log( counter1() ); // 2
// console.log( counter2() ); // 1
// // Draw the execution context diagram for this code
// // Important: execution context cannot be discarded if it contains an external variable for
// // a returned function

// Global Execution Context
// └── Variable Environment:
//     ├── makeCounter: <Function reference>
//     ├── counter1: undefined
//     └── counter2: undefined

// Execution of makeCounter Function (for counter1)
// └── Variable Environment (counter1):
//     ├── count: 0
//     └── Returned Function (counter1):
//         └── Function Reference

// Execution of makeCounter Function (for counter2)
// └── Variable Environment (counter2):
//     ├── count: 0
//     └── Returned Function (counter2):
//         └── Function Reference

// Execution of counter1 Function (Call 1)
// └── Variable Environment (counter1):
//     ├── count: 1
//     └── Returned Value: 1

// Execution of counter1 Function (Call 2)
// └── Variable Environment (counter1):
//     ├── count: 2
//     └── Returned Value: 2

// Execution of counter2 Function (Call 1)
// └── Variable Environment (counter2):
//     ├── count: 1
//     └── Returned Value: 1

// Exercise

// let name = "John";
// function sayHi(): void {
//  console.log("Hi, " + name);
// }
// name = "Pete";
// sayHi(); // what will it show: "John" or "Pete"?
// // Draw the execution context diagram for this code

// Global Execution Context
// └── Variable Environment:
//     └── name: "Pete"
//     └── sayHi: <Function reference>

// Execution of sayHi Function
// └── Variable Environment:
//     └── (no local variables)

// Output: "Hi, Pete"

// Exercise

// function makeWorker(): () => void {
//  const name = "John";
//  return function() {
//  console.log(name);
//  };
// }
// const name = "Pete";
// // create a function
// const work = makeWorker();
// // call it
// work(); // what will it show? “John" (name where created) or “Pete" (name where called)?
// // Draw the execution context diagram for this code

// Global Execution Context
// └── Variable Environment:
//     └── name: "Pete"
//     └── makeWorker: <Function reference>
//     └── work: <Function reference>

// Execution of makeWorker Function
// └── Variable Environment (makeWorker):
//     └── name: "John"
//     └── Returned Function:
//         └── Function Reference

// Execution of work Function
// └── Variable Environment:
//     └── (no local variables)

// Output: "John"

// code blocks and scope
let phrase = "Hello";
if (true) {
  let user = "John";
  console.log(`${phrase}, ${user}`);
}
// console.log(user)//can'n find user

//Homework exercise
// ➢ Draw a lexical environment diagram for the
// following code.
// ➢ Follow model of previous page, show:
// ➢ global lexical environment (LE)
// ➢ LE for makeArmy()
// ➢ LE for LE of the while loop
// ➢ LE for army[0]
// ➢ What will army[0] alert?
// ➢ Can you fix the code?
// ➢ How will the diagram change?

// type Shooter= () => void;

// function makeArmy(): Shooter[] {
//  const shooters: Shooter[] = [];
//  let i = 0;
//  while (i < 10) {
// let shooter = function(): void {
//  console.log( i );
// };
// shooters.push(shooter);
// i++;
//  }
//  return shooters;
// }
// const army = makeArmy();
// army[0]();

// to fix the code

function makeArmy(): (() => number)[] {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function (): number {
      // shooter function
      return j; // should show its number
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

//ORRRRRRRRRRRR
function makeArmy(): Shooter[] {
  const shooters: Shooter[] = [];
  for (let i = 0; i < 10; i++) {
    let shooter = (function (index) {
      return function (): void {
        console.log(index);
      };
    })(i);
    shooters.push(shooter);
  }
  return shooters;
}

// lexical environment diagram
// Global Execution Context
// └── Variable Environment:
//     └── makeArmy: <Function reference>
//     └── army: Shooter[]

// Execution of makeArmy Function
// └── Variable Environment (makeArmy):
//     └── shooters: []
//     └── i: 0 (iteration 1)
//     └── shooter: Function capturing 'index' (1st function)

// Execution of makeArmy Function (iteration 2 to 10, similar structure with different 'i')
// └── Variable Environment (makeArmy):
//     └── shooters: [Function capturing 'index' (1st function), ..., Function capturing 'index' (9th function)]
//     └── i: 1 to 9 (iterations 2 to 10)
//     └── shooter: Function capturing 'index' (2nd to 10th function)

// Execution Context for army[0] Function
// └── Variable Environment:
//     └── (no local variables)

// ///RECURSION
// //SELF REFERRAL AWARENESS
// //FIND THE LENGTH OF A STRING
// function findLengthRecursive(s) {
//   if (s === "") {
//     return 0; // Base case: If the string is empty, return 0
//   } else {
//     return 1 + findLengthRecursive(s.substr(1)); // Recursive case: Return 1 + length of string excluding the first character
//   }
// }

// console.log(findLengthRecursive("Hello"));

/*How it works:
Base Case: If the string s is empty (""), the function returns 0. This is the stopping condition for the recursion.

Recursive Case: If the string s is not empty, the function recursively calls itself with the substring s.substr(1). This substring excludes the first character of the string s.

The function keeps calling itself, each time passing a substring that's one character shorter than the previous call.

The recursive calls continue until the base case (s === "") is met. At that point, the function starts to unravel, returning 0 for the empty string.

As the function unwinds, it adds 1 for each recursion, effectively counting the number of times it was called until the string becomes empty, thereby determining the length of the original string.

For instance:

findLengthRecursive("Hello") would call itself with "ello", then "llo", then "lo", then "o", and finally "".
As it returns back up the chain of recursive calls, it adds 1 for each call, resulting in 5 being returned as the length of the original string "Hello".
The function essentially reduces the problem into smaller parts (substrings), gradually solving each smaller part until it reaches the base case and then combines the solutions to determine the final resul */

// Exercise
// • Write a recursive function to count the instances of a letter in a string. Use
// recursion rather than split and filter.
// • Base case?
// • Reductive recursive call?
// countInstances("All that is great and good.", "t") → 3

// function countInstances(str: string, letter: string): number {
//   if (str == "") {
//     return 0;
//   }
//   if (str.charAt(0) === letter) {
//     return 1 + countInstances(str.substring(1), letter);
//   } else {
//     return countInstances(str.substring(1), letter);
//   }
// }

// console.log(countInstances("All that is great and good.", "t")); //→ 3

///////////
let company = {
 sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
 development: {
 sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }], //subdepartments
 internals: [{name: 'Jack', salary: 1300}]
 }
};
// Class exercise: practice with objects
// ➢ write an expression to access the name and salary of the
// second employee in sales
// ➢ same for the second employee in the sites subdepartment

// const secondSalesEmployee = company.sales[1];
// const nameInSales = secondSalesEmployee.name; // Name of the second employee in sales
// const salaryInSales = secondSalesEmployee.salary; // Salary of the second employee in sales

//ans//
// const secondSitesEmployee = company.development.sites[1];
// const nameInSites = secondSitesEmployee.name; // Name of the second employee in sites sub-department
// const salaryInSites = secondSitesEmployee.salary; // Salary of the second employee in sites sub-department

// function sumSalaries(department:any) {
//   if (Array.isArray(department)) {
//     // case (1)
//     return department.reduce((total, employee) => total + employee.salary, 0); // sum the array
//   } else {
//     // case (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company)); // 6700


//ORRRR
function sumSalaries(department:any) {
  // If the department is a simple array of people
  if (Array.isArray(department)) {
    return department.reduce((total, employee) => total + employee.salary, 0);
  } else {
    let sum = 0;
    for (let subDepartment in department) {
      sum += sumSalaries(department[subDepartment]);
    }
    return sum;
  }
}

let company = {
  sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
  development: {
    sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
    internals: [{ name: 'Jack', salary: 1300 }]
  }
};

const totalSalary = sumSalaries(company);
console.log(totalSalary); // Output: 6700 (Sum of all salaries in the company)



