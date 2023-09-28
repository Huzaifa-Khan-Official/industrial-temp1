var products = [
    {
        name: "Bedding",
        img: "./assets/productCategory1.jpg"
    },
    {
        name: "Denim",
        img: "./assets/productCategory2.jpg"
    },
    {
        name: "Fabrics",
        img: "./assets/productCategory3.jpg"
    },
    {
        name: "Kitchen",
        img: "./assets/productCategory4.jpg"
    },
    {
        name: "Window",
        img: "./assets/productCategory5.jpg"
    },
    {
        name: "Bath",
        img: "./assets/productCategory6.jpg"
    }
];

var productCategoryRow = document.getElementById("productCategoryRow")

for (var i = 0; i < products.length; i++) {
    var productName = products[i].name;
    var productImg = products[i].img;
    var containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "col-12 col-md-4 containerDiv");
    containerDiv.setAttribute("data-aos", "fade-left");
    containerDiv.setAttribute("data-aos-offset", "200");
    containerDiv.setAttribute("data-aos-duration", "9000");
    containerDiv.innerHTML = `
    <div class="productContainer" style="background-image: url(${productImg});">
        <div class="contentDivContainer">
            <div class="contentDiv">
                <h3>${productName}</h3>
                <a href="#">
                    View
                    <span><i class="fa-solid fa-arrow-right fa-xl" style="color: #ffffff;"></i></span>
                </a>
            </div>
        </div>
    </div>
    `;

    productCategoryRow.appendChild(containerDiv);
}



  