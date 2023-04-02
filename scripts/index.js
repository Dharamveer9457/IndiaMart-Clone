
let img1 = "https://hm.imimg.com/imhome_gifs/27th_anniversary.jpg"
let img2 =  "https://hm.imimg.com/imhome_gifs/passion-business.jpg"

var slideshowimages = [img1,img2]

let slideshowBox = document.querySelector("#slideshow")
let img = document.createElement('img')

let i=0;
setInterval(function(){
    img.src = slideshowimages[i]
    i++
    if(i>=slideshowimages.length){
        i=0
    }
    slideshowBox.appendChild(img)
},1500)

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
    // if(userlist.length>0){
    //  window.location.href = "Cart.html"
    // }else{
    //     alert("Please Login First")
    // }
    window.location.href = "Cart.html"
})

let shopbtn = document.querySelector("#shopping>img")

shopbtn.addEventListener("click",()=>{
    window.location.href = "xerox.html"
})


let homebtn = document.querySelector("nav:nth-child(1)")

cartbtn.addEventListener("click",()=>{
    window.location.href = "Cart.html"
})


