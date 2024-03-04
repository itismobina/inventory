const productTab = document.querySelector("#product-tab");
const storeTab = document.querySelector("#store-tab");


productTab.addEventListener("click", function (){
    if(productTab.classList.contains("hide")) {
        productTab.classList.remove("hide");
    } else {
        productTab.classList.add("hide");
    }
});

storeTab.addEventListener("click", function (){
    if(storeTab.classList.contains("show")) {
        storeTab.classList.remove("show");
    } else {
        storeTab.classList.add("show");
    }
});