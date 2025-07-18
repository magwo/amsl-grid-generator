import { getNewAsmlGrid } from "./amsl.mjs";

function gridToMarkup(grid) {
    return grid.map((line) => {
        const boxes = line.map((character) => {
            return `<div class="box">${character}</div>`;
        });
        return `<div class="grid-line">${boxes.join('')}</div>`
    }).join('');
}

export function present() {
    const grid = getNewAsmlGrid();
    document.getElementById('grid').innerHTML = gridToMarkup(grid);
}