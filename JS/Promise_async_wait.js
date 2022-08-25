// 1. sync - line by line
// 2. async - multiple lines at the same time/random time

// promise can either resolve or reject

let data;
let promise =  new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        // data = "Hello promise"
        // date = undefined;
        date = null;
        date = "";

        if (data){
            resolve (data);
        }else{
            reject("no value present")
        }
    },2000)
})

promise.then((value)=>console.log(value))

// JavaScript Async


async function getData(){
    let myPromise = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hi")
        },2000)
    });
    let info = await myPromise;
    console.log("By using async wait " +info)
}

getData();

