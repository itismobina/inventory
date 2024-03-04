import { Storage } from "../../../scripts/utils/storage.js";


export default function getInputProduct() {
    const inputProductDesktop = document.querySelector("#input-product-list-desktop");
    const inputProductMobile = document.querySelector("#input-product-list-mobile");
    const inputProducts = Storage.get("input-products") || [];
    const products = Storage.get("products") || [];
    const final = [];
    
    inputProductDesktop.innerHTML = '';
    inputProductMobile.innerHTML = '';

    for (let i = 0; i < inputProducts.length; i++) {
        const product = inputProducts[i];
        for (let j = 0; j < products.length; j++) {
            const element = products[j];
            console.log(parseInt(product.index) === parseInt(element.index));
            if(parseInt(product.index) === parseInt(element.index)) {
                final.push(products[j])
            }
        }
    }

    final.forEach(element => {
        inputProductDesktop.innerHTML += `
        <div class="input-product-item-desktop">
            <div>${element.name}</div>
            <div>${element.company}</div>
            <div>${element.category}</div>
            <div>${element.tag}</div>
            <div>کالای ورودی</div>
        </div>`

        inputProductMobile.innerHTML += `
        <div class="input-product-item-mobile">
            <div>نام : ${element.name}</div>
            <div>شرکت : ${element.company}</div>
            <div>دسته بندی : ${element.category}</div>
            <div>تگ : ${element.tag}</div>
            <div>نوع کالا :     کالای ورودی</div>
        </div>`
    });
}

getInputProduct();