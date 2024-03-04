import { Storage } from "../../../scripts/utils/storage.js";

export default function getReports() {
    const addedreports = Storage.get("report-products") || [];
    const reportListDesktop = document.querySelector("#report-list-desktop");
    const reportListMobile = document.querySelector("#report-list-mobile");

    console.log(addedreports);

    reportListDesktop.innerHTML = '';
    reportListMobile.innerHTML = '';

    const mobileItems = addedreports.map(element => `
        <div class="report-item-mobile">
            <div>نام : ${element.name}</div>
            <div>نام شرکت : ${element.company}</div>
            <div>نام دسته بندی : ${element.category}</div>
            <div>جانمایی : ${element.location}</div>
            <div>تگ : ${element.tag}</div>
            <div>توضیحات : ${element.description}</div>
        </div>`).join('');

    const desktopItems = addedreports.map(element => `
        <div class="report-item-desktop">
            <div>${element.name}</div>
            <div>${element.company}</div>
            <div>${element.category}</div>
            <div>${element.location}</div>
            <div>
                <div index=${element.index} class="input-product">ورود</div>
                <div index=${element.index} class="output-product">خروج</div>
            </div>
        </div>`).join('');

    reportListMobile.innerHTML = mobileItems;
    reportListDesktop.innerHTML = desktopItems;
}