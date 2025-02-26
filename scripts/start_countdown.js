import { updateSecondes } from "./update_seconds.js";
import { secondes } from "./update_seconds.js"

export let interval = () => {};
export const countdownText = document.querySelector(".countdown-content .countdown p");

// Décrémente les secondes et affiche le timer
export const startCountdown = () => {
    let sec = secondes;
    interval = setInterval(() => {
        countdownText.innerText = sec;
        sec--;
        updateSecondes(sec);
    }, 1000);
}