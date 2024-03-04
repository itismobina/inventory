import { Storage } from "../../../scripts/utils/storage.js";
import loadProducts from "./getProducts.js";

export default function addProduct() {
    const [productName, companyName, categoryName, tagName,location, description] = [
        document.querySelector("#product-name"),
        document.querySelector("#company-name"),
        document.querySelector("#category-name"),
        document.querySelector("#tag-name"),
        document.querySelector("#location"),
        document.querySelector("#description")
    ];

    const modal = document.querySelector("#product-add-modal");

    const products = Storage.get("products") || [];

    products.push({
        name: productName.value,
        company: companyName.value,
        category: categoryName.value,
        tag: tagName.value,
        location : location.value,
        description: description.value,
    });

    Storage.set("products", products);

    [productName, companyName, categoryName, tagName,location, description].forEach(
        input => (input.value = "")
    );

    modal.style.display = "none";

    loadProducts();
}