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

window.addEventListener("scroll", counterReveal);

function counterReveal() {
    var numbersDiv = document.querySelector(".numbersDiv");
    var windowHeight = window.innerHeight;
    var numbersDivTop = numbersDiv.getBoundingClientRect().top;
    var revealPoint = 100;

    if (numbersDivTop < windowHeight - revealPoint) {
        numbersDiv.classList.add("active");
        var speed = 200;
        var contentNumber = document.querySelectorAll(".contentNumber");

        contentNumber.forEach((curElement) => {
            const updateNum = () => {
                const targetNum = parseInt(curElement.dataset.number)
                const initialNum = parseInt(curElement.innerText);
                const incrementNum = Math.ceil(targetNum / speed);
                const incrementedNum = initialNum + incrementNum

                if (initialNum < targetNum) {
                    curElement.innerText = `${incrementedNum}+`;

                    setTimeout(updateNum, 1);
                }
            }

            updateNum();
        });
    } else {
        numbersDiv.classList.remove("active");
        var contentNumber = document.querySelectorAll(".contentNumber");
        contentNumber.forEach((curElement) => {
            curElement.innerText = `0+`
        })
    }
}


window.addEventListener("scroll", cardReveal);

function cardReveal() {
    var cards = document.querySelectorAll(".cardReveal");
    for (var i = 0; i < cards.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = cards[i].getBoundingClientRect().top;
        var revealPoint = 20;

        if (revealTop < windowHeight - revealPoint) {
            cards[i].classList.add("active");
        } else {
            cards[i].classList.remove("active");
        }
    }
}

cardReveal()

window.addEventListener("scroll", capabilitiesReveal);

function capabilitiesReveal() {
    var capabilities = document.querySelector(".capabilities");
    var windowHeight = window.innerHeight;
    var capabilitiesTop = capabilities.getBoundingClientRect().top;
    var revealPoint = 200;
    if (capabilitiesTop < windowHeight - revealPoint) {
        capabilities.classList.remove("inactive");
        capabilities.classList.add("active");

    } else {
        capabilities.classList.remove("active");
        capabilities.classList.add("inactive");
    }

}


window.addEventListener("scroll", productReveal);

function productReveal() {
    var containerDiv = document.querySelectorAll(".containerDiv");
    var windowHeight = window.innerHeight;
    var revealPoint = 150;
    console.log(containerDiv);
    containerDiv.forEach((curDiv) => {
        var curDivTop = curDiv.getBoundingClientRect().top;
        if (curDivTop < windowHeight - revealPoint) {
            curDiv.classList.remove("inactive");
            curDiv.classList.add("active");
        } else {
            curDiv.classList.remove("active");
            curDiv.classList.add("inactive");
        }
    })
};

// var businessCategoryParent = document.querySelector(".businessCategoryParent");

// function changeBackground(num) {
//     if (num == 1) {
//         businessCategoryParent.style.background = `url("./assets/4.jpg")`;
//     } else if (num == 2) {
//         businessCategoryParent.style.background = `url("./assets/productstrength1.jpg")`;
//     } else if (num == 3 ) {
//         businessCategoryParent.style.background = `url("./assets/ourvalues1.jpg")`;

//     }
// }