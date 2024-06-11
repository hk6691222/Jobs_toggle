var productData = {
    id: "1",
    name: "Men Navy Blue Solid Sweatshirt",
    preview:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    previewPhotos: [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg",
    ],
    description:
        "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    size: [1, 1, 0, 1, 0],
    isAccessory: false,
    brand: "United Colors of Benetton",
    price: 2599,
};

var img = document.getElementById("img");
var details = document.getElementById("details");
var productUnits = document.querySelector(".product-units");

// Left Img start
var leftImg = document.createElement("img");
leftImg.setAttribute("id", "mainImg");
leftImg.src = productData.preview;
img.appendChild(leftImg);
// Left Img start end

// product details div
// title
var title = document.createElement("h1");
title.className = "h1";
title.innerText = productData.name;
productUnits.appendChild(title);

// brand
var brand = document.createElement("h4");
brand.className = "h4";
brand.innerText = productData.brand;
productUnits.appendChild(brand);

// price
var price = document.createElement("h3");
price.className = "price";
price.innerText = "price: Rs";
productUnits.appendChild(price);

// price value span
var priceValue = document.createElement("span");
priceValue.className = "value";
priceValue.innerText = productData.price;
price.appendChild(priceValue);

// Description
var Description = document.createElement("h3");
Description.className = "Description";
Description.innerText = "Description";
productUnits.appendChild(Description);

// Description p
var DescriptionP = document.createElement("p");
DescriptionP.className = "description";
DescriptionP.innerText = productData.description;
productUnits.appendChild(DescriptionP);

// product preview div
var productPreview = document.createElement("div");
productPreview.className = "product-preview";
productUnits.appendChild(productPreview);

// product preview text
var preText = document.createElement("h3");
preText.innerText = "Product Preview";
productPreview.appendChild(preText);

// preview img div
var PreviewImg = document.createElement("div");
PreviewImg.setAttribute("id", "preview-img");
console.log(PreviewImg);
PreviewImg.className = "preview-img";
productPreview.appendChild(PreviewImg);

var previewPhotos = productData.previewPhotos;

var previewImg = document.getElementById("preview-img");

for (var i = 0; i < previewPhotos.length; i++) {
    if (i == 0) {
        previewImg.innerHTML += ` <img  id ="img${i}" onclick =  "smallImageClicked('img${i}')"   class = "active" src= ${previewPhotos[i]}  /> `;
    } else {
        previewImg.innerHTML += ` <img  id = "img${i}" onclick =  "smallImageClicked('img${i}')" src= ${previewPhotos[i]}  /> `;
    }
}

var mainLeftImg = document.getElementById("mainImg");

var currentActiveId = "img0";
function smallImageClicked(e) {
    var previewSmallImg = document.getElementById(e);
    mainLeftImg.src = previewSmallImg.src;
    var newEl = e;
    previewSmallImg.className = "active";
    var currentOnActiveEl = document.getElementById(currentActiveId);
    currentOnActiveEl.className = "non";
    currentActiveId = newEl;
}

button
var button = document.createElement("button");
button.className = "btn";
button.innerText = "add to cart";
detailsDiv.appendChild(button);
