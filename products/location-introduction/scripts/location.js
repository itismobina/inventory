import addLocation from "./addLocation.js";
import getLocations from "./getLocations.js";

const modal = document.querySelector("#location-add-modal");
const modalBackground = document.querySelector("#location-close-modal");
const submitBtn = document.querySelector("#submit-btn");
const addBtn = document.querySelector("#add-location");

addBtn.addEventListener("click", () => modal.style.display = "flex");
modalBackground.addEventListener("click", () => modal.style.display = "none");
submitBtn.addEventListener("click", addLocation);

getLocations();