import { turn } from "./game.js";
import { score } from "./update_score.js";


const quizContent = document.querySelector(".quiz");
const result = document.querySelector(".result");
const scoreContent = document.querySelector(".result #score");
const resultComment = document.querySelector(".result #resultComment");
const progressValue = document.querySelector(".progress-value");

export const displayResult = (gNumber) => {
    quizContent.style.display = "none";
    result.style.display = "flex";
    scoreContent.innerText = `${score}/${turn}`;
    let player = JSON.parse(localStorage.getItem(gNumber));
    player.score = score;
    localStorage.setItem("gameNumber", gNumber)
    localStorage.setItem(gNumber, JSON.stringify(player));
    console.log(player)
    if (score < turn / 2) {
        resultComment.innerText = "nul(lllll) !!!";
    } else if (score <= (turn * 3 / 4)){
        resultComment.innerText = "OK tier";
    } else {
        resultComment.innerText = "Champion !";

    }
    progressValue.style.transform = `scaleX(1)`;
}