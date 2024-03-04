import { Storage } from "../../../scripts/utils/storage.js";
import getTags from "./getTags.js";

let removeBtn = document.querySelectorAll(".remove-tag-btn");

let tags = Storage.get("tags");

console.log("reloadi");

removeBtn.forEach((element) => {
    console.log(element);
    element.onclick = (e) => {
        tags = tags.filter(item => item.index !== parseInt(e.target.getAttribute("index")));
        Storage.set('tags', tags);
        getTags();     
    }
})
