// JavaScript Array map()
//sytax=> array.filter(function(parameter, index, arr), thisValue)

//By Using For Loop
const arr = [3,4,5,6]

for (let i=0; i<arr.length; i++){
     arr[i] = arr[i]*3;
}
console.log(arr)                                        //[9, 12, 15, 18]

//By Using map()-
const arr1 = [3,4,5,6]
newArray= arr1.map((num)=>num*3)
console.log(newArray)                                   //[9, 12, 15, 18]


//if you use  forEach()-
const arr3 = [3,4,5,6]
newArray3 =arr3.forEach((num1)=>num1*3) 
console.log(newArray3)                                  //undefined

let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];

  students = users.map((element)=>(`${element.firstName} ${element.lastName}`))
  console.log(students)                                 //['Susan Steward', 'Daniel Longbottom', 'Jacob Black']


const numbers = [65, 44, 12, 4];
const w3 = numbers.map((nums)=>nums*10)
console.log(w3)                                         // [650, 440, 120, 40]
