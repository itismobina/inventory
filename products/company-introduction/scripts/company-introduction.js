import addCompany from "./addCompany.js"
import getCompanies from "./getCompanies.js";

const modal = document.querySelector("#company-add-modal");
const modalBackground = document.querySelector("#company-close-modal");
const submitBtn = document.querySelector("#submit-btn");
const addBtn = document.querySelector("#add-company");

function openModal() {
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

addBtn.addEventListener("click", openModal);
modalBackground.addEventListener("click", closeModal);

submitBtn.addEventListener("click", addCompany);

getCompanies();