// JavaScript Hoisting
sum(1,3)  
x= 8;
console.log(x);   //8
var x;

carName = "volvo";
console.log(carName);   //Uncaught ReferenceError: Cannot access 'carName' before initialization
let carName;

person = "Rani";
console.log(person);    //Uncaught SyntaxError: Missing initializer in const declaration
// const person;

var k = 5;
var j = 9;
console.log(k, j)  //5 9

var m = 7;
console.log(m,n)   //7 undefined
var n = 7;

function sum(n1,n2){
    console.log(n1+n2);
}
// sum(1,3)           //4