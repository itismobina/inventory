import { Storage } from "../../../../scripts/utils/storage.js";
export default function searchCategories() {

    const [categoryName] = [
        document.querySelector("#category-name"),
    ];

    const addedcompaniess = Storage.get("categories") || [];
    const categoriesListDesktop = document.querySelector("#categories-search-result");
    const companiesListDesktop = document.querySelector("#companies-search-result");

    categoriesListDesktop.innerHTML = '';
    categoriesListDesktop.style.display = "flex";
    companiesListDesktop.style.display = "none";

    addedcompaniess.forEach(element => {
        const item = document.createElement("div");
        item.className = 'company-search-result-item';
        item.innerHTML = `<div>نام : ${element.name}</div>`;
        item.onclick = () => {
            categoryName.value = element.name;
            categoriesListDesktop.style.display = "none";
        };
        categoriesListDesktop.appendChild(item);
    });
}