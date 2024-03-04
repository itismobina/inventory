import { Storage } from "../../../../scripts/utils/storage.js";

export default function searchLocations() {

    const [location] = [
        document.querySelector("#location"),
    ];

    const addedcompaniess = Storage.get("shelfs") || [];
    const [locations, tags, companies, categories] = [
        document.querySelector("#locations-search-result"),
        document.querySelector("#tags-search-result"),
        document.querySelector("#companies-search-result"),
        document.querySelector("#categories-search-result"),
    ]

    locations.innerHTML = '';
    locations.style.display = "flex";
    tags.style.display = "none";
    companies.style.display = "none";
    categories.style.display = "none";

    addedcompaniess.forEach(element => {
        const item = document.createElement("div");
        item.className = 'company-search-result-item';
        item.innerHTML = `<div>قفسه : ${element.shelf}</div><div>ردیف : ${element.row}</div>`;
        item.onclick = () => {
            location.value = "قفسه : " + element.shelf + " - " + "ردیف : " + element.row;
            locations.style.display = "none";
        };
        locations.appendChild(item);
    });
}