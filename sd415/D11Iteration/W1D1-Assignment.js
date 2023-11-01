import PromptSync from "prompt-sync";
const prompt = PromptSync();
//Q1.1. Write a program to compute sales commission based on following rules:
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales from $300 and up to but less than $500
// • 2% for sales $500 or above
// • If the salesman is not salaried then
// • 2% for sales from $300 and up to but less than $500
// • 3% for sales $500 or above

// function calcCommission(){

//   let sales = parseFloat(prompt("eneter sales amount :"))
//   let salesmanIs = prompt(" enter type of salesman as salaried or notSalaried: ")
//   let commission = 0;
// if(salesmanIs.toUpperCase()==="SALARIED"){
//   if(sales<300){
//     commission=0;
//   }else if(sales>=300 && sales<500){
//     commission= sales*0.01
//   }else if(sales>=500){
//     commission = sales*0.02
//   }
// }

// if(salesmanIs.toUpperCase()==="NOTSALARIED"){
//    if(sales>=300 && sales<500){
//     commission= sales*0.02;
//   }else if(sales>=500){
//     commission = sales*0.02
//   }
// }

// console.log("commission is :" + commission)

// return commission

// }console.log(first)

// q2.

// /q2. 2. Write a loop that continually prompts for age until you enter age older than 18
//  Write both while and do while versions.

// let theAge = 0;

// while (theAge <= 18) {
//   theAge = parseInt(prompt("eneter age :"));
//   if (theAge > 18) {
//     console.log("age is older that 18");

//     break;
//   }
// }


// let theAge2 = 0;

// do {
//   theAge2 = parseInt(prompt("eneter age :"));
// } while (theAge2 <= 18);

//   if (theAge2 > 18) {
//     console.log("age is older that 18");
//   }



//q3 Make a defining table and program to print out the balance of a savings account that
// compounds interest monthly. Prompt the user for the
// • initial amount
// • annual interest rate
// • number of years to compound
// Do not use the mathematical formula for compound interest. Use a loop that calculates the
// interest for each month and compounds that over the iteration—i.e., add it to the current
// balance. Ask the professor or TA if this is not clear.

// let intialBalance = parseFloat(prompt("enter initial balance :"));
// let annualInterestRate = parseFloat(prompt("enter annual interest rate : "));
// let yearsOfCompound = parseInt(prompt("enter years to compond : "))
// let monthlyInterest = annualInterestRate/12;
// let balance = intialBalance


// for (let month=1; month<=yearsOfCompound*12; month++){
//   const interest = balance*monthlyInterest;

//   balance = balance + interest

// }
// console.log(`after ${yearsOfCompound} years, the balance is ${balance.toFixed(2)}`)


//Q3.  Write code to print the number patterns on the console
// 12345
// 12345
// 12345
// 12345
// 12345
// 1
// 22
// 333
// 4444
// 55555
// 55555
// 4444
// 333
// 22
// 1

//


// // to print the pattern // 12345
// // 12345
// // 12345
// // 12345
// // 12345
// for(let i=1; i<=5; i++){
//   let row = " ";
//   for(let j=1; j<=5; j++){
//     row = row + " "+ j
    
//   }
//   console.log(row);

//  }

// ///to print the pattern 
// // 22
// // 333
// // 4444
// // 55555
// for (let i = 1; i <= 5; i++) {
//   let row2 = " ";
//   for (let j = 1; j <= i; j++) {
//     row2 = row2 + " " + j;
//   }
//   console.log(row2);
// }


// //to print the pattern //
// // 55555
// // 4444
// // 333
// // 22
// // 1
// for (let i = 5; i >=1; i--) {
//   let row3 = " "
//   for (let j = 1; j <= i; j++) {
//    row3 = row3 + " " + j 
//   }
// console.log(row3);
// }

//Q5
// 5. Cost of House Down Payment
// Make a defining table and then write a program that calculates down payment for a home loan based
// on following rules. Your program should prompt for the cost and write the down payment amount to
// the console.
// Cost of House              Down Payment
// $0 to less than 50K       5% of the cost
// $50K to less than 100K    $1000 + 10% of (cost - $50K)
// $100K to less than 200K   $2000 + 15% of (cost - $100K)
// $200K and above           $5000 + 10% of (cost - $200K)


// let costOfHouse = parseFloat(prompt("enter the cost of house :"))

// let downPayment = 0;
// if(costOfHouse>0&& costOfHouse<50000){
//   downPayment = costOfHouse*0.05
// }else if(costOfHouse>=50000 && costOfHouse<100000){
//   downPayment = 1000+ (costOfHouse - 50000)*0.1
// }else if(costOfHouse>=100000 && costOfHouse < 200000){
//   downPayment = 2000 + (costOfHouse - 100000)*0.15
// }else if(costOfHouse>=200000){
//   downPayment = 5000 + (costOfHouse - 200000)*0.1
// }
// console.log("the down payment is $"+  downPayment)



// //q6.Write a JavaScript program to prompt for an integer and compute the sum of all the digits. Use the /
// and % operators to find the digits.
// Input Output
// 123 6
// 102 3
// 8 8


// let num = parseInt(prompt("eneter an integer number: "));
// let sum = 0;
// while(num){
//   sum = sum + num%10;
//   num = Math.floor(num/10)

// }
// console.log(sum)