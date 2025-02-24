import { turn, questionCount } from "./game.js";

const progressValue = document.querySelector(".progress-value");

export const updateProgress = () => {
    progressValue.style.transform = `scaleX(${(turn - questionCount) / (turn)})`;
}