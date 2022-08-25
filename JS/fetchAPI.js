// JavaScript Fetch API

fetch("https://api.github.com/users")
.then(res=>res.json())
.then(data=>{
    console.log(data)
})

.catch((error)=>console.log(error))