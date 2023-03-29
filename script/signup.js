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