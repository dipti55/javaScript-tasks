
// Object Example ->
let storage = "1TB";

let myLaptop = {
  // properties
  ownerName: "Arjun",
  brand: "HP",
  processor: "intel core i3-6006U",
  //   storage: "1TB",
  storage: storage,
  battery: "4400 mAh",
  weight: "1.5KG",
  os: "Windows 10 Pro",
  graphics: "Nvdia Geforce MX350",
  RAM : "8GB",
   // methods

   onStart : function (){
    console.log("Computer is getting started");
   },

   onShutDown : function () {
       console.log("Computer is shutting down");
   },

   quickHeal : function(purchaseDate, color){
    console.log(`This laptop owned by ${this.ownerName} & Its purchased on ${purchaseDate} Having ${color} color`);
    console.log("Removing viruses....!");
}
}

console.log(myLaptop.brand) ;
myLaptop.onStart()
// console.log(myLaptop.onShutDown());
myLaptop.onShutDown()

// -----------------------Method Borrowing & this Keyword [MOST IMP]------------------------------


let SecondLaptop = {
    // properties
    ownerName: "Ram",
    brand: "Dell",
    processor: "i3 processor",
    storage: "2TB",
    battery: "10400WaH",
    weight: "1.8KG",
    os: "Windows 11",
    graphics: "Nvdia Geforce MX350",
  
    // methods
    onStart: function () {
      console.log("Computer Is Getting Started..!");
    },
    onShutDown: function () {
      console.log("Computer Is Shutting Down..!");
    },
  };

//   calling quiclHeal function of myLaptop
// myLaptop.quickHeal("26/10/2016","silver")

// ----------------------------Method Borrowing (Call, Apply & Bind)-----------------------------------
  
// 1. Call ->
// call method is used coz i can also used quick heal function in SecondLaotop

myLaptop.quickHeal.call(SecondLaptop)//without parameters
myLaptop.quickHeal.call(SecondLaptop, "15/01/2021", "White") // with parameters

// 2. Apply ->
myLaptop.quickHeal.apply(SecondLaptop)//without parameters
myLaptop.quickHeal.apply(SecondLaptop,["05/08/2020", "Gray"])// with parameters

//3.bind

let ramSecondLaptop = myLaptop.quickHeal.bind(SecondLaptop)
ramSecondLaptop() //without parameters

let ramLaptop = myLaptop.quickHeal.bind(SecondLaptop, "12/5/2021", "red")
ramLaptop(); // OR
ramLaptop("01/4/2016","black")