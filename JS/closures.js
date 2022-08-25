// closures

// - function inside another function who can access it's parent function's parameters.
// - it remembers the parameters of it's parent. i.e. it remembers the lexical scope.

// e.g 1
function greeting() {
    let message = 'Hi';

    function sayHi() {
        console.log(message);
    }

    sayHi();
}

greeting();                 //Hi


// e.g 2
function sub(num1,num2){
    let something = "I can remember the variable"
    function print1(){
        console.log(something);
        console.log(num1+num2)
    }
    print1();
}
sub(5,5)                      //I can remember the variable, 10     



// e.g 3
function a(num1,num2){
    let something = "I can remember the variable"
    return function dipti(){
        console.log(something);
        console.log(num1+num2)
    }
}

// stored in variable
const func = function dipti(){
    console.log(num1+num2)
}

let res = a(23,45)

// print the stored functions
console.log(func)     //it will print the function      //      ƒ dipti(){
                                                        //     console.log(num1+num2)
                                                        //      }

console.log(res)       // it will print the function     ƒ     dipti(){
                                                        //     console.log(something);
                                                        //     console.log(num1+num2)
                                                        // }

//call the functions

console.log(res())  // I can remember the variables as well, 68 , undefined
// console.log(func())     //closures.js:44 Uncaught ReferenceError: num1 is not defined
