import { quiz } from "./questions.js";

const quizContent = document.querySelector(".quiz");
const currentQuestion = document.querySelector(".quiz .question p");
const optionsContent = document.querySelector(".options-content");
const validButton = document.querySelector("#valid-button");
const nextButton = document.querySelector("#next-button");
const result = document.querySelector(".result");
const scoreContent = document.querySelector(".result #score");
const resultComment = document.querySelector(".result #resultComment");
const resetButton = document.querySelector(".result #reset");
const modal = document.querySelector(".modal-check");
let questionIndex = 0;
let score = 0;
let subjectChoices = [];
const themeButtons = document.querySelectorAll('.subject-list button');
const startButton = document.querySelector("#start");



const themeChoice = () => {
    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.hasAttribute('selected') == false) {
                button.setAttribute('selected', '');
                subjectChoices.push(button.dataset.value);
                console.log('et les sélectionnés sont : ' + subjectChoices)
            } else {
                button.removeAttribute('selected');
                subjectChoices.splice(subjectChoices.indexOf(button.dataset.value),1);
                console.log('hello ' + subjectChoices)
            }
        })
    })
    return subjectChoices;
}

const displayQuestion = () => {
    optionsContent.innerHTML = "";
    currentQuestion.innerHTML = "";
    currentQuestion.innerText = quiz.quiz_1[questionIndex].text;
    quiz.quiz_1[questionIndex].options.forEach((option, i) => {
        console.log(option)
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

const displayResult = () => {
    quizContent.style.display = "none";
    result.style.display = "flex";
    scoreContent.innerText = `${score}/${quiz.quiz_1.length}`;
    if (score < (quiz.quiz_1.length / 2)) {
        resultComment.innerText = "nul(lllll) !!!";
    } else {
        resultComment.innerText = "Champion !";
    }
}

const gameplay = () => {
    themeChoice()

    displayQuestion()
    validButton.addEventListener("click", () => {
        const answerGiven = document.querySelector('input:checked').value;
        modal.style.display = "flex";
        if (checkAnswer(answerGiven) == true) {
            document.querySelector(".modal-check h2").innerText = "Bravo";
            score++;
        } else {
            document.querySelector(".modal-check h2").innerHTML = `Nul(l) </br></br> <span> la réponse était : ${quiz.quiz_1[questionIndex].correct_answer}</span>`;
        }  
        document.querySelector(".modal-check p").innerText = quiz.quiz_1[questionIndex].know_more
    })
    nextButton.addEventListener("click", () => {
        modal.style.display = "none";
        if (questionIndex === (quiz.quiz_1.length - 1)) {
            displayResult();
        }
        questionIndex++;
        displayQuestion();
    })

    resetButton.addEventListener('click', () => {
        questionIndex = 0;
        score = 0;
        quizContent.style.display = "flex";
        result.style.display = "none";
        displayQuestion();
    })
}

gameplay();
