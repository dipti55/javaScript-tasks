// JavaScript Array filter()
//sytax=> array.filter(function(parameter, index, arr), thisValue)

//Return an array of all values in ages[] that are 18 or over:

const ages = [32, 33, 16, 40, 15, 25];

//By Using For Loop
let canDrink =[]
for (let i=0; i<ages.length; i++){
    if(ages[i]>=18){
        // console.log(ages[i])     //32
                                 //33
                                 //40
                                 //25

        canDrink.push(ages[i])   //
}
console.log(canDrink)            //[32, 33, 40, 25]
}


//Using filter()
const humans = [32, 33, 16, 40, 15, 25];

const people = humans.filter(function(adult){
    if (adult>=18){
        return true;
    }})

console.log(people)

//OR
const allAges = [32, 33, 16, 40, 15, 25, 45];

const ages18 = allAges.filter((adults)=> adults>=18)
console.log(ages18)

//Using filter()
const mobiles = [
    {
      storageGb: "16",
      ram: "4GB",
      displaySizeInInch: 6.5,
      brand: "MI",
    },
    {
      storageGb: "16",
      ram: "4GB",
      displaySizeInInch: 5,
      brand: "Realme",
    },
    {
      storageGb: "64",
      ram: "4GB",
      displaySizeInInch: 4.5,
      brand: "Samsung",
    },
    {
      storageGb: "128",
      ram: "4GB",
      displaySizeInInch: 6.7,
      brand: "MI",
    },
  ];
  //filter mobilesBystorage
  const mobilesBystorage = mobiles.filter((PhoneStorage)=>{
    if (PhoneStorage.storageGb>=64){
        return true
    }}
  )
  console.log(mobilesBystorage)

  //OR
  const mobilesBystorage1 = mobiles.filter((PhoneStorage1)=>PhoneStorage1.storageGb>=64)
  console.log(mobilesBystorage1)

// filter mobilesbrand MI and samsung
const mobileByBrand = mobiles.filter((byBrand)=>byBrand.brand=="MI"|| byBrand.brand=="Samsung")
console.log(mobileByBrand)