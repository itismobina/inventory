import { Storage } from "../../../scripts/utils/storage.js";
import getCategories from "./getCategories.js";

export default function addCategory() {
    const [categoryName, description, modal] = [
        document.querySelector("#category-name"),
        document.querySelector("#description"),
        document.querySelector("#category-add-modal")
    ];

    const categories = Storage.get("categories") || [];

    categories.push({
        name: categoryName.value,
        description: description.value,
    });

    Storage.set("categories", categories);

    [categoryName, description].forEach(
        input => (input.value = "")
    );

    modal.style.display = "none";

    getCategories();
}