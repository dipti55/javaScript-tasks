// JavaScript Array forEach()
////sytax=> array.filter(function(parameter, index, arr), thisValue)

// 1. forEach e.g
const names = ["sahil", "ram", "ishan", "virat", "neel"]

//By Using For Loop
for (let i =0; i<names.length;i++){
    console.log(`${i}. Name is: ${names[i]}`)
}

//By Using forEach-
console.log("By Using forEach")


const printNames = function (name, i){
    console.log(`${i}. Name is: ${name}`)
}
names.forEach(printNames);

// or
names.forEach(function(name,i){
    console.log(`${i}. Name is: ${name}`)
})

// or
names.forEach((name,i)=>console.log(`${i}. Name is: ${name}`))

// 2. forEach e.g
const items = ['item1', 'item2', 'item3'];

//  before
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

//using forEach
items.forEach((element)=>console.log(`${element}`))    //or
items.forEach((element)=>console.log(element))

// -----------------------------------------------------------------------
// ------------------------------map--------------------------------------


