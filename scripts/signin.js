let Submit=document.getElementById("Submit");
let Name=document.getElementById("name");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let Show=document.getElementById("show")



Submit.addEventListener("click",(e)=>{
    if(Name.value==="admin" && Email.value==="admin@gmail.com" && Password.value==="admin"){
        window.location.href="admin.html"
    }
e.preventDefault();

let Lpdata=JSON.parse(localStorage.getItem("form"))||[];
let user = Lpdata.find((data) => data.name === Name.value && data.email === Email.value && data.password === Password.value );
 console.log(user);
        if( user){
            window.location.href='index.html'
        }
        else{
            Show.innerText="Invalid Email or Password."
        }
})

//-------------------------------Login Functionality-----------------------------------------

let userlist = JSON.parse(localStorage.getItem("form"))||[]

let username = document.querySelector("#signin>a")

if(userlist.length>0){
 username.textContent = `${userlist[0].name}`
}

let userbtn = document.querySelector("#signin>img")

userbtn.addEventListener("click",()=>{
    window.location.href = "signin.html"
})

let cartbtn = document.querySelector("#cart>img")

cartbtn.addEventListener("click",()=>{
    if(userlist.length>0){
     window.location.href = "Cart.html"
    }else{
        alert("Please Login First")
        window.location.href = "signin.html"
    }
})

let shopbtn = document.querySelector("#shopping>img")

shopbtn.addEventListener("click",()=>{
    window.location.href = "xerox.html"
})


let homebtn1 = document.querySelector("#img1")
let homebtn2 = document.querySelector("#img2")

homebtn1.addEventListener('click',()=>{
    window.location.href = "index.html"
})

homebtn2.addEventListener('click',()=>{
    window.location.href = "index.html"
})
