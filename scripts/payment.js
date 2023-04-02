let Payment=document.getElementsByClassName("total")
let button=document.getElementById("click");
let Credit=document.getElementById("Credit");
let Debit=document.getElementById("Debit");
let Name=document.getElementById("name");
let cardNumber=document.getElementById("number");
let Expiry=document.getElementById("Date");


button.addEventListener("click",(e)=>{
e.preventDefault()
if(Credit.checked===false && Debit.checked===false && Name.value==="" && cardNumber.value==="" && Expiry.value===""){
    alert("Please fill out the all details")
}
else{
    let OTP = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000; 
        alert("Your OTP is: " + OTP);
        let inputOTP = prompt("Please enter the OTP received on your registered mobile number:"); 
        if (inputOTP == OTP) {
            alert("Your order has been placed successfully!");
            window.location.href = "index.html"
        } else {
            alert("Invalid OTP. Please try again!");
        }
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