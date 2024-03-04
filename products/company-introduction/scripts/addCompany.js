import { Storage } from "../../../scripts/utils/storage.js";
import getCompanies from "./getCompanies.js";

export default function addcompany() {
    const [companyName, address, phone, description, modal] = [
        document.querySelector("#company-name"),
        document.querySelector("#address"),
        document.querySelector("#phone"),
        document.querySelector("#description"),
        document.querySelector("#company-add-modal")
    ];

    const companies = Storage.get("companies") || [];

    companies.push({
        name: companyName.value,
        address: address.value,
        phone: phone.value,
        description: description.value,
    });

    Storage.set("companies", companies);

    [companyName, address, phone, description].forEach(
        input => (input.value = "")
    );

    modal.style.display = "none";

    getCompanies();
}