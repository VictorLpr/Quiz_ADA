import { updateSecondes } from "./update_seconds.js";
import { secondes } from "./update_seconds.js"

export let interval = () => {};
export const countdownText = document.querySelector(".countdown-content .countdown p");

export const startCountdown = () => {
    let sec = secondes;
    interval = setInterval(() => {
        countdownText.innerText = sec;
        sec--;
        updateSecondes(sec);
    }, 1000);
}