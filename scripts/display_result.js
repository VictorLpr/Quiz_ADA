import { turn } from "./game.js";
import { score } from "./update_score.js";


const quizContent = document.querySelector(".quiz");
const result = document.querySelector(".result");
const scoreContent = document.querySelector(".result #score");
const resultComment = document.querySelector(".result #resultComment");
const progressValue = document.querySelector(".progress-value");

// Affiche le résultat du Quiz
export const displayResult = (gNumber) => {
    quizContent.style.display = "none";
    result.style.display = "flex";
    scoreContent.innerText = `${score}/${turn}`;
    // Met à jour le score dans le Local Storage
    let player = JSON.parse(localStorage.getItem(gNumber));
    player.score = score;
    localStorage.setItem("gameNumber", gNumber)
    localStorage.setItem(gNumber, JSON.stringify(player));
    // Affiche un message et lance un audio personnalisé en fonction du score
    if (score < turn / 2) {
        resultComment.innerText = "nul(lllll) !!!";
        document.querySelector("#lose-audio").play();
    } else if (score <= (turn * 3 / 4)){
        resultComment.innerText = "OK tier";
    } else {
        resultComment.innerText = "Champion !";
        document.querySelector("#win-audio").play();

    }
    progressValue.style.transform = `scaleX(1)`;
}