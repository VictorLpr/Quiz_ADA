import { updateProgress } from "./update_progress.js";
import { startCountdown } from "./start_countdown.js";
import { noAnswer } from "./no_answer.js";

const optionsContent = document.querySelector(".options-content");
const currentQuestion = document.querySelector(".quiz .question p");
const logo = document.querySelector(".logo img");
const validButton = document.querySelector("#valid-button");
export let timeOut = () => {};

// Affiche une question
export const displayQuestion = (pQuiz, pQuestion) => {
    // Vide l'HTML
    optionsContent.innerHTML = "";
    currentQuestion.innerHTML = "";
    updateProgress();
    startCountdown();
    // Affiche le logo, la question et les réponsee possibles
    logo.src = pQuiz.url_logo;
    currentQuestion.innerText = pQuestion.text;
    pQuestion.options.forEach((option, i) => {
        console.log(option)
        optionsContent.insertAdjacentHTML("beforeend", `<label for="option-${i + 1}">
                        <input name="options" type="radio" class="options" id="option-${i + 1}" value="${option}" />
                        <p>${option}</p>
                    </label>`)
    })
    // Permet l'animation de l'apparition des réponses
    setTimeout(() => {
        const labels = document.querySelectorAll("label")
        labels.forEach(label => {
            label.classList.add("load")
        })
    },200)
    // Lance un délai de 15sec pour répondre à la question 
    timeOut = setTimeout(noAnswer, 15000);
    // Déverrouille le bouton valider une fois une option sélectionnée
    document.querySelectorAll(".options").forEach((option) => {
        option.addEventListener("change", () => {
            validButton.disabled = false;
        });
    });
}