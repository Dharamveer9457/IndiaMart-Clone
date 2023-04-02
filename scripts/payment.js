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
        } else {
            alert("Invalid OTP. Please try again!");
        }
}

})