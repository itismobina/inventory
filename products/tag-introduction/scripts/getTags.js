import { Storage } from "../../../scripts/utils/storage.js";

export default function getTags() {
    const tagListDesktop = document.querySelector("#tag-list-desktop");
    const tagListMobile = document.querySelector("#tag-list-mobile");
    const addedtags = Storage.get("tags") || [];

    tagListDesktop.innerHTML = '';
    tagListMobile.innerHTML = '';

    addedtags.forEach(element => {
        tagListDesktop.innerHTML += `
        <div class="tag-introduction-item-desktop">
            <div>${element.tag}</div>
            <div>${element.description}</div>
            <div class="tag-introduction-item-desktop-actions">
                <div style="cursor:pointer" index=${element.index} class="remove-tag-btn">
                    حذف              
                </div>
            </div>
        </div>`

        tagListMobile.innerHTML += `
        <div class="tag-introduction-item-mobile">
            <div>نام تگ : ${element.tag}</div>
            <div>توضیحات : ${element.description}</div>
            <div class="tag-introduction-item-mobile-actions">
                <div class="remove-tag-btn">حذف</div>
            </div>
        </div>`
    });
}