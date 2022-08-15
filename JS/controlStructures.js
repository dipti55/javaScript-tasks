// 1.if
// 2.if else
// 3.nested if else
// 4.for loop
// 5.while loop
// 6.do while loop
// 7.switch case
// 8.keyword- break, continue

// 1.if
//e.g
const number = prompt("Enter a number")
if (number >=0){
    console.log("The number is posiive")
}

// 2.if else
//e.g
if (number >0 ){
    console.log("the number is positive")
}
else{
    console.log("The number is either negative number or 0")
}

// 3.nested if else

if (number >=0){
    if(number == 0){
        console.log("You entered number 0")
    }
    else{
        console.log("You entered positive number")
    }
}
else{
  console.log("You entered negative number")
}

// 4.iThe if...else if...else statement ===========>>>>>>>>

if (number>=0){
    console.log("The number is positive")
}
else if(number ==0){
    console.log("The number is 0")
}
else if(number ==5){
    console.log("he number is 5")
}
else{
    console.log("The number is negative")
}

// e.g if else ... else if

// 1000000= 1M

let netWorth = prompt("Enter your netWorth")
if (netWorth>=1000000){
    console.log("You are a Millionaire")
}
else if(netWorth>=700000){
    let res = confirm("You are near about a Millionaire!")
    console.log(res);
} 
else if(netWorth>=500000){
    let res1 = confirm("Do hard work man")
    console.log(res1)
}
else{
    console.log("You are a poor man")
}

//4. for lopp
// program to display text 5 times
for (i=1;i<=5;i++){
    console.log("I love javaScript")
}

// program to display numbers from 1 to 5
let m = 5;
for(i=1;i<=m;i++){
    console.log(i)
}

// program to display the sum of natural numbers
let a = 0
const b = 100
for (i=0;i<=b;i++){
    a+=i;  //a = a+i
}
console.log("sum:", a)

//5. while loop
//program to display numbers from 1 to 10
let k = 0;
const j = 10;
while(i<=j){
    console.log(i)
    i++;
}

// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum

let addition = 0;
let  digit = parseInt(prompt("Enter a number"))
while(digit>=0){
    addition+=digit;
    digit = parseInt(prompt("Enter a number"))
}
console.log(`addition : ${addition}`)

// program table of 5

let table = 5;
let isTo = 1;
while(isTo<=10){
 console.log(table+ " X "  +isTo+  " = " +isTo*table)
 console.log(`${table} X ${isTo} = ${isTo*table}`)

 isTo++;
}

//6. do...while Loop

// Display Numbers from 11 to 15
let num1 = 11;
let num2 = 15;
do{
    console.log(num1)
    num1++;
}
while(num1<=num2)

// Sum of Positive Numbers

let doSum=0;
let secondNumber = 0
do{
    doSum+=secondNumber;
    secondNumber = parseInt(prompt("Enter a number for do while loop"))
}
while(secondNumber>=0)
console.log("doSum :", doSum)

// Infinite while Loop

// let value = 1;
// while(value == 1){
//     console.log("InfinityLoop");
// }

// infinite do...while loop.
// let count = 5;
// do { 
//     console.log("Infinity count")
// }
// while(count == 5)