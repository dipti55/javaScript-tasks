//Finding HTML Element by Id 

//  Read Text By ID - 
const header = document.getElementById("headerID");
console.log(header)                                  // <h1 id="headerID" class="headingClass">DOM Manipulation</h1>   

const TextHeading = document.getElementById("headerID").innerText;
console.log(TextHeading);                            //DOM Manipulation

const HTMLHeading1 = document.getElementById("headerID").innerHTML;
console.log(HTMLHeading1);                            //DOM Manipulation

// Write Text By ID -//want to change the text/content of the website using id
const header1 = document.getElementById("headerID");
header1.textContent = "New Text using .textContent";   //New Text using .textContent (text of website will change to "New Text using .textContent")
header1.innerHTML = "New Text using .innerHTML";       //New Text using .innerHTML   (text of website will change to "New Text using innerHTML")
header1.innerHTML = "<h5>New text in h5 tag</h5>";    //New text in h5 tag //change to h5 tag  
//OR
document.getElementById("headerID").innerHTML = "New Text without declaring variale";




// Finding HTML Elements by Tag Name
// Read Text By TagName -
const byTag = document.getElementsByTagName("p")
console.log(byTag[0].innerText)

// Write Text By Tag Name-//want to change the text/content of the website using tagName
byTag[0].innerText = "New Para1"
byTag[1].innerText = "New para2"

// OR
document.getElementsByTagName("p")[0].innerText = "Updated Para1"
document.getElementsByTagName("p")[1].innerText = "Updated Para2"




// Finding HTML Elements by Class Name
const byClass = document.getElementsByClassName("domclass")
console.log(byClass)                            //array of elements having classname domclass
console.log(byClass[0].innerText)               //Hello class1   //text of 1st element of array

// Write Text By Class Name-//want to change the text/content of the website using Class Name
document.getElementsByClassName("domclass")[0].innerText = "Updated using className"
document.getElementsByClassName("domclass")[1].innerText = "updated class" 

const domClassName = document.getElementsByClassName("domclass")
domClassName[0].innerText = "text changes"
domClassName[1].innerText = "text changes by className"




// Finding HTML Elements by querySelector
//id
const byQuery = document.querySelector("#headerID")
console.log(byQuery)
// byQuery.innerText = "querySelector"

//class
const item = document.querySelector(".domclass")
console.log(item)

//tag
const byTagg = document.querySelector("p")
console.log(byTagg)





// Finding HTML Elements by querySelectorAll
const item1 = document.querySelectorAll("#headerID")
// console.log(item1)
item1.innerText = "querySelector"


// Finding HTML elements by CSS selectors

document.querySelector(".headingClass").style.color="blue"
document.getElementsByClassName("domclass")[0].style.backgroundColor = "pink"
document.getElementsByClassName("paraclass")[0].style.fontSize =  "20px";
document.getElementById("headerID").innerText = "Goddesss"

// How to Add New Elements to the Document
let unorderedList = document.createElement("ul")
document.body.appendChild(unorderedList)

let listItem1 = document.createElement("li")
listItem1.innerText="Unity in Diversity"
unorderedList.appendChild(listItem1)


let listItem2 = document.createElement("li")
listItem2.innerText="Indian Food"
unorderedList.appendChild(listItem2)


//How to Use addEventListener() to Listen for Events on the Page

const button = document.getElementById("btn")
button.addEventListener("click", ()=>{
    alert("Thank you for clicking me")
})

const text = document.getElementById("textInput")
console.log(text)

text.addEventListener("focus", ()=>{
    console.log("Focus on me")
})

text.addEventListener("blur", ()=>{
    console.log("Blur event")
})

text.addEventListener("cut",()=>{
    console.log("cut event")
})

text.addEventListener("copy", ()=>{
    console.log("copy event")
})

text.addEventListener("paste", ()=>{
    console.log("Paste event")
})

text.addEventListener("keyup", ()=>{
    console.log("keyup event")
})

text.addEventListener("keydown",()=>{
    console.log("keydown event")
})


