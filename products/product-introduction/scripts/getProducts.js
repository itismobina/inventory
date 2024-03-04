import { Storage } from "../../../scripts/utils/storage.js";

export default function getPRoducts() {
    const addedProducts = Storage.get("products") || [];
    const productListDesktop = document.querySelector("#product-list-desktop");
    const productListMobile = document.querySelector("#product-list-mobile");

    productListDesktop.innerHTML = '';
    productListMobile.innerHTML = '';

    const mobileItems = addedProducts.map(element => `
        <div class="product-introduction-item-mobile">
            <div>نام : ${element.name}</div>
            <div>نام شرکت : ${element.company}</div>
            <div>نام دسته بندی : ${element.category}</div>
            <div>جانمایی : ${element.location}</div>
            <div>تگ : ${element.tag}</div>
            <div>توضیحات : ${element.description}</div>
        </div>`).join('');

    const desktopItems = addedProducts.map(element => `
        <div class="product-introduction-item-desktop">
            <div>${element.name}</div>
            <div>${element.company}</div>
            <div>${element.category}</div>
            <div>${element.location}</div>
            <div>${element.tag}</div>
            <div>${element.description}</div>
        </div>`).join('');

    productListMobile.innerHTML = mobileItems;
    productListDesktop.innerHTML = desktopItems;
}