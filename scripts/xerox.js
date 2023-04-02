// const { channel } = require("diagnostics_channel");


let ItemCardsDiv = document.getElementById("items-Cards");
let paginationDiv = document.getElementById("pagination");
let sortby = document.getElementById("filterByPrice");
let sectionData = JSON.parse(localStorage.getItem("splicedItem")) || [];
let TotalProducts = document.getElementById("TotalProd")
let checkboxValue = document.querySelectorAll(".checkboxbtn");
let filterArr = [];

for(var checkbox of checkboxValue){
    checkbox.addEventListener("click",function(){
        if(this.checked == true){
            filterArr.push(this.value)
        }
        else if(this.checked == false){
            for(let i = 0 ; i < filterArr.length ; i++){
                if(filterArr[i] === this.value){
                    filterArr.splice(i,1);
                }
            }
        }
        let ans = sectionData.filter((ele)=>{
            if(filterArr.includes(ele.brand.toUpperCase())){
                return true
            };
        })

        console.log(filterArr)
        DispalyData(ans)
        console.log(ans)
    })
}



async function fetchdata(){
    try{
        let promise = await fetch("https://6398f4a7fe03352a94e2b91e.mockapi.io/Ecommerce");

        let data = await promise.json();
    
        console.log(data);
        
        let newData = data.filter((ele)=>{
           if(ele.category === "Xerox Machines"){
            return true
           }
        })
        TotalProducts.innerText = newData.length+" ";

        let page;
        let limit = 18;
        let ans1 = newData.slice(0,limit)
        

        DispalyData(ans1);

        for(let i = 1 ; i  < 8 ; i++){
            filterArr = []
            let btnsreturned = createBtn(i);
            btnsreturned.addEventListener("click",function(){
                console.log(btnsreturned.innerText)
                page = btnsreturned.innerText;
                let start = (Number(page)-1)*limit;
                let end = Number(page)*limit;
                let ans = newData.slice(start,end);
                localStorage.setItem("splicedItem",JSON.stringify(ans))
                // sorting event for sorting the data with respect to price in ascending or descending order;

                sortby.addEventListener("change",function(){
                    // console.log(ans)
                    if(sortby.value === "L"){
                        ans.sort((a,b)=> a.price-b.price)
                        console.log(ans.price)
                        DispalyData(ans)
                    }
                    else if(sortby.value === "H"){
                        console.log(sortby.value)
                        let ans2 = ans.sort((a,b)=>b.price - a.price)
                        console.log(ans2)
                        DispalyData(ans2)
                    }
                })
                // end of sorting->>>>>>>
                DispalyData(ans)

            })
            paginationDiv.append(btnsreturned)
        }
    }
    catch(e){
        console.log(e);
    }
}

fetchdata();

let Cartarray = JSON.parse(localStorage.getItem("cart"))||[];

function DispalyData(data){
    ItemCardsDiv.innerHTML = "";
    data.forEach((ele) => {
        let Cards = document.createElement("div");


        let image = document.createElement("img");
        image.setAttribute("src",ele.image);

        let ImageDiv = document.createElement("div");
        ImageDiv.append(image);

        let brandName = document.createElement("h4");
        brandName.innerText = ele.brand.toUpperCase();

        let details = document.createElement("p");
        details.innerText = ele.description;

        let price = document.createElement("h5");

        price.innerText = `price:- ${ele.price}`

        let BtnCart = document.createElement("button");
        BtnCart.innerText = `ADD TO CART`;

        // BtnCart.addEventListener("click",function(){
        //     Cartarray.push(ele)
        //     localStorage.setItem("cart",JSON.stringify(Cartarray))
         
        // })
        BtnCart.addEventListener("click",()=>{
            if(checkDuplicate(ele)){
              alert("Product Already in Cart")
            }else{
              Cartarray.push({...ele,quantity:1})
              localStorage.setItem("cart",JSON.stringify(Cartarray))
              alert("Product Added To Cart")

            }
        })

        Cards.append(ImageDiv,brandName,details,price,BtnCart);

        ItemCardsDiv.append(Cards);
    });
}
function  checkDuplicate(ele){
    for(let i=0;i<Cartarray.length;i++){
      if(Cartarray[i].id===ele.id){
        return true
      }
    }
    return false
}

function createBtn(i){
    let btns = document.createElement("button");
    btns.innerText = i;
    btns.setAttribute("id",i);
    return btns;
}

