


function getRandomArrayIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

function getRandomArrayItem(arr) {
    return arr[getRandomArrayIndex(arr)];
}


// TODO: Add seed string support
export function getNewAsmlGrid() {
    // const lines = [];
    
    return [['A', 'B', 'C'], ['A', 'B', 'C']];
}
