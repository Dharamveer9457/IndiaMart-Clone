
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
