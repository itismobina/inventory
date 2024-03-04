import { Storage } from "../../../scripts/utils/storage.js";
import getReports from "./getReports.js";

let inputBtn = document.querySelectorAll(".input-product");
let outputBtn = document.querySelectorAll(".output-product");
let reportProducts = Storage.get("report-products") || [];

inputBtn.forEach((item) => {
    const inputProducts = Storage.get("input-products") || [];

    item.addEventListener("click", function (e) {
        console.log("hello");

        reportProducts = reportProducts.filter(item => item.index !== parseInt(e.target.getAttribute("index")));
        Storage.set('report-products', reportProducts);

        inputProducts.push({
            index: e.target.getAttribute("index")
        });

        getReports()

        Storage.set("input-products", inputProducts);
    })
})


outputBtn.forEach((item) => {
    item.addEventListener("click", function (e) {
        const outputProducts = Storage.get("output-products") || [];

        reportProducts = reportProducts.filter(item => item.index !== parseInt(e.target.getAttribute("index")));
        Storage.set('report-products', reportProducts);

        outputProducts.push({
            index: e.target.getAttribute("index")
        });

        
        Storage.set("output-products", outputProducts);
        
        getReports();
    })
})