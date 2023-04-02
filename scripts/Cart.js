let cartcont=document.getElementById("cart-container");
let Cart = JSON.parse(localStorage.getItem("cart"))||[];
let button=document.getElementById("BTN")
let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let hname=document.getElementById("Hname")
let City =document.getElementById("City")
let pincode=document.getElementById("Pincode")
let state=document.getElementById("State")
button.addEventListener("click",function(){
if(fname.value==""||lname.value==""||hname.value==""||City.value==""||pincode.value==""||state.value==""){
    alert("Fill all detail")
}else{
  window.location.href = "payment.html"
}
})


console.log(Cart)
DisplayProduct()
    
    function DisplayProduct(data) {
      let total=document.getElementById("cart-total")
      let cartitem=document.getElementById("cart-item")
      let pay=document.getElementById("topay")
      cartcont.innerHTML = "";
      Cart.forEach((product) => {
        let card = document.createElement("div");
    
        let image = document.createElement("img");
        let brand = document.createElement("h3");
        
      
        let description = document.createElement("p");
        let quantity = document.createElement("span");
        let price = document.createElement("h4");
        let Remove = document.createElement("button");
        let Increment = document.createElement("button");
        let Decrement = document.createElement("button");
        quantity.textContent=product.quantity
        Remove.textContent = "Remove";
        Increment.textContent="+"
        Decrement.textContent="-"
        image.src = product.image;
        brand.textContent = product.brand;
        
        price.textContent = `₹${product.price}`;
        description.textContent = product.description;
        
      
        Remove.addEventListener("click", () => {
          Cart=Cart.filter((ele)=>{
              return ele.id!==product.id
            })
            localStorage.setItem("cart",JSON.stringify(Cart))
            DisplayProduct()
        });
        Increment.addEventListener("click", () => {
          product=product.quantity++
          localStorage.setItem("cart",JSON.stringify(Cart))
          DisplayProduct()
        });
        Decrement.addEventListener("click", () => {
          if(product.quantity>1){
            product=product.quantity--
          localStorage.setItem("cart",JSON.stringify(Cart))
          DisplayProduct()
          }
        });
        card.append(image ,brand, description,price,Increment,quantity,Decrement,Remove);
        cartcont.append(card);
      });

      let sum=0
      for(let i=0;i<Cart.length;i++){
        sum+=Cart[i].price*Cart[i].quantity
      }
   total.textContent=sum
   let sum1=0
   for(let i=0;i<Cart.length;i++){
     sum1+=Cart[i].quantity
   }
cartitem.textContent=sum1
pay.textContent=sum+40

let proceedBtn = document.querySelector

}


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
