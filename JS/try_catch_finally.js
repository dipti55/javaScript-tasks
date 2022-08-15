// JavaScript try...catch...finally Statement
//Display Undeclared Variable

const denominator = 100;
numerator = 'a';

try{
    console.log(denominator/numerator);
    console.log(a)
}
catch(error){
    console.log("An error caught");
    console.log("Error message :" +error);
}
finally{
    console.log("Finally will executes every time")
}

// Output

// NaN
// An error caught
// Error message: ReferenceError: a is not defined
//Finally will execute every time