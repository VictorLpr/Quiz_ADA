import { stopInterval } from "./stop_interval.js";
import { pickedQuestion, pickedQuiz } from "./pick_question.js";
import { updateSecondes } from "./update_seconds.js";

const modal = document.querySelector(".modal-check");
const validButton = document.querySelector("#valid-button");
const gif = document.querySelector(".know-more-gif img");

// Affiche la modal know more si le délai est dépassé
export const noAnswer = () => {
    validButton.disabled = true;
    modal.style.display = "flex";
    document.querySelector(".modal-check h2").innerHTML = `Trop tard...</br></br> <span> la réponse était : ${pickedQuestion.correct_answer}</span>`;
    gif.src = Object.entries(pickedQuiz)[3][1];
    document.querySelector(".modal-check p").innerText = pickedQuestion.know_more;
    stopInterval();
    updateSecondes(14);
}