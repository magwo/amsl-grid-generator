
import { present } from "./presenter.mjs"
present();

document.getElementById('randomize-button').addEventListener('click', () => {
    runScrambleEffect();
});

async function runScrambleEffect() {
    document.getElementById('randomize-button').setAttribute('disabled', true);
    let delayMillis = 10;

    while(delayMillis < 150) {
        present();
        delayMillis *= 1.1;
        delayMillis += 2;
        await new Promise(resolve => setTimeout(resolve, delayMillis))
    }
    document.getElementById('randomize-button').removeAttribute('disabled');
}