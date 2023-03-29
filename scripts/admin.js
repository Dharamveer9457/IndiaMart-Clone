let url = " https://6398f4a7fe03352a94e2b91e.mockapi.io/Ecommerce "

let globaldata = null

hideupdatePriceForm()
function hideupdatePriceForm(){
     document.getElementById("updatePriceForm").style.display = "none"
}
function showupdatePriceForm(){
    document.getElementById("updatePriceForm").style.display = "block"
    document.getElementById("elemid").value=globaldata.id;
}
let priceUdateForm = document.getElementById("updatePriceForm")
priceUdateForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    updatePriceFun(globaldata.id)
})




async function fetchFun(){
    try {
        let res = await fetch(url)
    res = await res.json()
    console.log(res)
    display(res)
    } catch (error) {
        console.log(error)
    }
}
fetchFun()
let maincont = document.getElementById("maincont")
function display(data){
    maincont.innerHTML = ""
    data.map((elem)=>{
      let cont = document.createElement("div")
      let img = document.createElement("img")
      img.src = elem.image

    //   let des = document.createElement("p")
    //   des.innerText = elem.description

      let category = document.createElement("h3")
      category.innerText = elem.category

      let brand = document.createElement("h3")
      brand.innerText = elem.brand

      let price = document.createElement("h3")
      price.innerText = "Rs  "+elem.price

      let rating = document.createElement("h3")
      rating.innerText = elem.rating

      let del = document.createElement("button")
      del.innerText = "DELETE"
      del.addEventListener("click",()=>{
        delFun(elem.id)
      })

      let edit = document.createElement("button")
      edit.innerText = "EDIT"
    edit.addEventListener("click",()=>{
        globaldata = elem
        showupdatePriceForm()
        console.log("edit clicked")
    })

      cont.append(img,category,brand,price,rating,del,edit)

      maincont.append(cont)
    })
}

async function delFun(id){
try {
    let res = await fetch(`https://6398f4a7fe03352a94e2b91e.mockapi.io/Ecommerce/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    })
    res = await res.json()
    fetchFun()
} catch (error) {
    console.log(error)
}
}



let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
updateData()
})


async function updateData(){
try {
    let obj = {
        // id:document.getElementById("id").value,
        brand:document.getElementById("brand").value,
        category:document.getElementById("category").value,
        price:document.getElementById("price").value,
        rating:document.getElementById("rating").value,
        image:document.getElementById("img").value
    }
// console.log(obj)
    let res = await fetch('https://6398f4a7fe03352a94e2b91e.mockapi.io/Ecommerce/',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(obj)
    })
    res = await res.json()
    console.log("added")
fetchFun()
} catch (error) {
    console.log(error)
}
}

async function updatePriceFun(){
    showupdatePriceForm()
    console.log("update price clicked")
    try {
       let updateObj = {
        price:document.getElementById("updateprice").value
       }
        let res = await fetch(`https://6398f4a7fe03352a94e2b91e.mockapi.io/Ecommerce`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updateObj)
        
    })
    res = await res.json()
    fetchFun()
    } catch (error) {
        console.log(error)
    }
}