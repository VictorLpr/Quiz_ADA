import { interval, countdownText } from "./start_countdown.js";
import { updateSecondes } from "./update_seconds.js";

// Arrête le timer et le reset à 15sec
export const stopInterval = () => {
    clearInterval(interval);
    updateSecondes(14);
    countdownText.innerText = 15;
}