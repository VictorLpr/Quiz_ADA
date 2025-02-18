import { quiz } from "./questions.js";

const quizContent = document.querySelector(".quiz");
const currentQuestion = document.querySelector(".quiz .question p");
const logo = document.querySelector(".logo img");
const optionsContent = document.querySelector(".options-content");
const validButton = document.querySelector("#valid-button");
const nextButton = document.querySelector("#next-button");
const result = document.querySelector(".result");
const scoreContent = document.querySelector(".result #score");
const resultComment = document.querySelector(".result #resultComment");
const resetButton = document.querySelector(".result #reset");
const modal = document.querySelector(".modal-check");
const turn = 10;
let questionCount = turn;
let score = 0;
let subjectChoices = [];
const themeButtons = document.querySelectorAll('.subject-list button');
const subjectContent = document.querySelector(".subject");
const startButton = document.querySelector("#start");
let pickedQuestion;
let pickedURL;



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
    logo.src = pickedURL;
    currentQuestion.innerText = pickedQuestion.text;
    pickedQuestion.options.forEach((option, i) => {
        console.log(option)
        optionsContent.insertAdjacentHTML("beforeend", `<label for="option-${i+1}">
                        <input name="options" type="radio" class="options" id="option-${i+1}" value="${option}" />
                        <p>${option}</p>
                    </label>`) 
    })
}

const checkAnswer = (answerGiven) => {
    if (answerGiven === pickedQuestion.correct_answer) {
        console.log("gagné")
        return true;
    }
    return false;
}

const displayResult = () => {
    quizContent.style.display = "none";
    result.style.display = "flex";
    scoreContent.innerText = `${score}/${turn}`;
    if (score < turn / 2) {
        resultComment.innerText = "nul(lllll) !!!";
    } else {
        resultComment.innerText = "Champion !";
    }
}

const pickQuestion = () => {
    const quizIndex = Math.floor(Math.random() * subjectChoices.length);
    const questionIndex = Math.floor(Math.random() * quiz[subjectChoices[quizIndex]].questions.length)
    pickedQuestion = quiz[subjectChoices[quizIndex]].questions[questionIndex];
    pickedURL = quiz[subjectChoices[quizIndex]].url_logo;
    console.log(pickedQuestion);
    if (pickedQuestion.done == true) {
        pickQuestion();
    } else {
        pickedQuestion.done = true;
        return pickedQuestion;
    }
}

const gameplay = () => {
    themeChoice();
    startButton.addEventListener("click", () => {
        pickQuestion();
        subjectContent.style.display = "none";
        quizContent.style.display = "flex";
        displayQuestion();
    })
    validButton.addEventListener("click", () => {
        const answerGiven = document.querySelector('input:checked').value;
        modal.style.display = "flex";
        if (checkAnswer(answerGiven) == true) {
            document.querySelector(".modal-check h2").innerText = "Bravo";
            score++;
        } else {
            document.querySelector(".modal-check h2").innerHTML = `Nul(l) </br></br> <span> la réponse était : ${pickedQuestion.correct_answer}</span>`;
        }  
        document.querySelector(".modal-check p").innerText = pickedQuestion.know_more
    })
    nextButton.addEventListener("click", () => {
        modal.style.display = "none";
        if (questionCount === 0) {
            displayResult();
        }
        questionCount--;
        pickQuestion();
        displayQuestion();
    })

}

gameplay();

resetButton.addEventListener('click', () => {
    questionIndex = 0;
    score = 0;
    quizContent.style.display = "flex";
    result.style.display = "none";
    gameplay();
})
