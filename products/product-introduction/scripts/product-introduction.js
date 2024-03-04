import addProduct from "./addProduct.js";
import getPRoducts from "./getProducts.js";
import searchCompanies from "./company/searchCompanies.js";
import searchCategories from "./category/searchCategory.js";
import searchTags from "./tag/searchTags.js";
import searchLocations from "./location/searchLocation.js";

const modal = document.querySelector("#product-add-modal");
const modalBackground = document.querySelector("#product-close-modal");
const submitBtn = document.querySelector("#submit-btn");
const addBtn = document.querySelector("#add-product");
const companySearchBox = document.querySelector("#company-name");
const cotegorySearchBox = document.querySelector("#category-name");
const tagSearchBox = document.querySelector("#tag-name");
const locationSearchBox = document.querySelector("#location");

addBtn.addEventListener("click", () => modal.style.display = "flex");
modalBackground.addEventListener("click", () => modal.style.display = "none");
submitBtn.addEventListener("click", addProduct);

companySearchBox.addEventListener("focus", searchCompanies)
cotegorySearchBox.addEventListener("focus", searchCategories)
tagSearchBox.addEventListener("focus", searchTags)
locationSearchBox.addEventListener("focus", searchLocations)

getPRoducts();