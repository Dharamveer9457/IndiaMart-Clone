let Submit=document.getElementById("Submit");
let Name=document.getElementById("name");
let Email=document.getElementById("email");
let Password=document.getElementById("password");
let Show=document.getElementById("show")



Submit.addEventListener("click",(e)=>{
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