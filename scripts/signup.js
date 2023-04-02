let Submit=document.getElementById("Submit");
let Name=document.getElementById("name");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let Cpass=document.getElementById("cpass");
let Show=document.getElementById("show")

let Lpdata=JSON.parse(localStorage.getItem("form"))||[]

Submit.addEventListener("click",(e)=>{
e.preventDefault();

if(Password.value!==Cpass.value){
   Show.innerText="Password do not match."
   return
}

if(Password.value.length < 6){
Show.innerText="Please enter at least 6 characters."
return
}


let formdata={
    name:Name.value,
    email:Email.value,
    password:Password.value,
    confirmpassword:Cpass.value
}

let emailexist=false;

for(let i=0; i<Lpdata.length; i++){
    if(Lpdata[i].email===Email.value){
        emailexist=true;
        break;
    }
}
if(emailexist){
   Show.innerText="Email already exists."
   return
}
else{
    window.location.href="signin.html"
}

Lpdata.push(formdata)
localStorage.setItem("form",JSON.stringify(Lpdata))

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