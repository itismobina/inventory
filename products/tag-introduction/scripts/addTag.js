import { Storage } from "../../../scripts/utils/storage.js";
import loadtags from "./getTags.js";

const tagName = document.querySelector("#tag-name");
const description = document.querySelector("#description");
const modal = document.querySelector("#tag-add-modal");
const tags = Storage.get("tags") || [];

export default function addTags() {
    tags.push({ index : Date.now(),tag: tagName.value, description: description.value });
    Storage.set("tags", tags);
    tagName.value = "";
    modal.style.display = "none";
    loadtags();
}