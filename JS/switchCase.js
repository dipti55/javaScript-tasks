// 8. switch case
//choice course program

// var choice = prompt(`Enter your choice!
// 1. MERN
// 2. MEAN
// 3.Java
// 4.Python
// 5.Testing
// `)
// switch(+choice){
//     case 1:
//         choice = "MERN" 
//         break;
//     case 2:
//         choice = "MEAN"
//         break;
//     case 3:
//         choice = "JAVA"
//         break;
//     case 4:
//         choice = "Python"
//         break;
//     case 5:
//         choice = "Testing"
//         break;
//     default:
//         choice = "No"
// }

// console.log(`You have selected ${choice} course`)

// program for a simple calculator

let result;
let operator = prompt(`Enter operator (either +, -, * or /)`)
let number1 = parseFloat(prompt(`Enter first number`))
let number2 = parseFloat(prompt(`Enter second number`))

switch(operator){
case "+" :
    result= number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`)
    break;
case "-":
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`)
    break;
case "*":
    result = number1 * number2;
    console.log(`${number1} + ${number2} = ${result}`)
    break;
case "/":
    result = number1 / number2;
    console.log(`${number1} + ${number2} = ${result}`)
    break;
default :
    console.log('Invalid operator');
}