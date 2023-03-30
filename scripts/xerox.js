// const { channel } = require("diagnostics_channel");


let ItemCardsDiv = document.getElementById("items-Cards");
let paginationDiv = document.getElementById("pagination");
let sortby = document.getElementById("filterByPrice");

async function fetchdata(){
    try{
        let promise = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products");

        let data = await promise.json();
    
        console.log(data.data);
        let newData = data.data;

        let page;
        let limit = 8;
        let ans1 = newData.slice(0,limit)
        

        DispalyData(ans1);

        for(let i = 1 ; i  < 8 ; i++){
            let btnsreturned = createBtn(i);
            btnsreturned.addEventListener("click",function(){
                console.log(btnsreturned.innerText)
                page = btnsreturned.innerText;
                let start = (Number(page)-1)*limit;
                let end = Number(page)*limit;
                let ans = newData.slice(start,end);

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
                // end of sorting->>>>



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



function DispalyData(data){
    ItemCardsDiv.innerHTML = "";
    data.forEach((ele) => {
        let Cards = document.createElement("div");


        let image = document.createElement("img");
        image.setAttribute("src",ele.img);

        let ImageDiv = document.createElement("div");
        ImageDiv.append(image);

        let brandName = document.createElement("h4");
        brandName.innerText = ele.brand.toUpperCase();

        let details = document.createElement("p");
        details.innerText = ele.details;

        let price = document.createElement("h5");

        price.innerText = `price:- ${ele.price}`

        let BtnCart = document.createElement("button");
        BtnCart.innerText = `ADD TO CART`;


        Cards.append(ImageDiv,brandName,details,price,BtnCart);

        ItemCardsDiv.append(Cards);
    });
}

function createBtn(i){
    let btns = document.createElement("button");
    btns.innerText = i;
    btns.setAttribute("id",i);
    return btns;
}

