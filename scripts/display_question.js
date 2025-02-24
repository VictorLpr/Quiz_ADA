import { updateProgress } from "./update_progress.js";
import { startCountdown } from "./start_countdown.js";
import { noAnswer } from "./no_answer.js";

const optionsContent = document.querySelector(".options-content");
const currentQuestion = document.querySelector(".quiz .question p");
const logo = document.querySelector(".logo img");
const validButton = document.querySelector("#valid-button");
export let timeOut = () => {};

// Lancée dans game
export const displayQuestion = (pQuiz, pQuestion) => {
    optionsContent.innerHTML = "";
    currentQuestion.innerHTML = "";
    updateProgress();
    startCountdown();
    logo.src = pQuiz.url_logo;
    currentQuestion.innerText = pQuestion.text;
    pQuestion.options.forEach((option, i) => {
        console.log(option)
        optionsContent.insertAdjacentHTML("beforeend", `<label for="option-${i + 1}">
                        <input name="options" type="radio" class="options" id="option-${i + 1}" value="${option}" />
                        <p>${option}</p>
                    </label>`)
    })
    timeOut = setTimeout(noAnswer, 15000);
    document.querySelectorAll(".options").forEach((option) => {
        option.addEventListener("change", () => {
            validButton.disabled = false;
        });
    });
}