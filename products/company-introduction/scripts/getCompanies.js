import { Storage } from "../../../scripts/utils/storage.js";

export default function getCompanies() {
    const companyListDesktop = document.querySelector("#company-list-desktop");
    const companyListMobile = document.querySelector("#company-list-mobile");

    const addedcompanys = Storage.get("companies") || [];

    const desktopItems = addedcompanys.map(element => `
        <div class="company-introduction-item-desktop">
            <div>${element.name}</div>
            <div>${element.address}</div>
            <div>${element.phone}</div>
            <div>${element.description}</div>
        </div>`).join('');

    const mobileItems = addedcompanys.map(element => `
        <div class="company-introduction-item-mobile">
            <div>نام : ${element.name}</div>
            <div>آدرس : ${element.address}</div>
            <div>شماره تلفن : ${element.phone}</div>
            <div>توضیحات : ${element.description}</div>
        </div>`).join('');

    companyListDesktop.innerHTML = desktopItems;
    companyListMobile.innerHTML = mobileItems;
}