import { stopInterval } from "./stop_interval.js";
import {pickedQuestion} from "./pick_question.js";
import { updateSecondes } from "./update_seconds.js";

const modal = document.querySelector(".modal-check");
const validButton = document.querySelector("#valid-button");

export const noAnswer = () => {
    validButton.disabled = true;
    console.log("tralululu");
    modal.style.display = "flex";
    document.querySelector(".modal-check h2").innerHTML = `Trop tard...</br></br> <span> la réponse était : ${pickedQuestion.correct_answer}</span>`;
    document.querySelector(".modal-check p").innerText = pickedQuestion.know_more;
    stopInterval();
    updateSecondes(14);
}