import addCategory from "./addCategory.js";
import getCategories from "./getCategories.js";


const modal = document.querySelector("#category-add-modal");
const modalBackground = document.querySelector("#category-close-modal");
const submitBtn = document.querySelector("#submit-btn");
const addBtn = document.querySelector("#add-category");

addBtn.addEventListener("click", () => modal.style.display = "flex");
modalBackground.addEventListener("click", () => modal.style.display = "none");
submitBtn.addEventListener("click", addCategory);

getCategories();