import { turn } from "./game.js";
import { score, updateScore } from "./update_score.js";

const quizContent = document.querySelector(".quiz");
const result = document.querySelector(".result");
const scoreContent = document.querySelector(".result #score");
const resultComment = document.querySelector(".result #resultComment");
const progressValue = document.querySelector(".progress-value");

export const displayResult = () => {
    quizContent.style.display = "none";
    result.style.display = "flex";
    scoreContent.innerText = `${score}/${turn}`;
    if (score < turn / 2) {
        resultComment.innerText = "nul(lllll) !!!";
    } else {
        resultComment.innerText = "Champion !";
    }
    progressValue.style.transform = `scaleX(1)`;
}