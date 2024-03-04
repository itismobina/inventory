import { Storage } from "../../../../scripts/utils/storage.js";

export default function searchCompanies() {

    const [companyName] = [
        document.querySelector("#company-name")
    ];

    const addedcompaniess = Storage.get("companies") || [];
    const companiesListDesktop = document.querySelector("#companies-search-result");
    const categoriesListDesktop = document.querySelector("#categories-search-result");
    const locationsListDesktop = document.querySelector("#locations-search-result");
    const tagsListDesktop = document.querySelector("#tags-search-result");

    companiesListDesktop.innerHTML = '';
    companiesListDesktop.style.display = "flex";
    categoriesListDesktop.style.display = "none";
    tagsListDesktop.style.display = "none";
    locationsListDesktop.style.display = "none";

    addedcompaniess.forEach(element => {
        const item = document.createElement("div");
        item.className = 'company-search-result-item';
        item.innerHTML = `<div>نام : ${element.name}</div><div>آدرس : ${element.address}</div>`;
        item.onclick = () => {
            companyName.value = element.name;
            companiesListDesktop.style.display = "none";
        };
        companiesListDesktop.appendChild(item);
    });
}