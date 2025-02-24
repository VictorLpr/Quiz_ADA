import { checkAnswer } from "./check_answer.js";
import { stopInterval } from "./stop_interval.js";
import {pickedQuestion} from "./pick_question.js";
import {secondes} from "./update_seconds.js";
import {score, updateScore} from "./update_score.js";

let scoring = score;
const modal = document.querySelector(".modal-check");
const validButton = document.querySelector("#valid-button");

export const displayKnowmore = () => {
    scoring = score;
    let answerGiven = "";
    if (document.querySelector('input:checked')) {
        answerGiven = document.querySelector('input:checked').value;
    }
    modal.style.display = "flex";
    if (checkAnswer(answerGiven) == true) {
        document.querySelector(".modal-check h2").innerText = "Bravo";
        scoring++;
        updateScore(scoring)
    } else {
        document.querySelector(".modal-check h2").innerHTML = `Nul(l) </br></br> <span> la réponse était : ${pickedQuestion.correct_answer}</span>`;
    }
    document.querySelector(".modal-check p").innerText = pickedQuestion.know_more;
    validButton.disabled = true;
    console.log("tralalalala");
    stopInterval(secondes);
}