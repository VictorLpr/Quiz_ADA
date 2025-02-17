import { quiz } from "./questions.js";

const currentQuestion = document.querySelector(".quiz .question p");
const optionsContent = document.querySelector(".options-content");
const validButton = document.querySelector("#valid-button");
const nextButton = document.querySelector("#next-button");
const modal = document.querySelector(".modal-check");
const questionIndex = 0;
const displayQuestion = () => {
    currentQuestion.innerText = quiz.quiz_1[questionIndex].text;
    quiz.quiz_1[questionIndex].options.forEach((option, i) => {
        optionsContent.insertAdjacentHTML("beforeend", `<label for="option-${i+1}">
                        <input name="options" type="radio" class="options" id="option-${i+1}" value="${option}" />
                        <p>${option}</p>
                    </label>`) 
    })
}

const checkAnswer = (answerGiven) => {
    if (answerGiven === quiz.quiz_1[questionIndex].correct_answer) {
        console.log("gagné")
        return true;
    }
    return false;
}

const gameplay = () => {
    validButton.addEventListener("click", () => {
        const answerGiven = document.querySelector('input:checked').value;
        modal.style.display = "flex";
        if (checkAnswer(answerGiven) == true) {
            document.querySelector(".modal-check h2").innerText = "Bravo";
        } else {
            document.querySelector(".modal-check h2").innerHTML = `Nul(l) </br></br> <span> la réponse était : ${quiz.quiz_1[questionIndex].correct_answer}</span>`;
        }  
        document.querySelector(".modal-check p").innerText = quiz.quiz_1[questionIndex].know_more
    })
}

displayQuestion();
gameplay();
