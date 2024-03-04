import { Storage } from "../../../scripts/utils/storage.js";

export default function getCategories() {
    const categoryListDesktop = document.querySelector("#category-list-desktop");
    const categoryListMobile = document.querySelector("#category-list-mobile");

    const addedcategorys = Storage.get("categories") || [];

    categoryListDesktop.innerHTML = '';
    categoryListMobile.innerHTML = '';

    const desktopItems = addedcategorys.map(element => `
        <div class="category-introduction-item-desktop">
            <div>${element.name}</div>
            <div>${element.description}</div>
        </div>`).join('');

    const mobileItems = addedcategorys.map(element => `
        <div class="category-introduction-item-mobile">
            <div>نام : ${element.name}</div>
            <div>توضیحات : ${element.description}</div>
        </div>`).join('');

    categoryListDesktop.innerHTML = desktopItems;
    categoryListMobile.innerHTML = mobileItems;
}