


// recursion and stack
// recursion when a functioncalls itself
//example
// pow(x,n)====== x multiplis itself n times

//two ways to implement it
//1. iterative thinking: the for loop:


// function pow(x,n){
//   let result = 1;
//   for(let i = 0; i<n; i++){
//     result *=x;
//   }
//   return result;
// }

//2. recursive thinking: simplfy the task and call self
// function pow(x,n){
//   if(n=1){ ///called the base of recursion it produces x*1= x;
//     return x;
//   }else{
//     return x*pow(x,n-1)
//   }
// }
//a recursion is usually shorter than an iterative one.
// function pow(x,n){
//   return (n==1)?x:(x*pow(x,n-1))
// }

//the execution conext and stack


//one function call has exactly one excution contex associated with it

//recusion deepth equals the maximum number of context in the stack


//any recursion can be writen s a loop.

//recursive traversals

//recursive structures

// function sumTo(n){

//   if(n=1 )return 1
//   let x =0;
//   return x+sumTo(x-1) //for n>1
// } 

// calculate facrorial


//fibonacci number

// Exercise
// • Write both iterative and recursive solutions to calculate factorial of an integer.
// factorial (0) = 1
// factorial (n) = n * factorial (n-1) [for n>0]

// function factorial(num:number):number{
//   let total = 1
//   for(let i=num; i>0; i=i-1){
// total = total*i;
//   }

//   return total
// }
// console.log("expect 120 :" , factorial(5))
// //
// function fact (num:number):number{
//   if(num===1){
//     return 1;

//   }else{
//     return num*fact(num-1);
//   }
// }
// console.log("expect 120 :" , fact(5))


// function countInstances(str:string, letter:string):number{
// if(str===''){
//   return 0;
// }else if(str[0]===letter){
//   //add 1 if letter equals str[0]
//   return 1+countInstances(str.substring(1), letter)
// }else{
//   return countInstances(str.substring(1), letter);
// }
// }
// console.log(countInstances("Hi All", "l"))

//recursion for web cev simplified
//******************************* */
// function countDown(n:number){
//   for (let i = n; i>0; i--){
// console.log(i)
//   }
//   console.log("hoorey")
// }
// countDown;

// function countDownRecursive(n){
//   if(n<=0){
//     console.log("Hoorey")
//     return ;
//   }
//   console.log(n);
//   countDownRecursive(n-1)

// }
// countDownRecursive(3)
//   countDownRecursive(2)
//     countDownRecursive(1)
//      countDownRecursive(0)
  


// function sumRange(n, total=0){
// if(n<=0){  //guard class of our function
//   return total;
// }
// return sumRange(n-1, total +n);
// }
// sumRange(3,0);
//  sumRange(2,3)
//    sumRange(1,5)
//     sumRange(0, 6)


// function printChildren(t){
//   if(t.children.length ===0){
//     return;
//   }
//   t.children.forEach(child =>{
//     console.log(child.name)
//     printChildren(child)
//   })
// }


// let company = {
//   sales: [
//     {
//       name: "John",
//       salary: 1000,
//     },
//     {
//       name: "Alice",
//       salary: 1600,
//     },
//   ],

//   development: {
//     sites: [
//       {
//         name: "Peter",
//         salary: 2000,
//       },
//       {
//         name: "Alex",
//         salary: 1800,
//       },
//     ],

//     internals: [
//       {
//         name: "Jack",
//         salary: 1300,
//       },
//     ],
//   },
// };



// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     // Base case: if it's an array of employees, sum their salaries
//     return department.reduce((total, employee) => total + employee.salary, 0);
//   } else {
//     // Recursive case: if it's a department object with sub-departments
//     let totalSalary = 0;
//     for (const subDepartment of Object.values(department)) {
//       totalSalary += sumSalaries(subDepartment); // Recursively calculate salaries of sub-departments
//     }
//     return totalSalary;
//   }
// }




// sum numbers till the given one
function sumTill(num:number):number{
  if(num===1 || num===0){
    return num;
  }else if(num>1){
    return num + sumTill(num-1)
  }else{
    return num + sumTill(num + 1)
  }
}
console.log(sumTill(1))


function calcFactorial(num1:number):number{
  if(num1===0 ||num1===1){
return 1;
  }else{
    return num1* calcFactorial(num1-1)
  }

}
console.log(calcFactorial(3))

//calculate fibonacci
function fibonacci(num2:number):number{
  if(num2<=1){
    return num2;
  }else{
    return fibonacci(num2-1) + fibonacci(num2-2);
  }
}
console.log(fibonacci(8));