import { Storage } from "../../../scripts/utils/storage.js";
import getLocations from "./getLocations.js";

export default function addLocation() {
    const [shelf, row, modal] = [
        document.querySelector("#location-number"),
        document.querySelector("#row"),
        document.querySelector("#location-add-modal")
    ];

    const shelfs = Storage.get("shelfs") || [];

    shelfs.push({
        shelf: shelf.value,
        row: row.value,
    });

    Storage.set("shelfs", shelfs);

    [shelf, row].forEach(
        input => (input.value = "")
    );

    modal.style.display = "none";
    getLocations();
}