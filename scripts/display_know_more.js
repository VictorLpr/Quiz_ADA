import { checkAnswer } from "./check_answer.js";
import { stopInterval } from "./stop_interval.js";
import {pickedQuestion} from "./pick_question.js";
import {score, updateScore} from "./update_score.js";

let scoring = score;
const modal = document.querySelector(".modal-check");
const validButton = document.querySelector("#valid-button");

// Affiche la modal Know more et met à jour son contenu
export const displayKnowmore = (pQuiz) => {
    scoring = score;
    const gif = document.querySelector(".know-more-gif img");

    let answerGiven = "";
    // Vérifie qu'une réponse a été sélectionnée et la stocke dans answerGiven :
    if (document.querySelector('input:checked')) {
        answerGiven = document.querySelector('input:checked').value;
    }
    modal.style.display = "flex";
    // Vérifie la réponse et affiche un gif et un message selon si vrai ou faux et met à jour le score

    if (checkAnswer(answerGiven) == true) {
        document.querySelector(".modal-check h2").innerText = "Bravo";
        gif.src = pQuiz.gif_true
        scoring++;
        updateScore(scoring);
    } else {
        document.querySelector(".modal-check h2").innerHTML = `Nul(l) </br></br> <span> la réponse était : ${pickedQuestion.correct_answer}</span>`;
        gif.src = pQuiz.gif_false
    }
    // Affiche le Know More
    document.querySelector(".modal-check p").innerText = pickedQuestion.know_more;
    validButton.disabled = true;
    stopInterval();
}