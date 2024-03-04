import { Storage } from "../../../scripts/utils/storage.js";


export default function getoutputProduct() {
    const outputProductDesktop = document.querySelector("#output-product-list-desktop");
    const outputProductMobile = document.querySelector("#output-product-list-mobile");
    const outputProducts = Storage.get("output-products") || [];
    const products = Storage.get("products") || [];
    const final = [];
    
    outputProductDesktop.innerHTML = '';
    outputProductMobile.innerHTML = '';

    for (let i = 0; i < outputProducts.length; i++) {
        const product = outputProducts[i];
        for (let j = 0; j < products.length; j++) {
            const element = products[j];
            console.log(parseInt(product.index) === parseInt(element.index));
            if(parseInt(product.index) === parseInt(element.index)) {
                final.push(products[j])
            }
        }
    }

    final.forEach(element => {
        outputProductDesktop.innerHTML += `
        <div class="output-product-item-desktop">
            <div>${element.name}</div>
            <div>${element.company}</div>
            <div>${element.category}</div>
            <div>${element.tag}</div>
            <div>کالای خروجی</div>
        </div>`

        outputProductMobile.innerHTML += `
        <div class="output-product-item-mobile">
            <div>نام : ${element.name}</div>
            <div>شرکت : ${element.company}</div>
            <div>دسته بندی : ${element.category}</div>
            <div>تگ : ${element.tag}</div>
            <div>نوع کالا :     کالای خروجی</div>
        </div>`
    });
}

getoutputProduct();