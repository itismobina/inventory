import getTags from "./getTags.js";
import addTags from "./addTag.js"


let modal = document.querySelector("#tag-add-modal");
let modalBackground = document.querySelector("#tag-close-modal");

let submitBtn = document.querySelector("#submit-btn");
let addBtn = document.querySelector("#add-tag");


addBtn.addEventListener("click", function () {
    modal.style.display = "flex"
})

modalBackground.addEventListener("click", function() {
    modal.style.display = "none";
})

submitBtn.addEventListener("click", function () {
    addTags()
})

getTags();