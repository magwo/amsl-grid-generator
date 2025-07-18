import { getNewAsmlGrid } from "./amsl.mjs";

export function present() {
    document.getElementById('grid').innerHTML = getNewAsmlGrid();
}