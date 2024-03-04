import { Storage } from "../../../../scripts/utils/storage.js";

export default function searchTags() {

    const [productName, companyName, categoryName, tagName, description] = [
        document.querySelector("#product-name"),
        document.querySelector("#company-name"),
        document.querySelector("#category-name"),
        document.querySelector("#tag-name"),
        document.querySelector("#description")
    ];

    const addedcompaniess = Storage.get("tags") || [];
    const tagsListDesktop = document.querySelector("#tags-search-result");
    const companiesListDesktop = document.querySelector("#companies-search-result");
    const categoriesListDesktop = document.querySelector("#categories-search-result");

    tagsListDesktop.innerHTML = '';
    tagsListDesktop.style.display = "flex";
    companiesListDesktop.style.display = "none";
    categoriesListDesktop.style.display = "none";

    addedcompaniess.forEach(element => {
        const item = document.createElement("div");
        item.className = 'company-search-result-item';
        item.innerHTML = `<div>نام : ${element.tag}`;
        item.onclick = () => {
            tagName.value = element.tag;
            tagsListDesktop.style.display = "none";
        };
        tagsListDesktop.appendChild(item);
    });
}