let data = localStorage.getItem("products") || null;

let itemsDiv = document.getElementById("items-Cards");

async function FetchAPIData(){
    let response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
    let data = await response.json();
    console.log(data.data);

    DisplayData(data.data)
}

FetchAPIData();


function DisplayData(data){
    data.forEach((ele) => {
        let card = document.createElement("div");

        let image = document.createElement("img");
        image.setAttribute("src",ele.img);

        let imageDiv = document.createElement("div")
        imageDiv.append(image) 

        let nameOfProd = document.createElement("h3");
        nameOfProd.innerText = ele.brand;

        let description = document.createElement("p");
        description.innerText = ele.details;

        let price = document.createElement("p")
        price.innerText = `Price:-  $${ele.price}`;

        let buttonAddcart = document.createElement("button");
        buttonAddcart.innerText = "Add To Cart"

        
        card.append(imageDiv,nameOfProd,description,price,buttonAddcart);

        itemsDiv.append(card)
    });
}



