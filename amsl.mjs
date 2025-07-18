const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

function getShuffledAlphabet() {
    const shuffled = alphabet.slice().sort(() => Math.random() - 0.5);
    return shuffled;
}

// TODO: Add seed string support
export function getNewAsmlGrid() {
    
    const normalLines = alphabet.map((c) => {
        return [c, ...getShuffledAlphabet()];
    });
    const lastLine = [' ', ...getShuffledAlphabet()];
    return [...normalLines, lastLine];
}
