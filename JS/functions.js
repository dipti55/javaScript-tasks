// Function without parameter=================>>>>>>>>>

// e.g 1=======>
function noParams(){
    console.log("Function without parameter");
}
noParams();

// e.g 2=======>
function noParams1(){
    console.warn("Np params Function")
}
noParams1();


// e.g 2=======>
function noParams2(){
    console.warn("I am from mumbai")
}
noParams2()


// Parameterise Functions=================>>>>>>>>>

// e.g 1=======>
function add(value1, value2, value3){
    console.log("Addition of 3 values : " + (value1+value2+value3))
}
add(40,20,80);

// e.g 2=======>
function mul(value1, value2, value3){
    console.log("Multiplication of 3 values : " + (value1*value2+value3))
}
mul(40,20,70);

// e.g 3=======>
function div(value1, value2, value3){
    console.log("Division of 3 values : " + (value1/value2+value3))
}
div(40,50,80);
//Default parameterize function================>>>>>>>>>

// e.g 1=======>
function addWithDefault(num1, num2=0, num3=5){
    console.log("Addition with default : " + (num1+num2+num3))
}
addWithDefault(50);

// e.g 2=======>
function multiDefault(num1=2, num2=1, num3=6){
    console.log("Multiplication with default : " + (num1*num2*num3))
}
multiDefault();

// e.g 3=======>
function sumDefault(num1=5, num2, num3=6){
    console.log("Modulus with default : " + (num1+num2+num3))
}
sumDefault(4,5);

//Function with return statement================>>>>>>>>>

// e.g 1=======>
function returnAdd(val1 = 5, val2=4, val3=2){
    return val1+val2+val3;
}
let result = returnAdd(10,10)
console.log(result)

// e.g 2=======>
function returnMul(val1 , val2=1, val3=4){
    return val1+val2+val3;
}
let result2 = returnMul(20,"Hello")
console.log(result2)

// e.g 2=======>
function returnAdd(val1 = 5, val2=4, val3=2){
    return val1+val2+val3;
}
let result3 = returnAdd("World")
console.log(result3);

