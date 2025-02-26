import { turn, questionCount } from "./game.js";

const progressValue = document.querySelector(".progress-value");
//  Met à jour la barre de progression
export const updateProgress = () => {
    progressValue.style.transform = `scaleX(${(turn - questionCount) / (turn)})`;
}