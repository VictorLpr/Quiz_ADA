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
const progressValue = document.querySelector(".progress-value");
const turn = 4;
let questionCount = turn;
let score = 0;
let subjectChoices = [];
const themeButtons = document.querySelectorAll('.subject-list button');
const subjectContent = document.querySelector(".subject");
const startButton = document.querySelector("#start");
let pickedQuestion;
let pickedQuiz;

const selectTheme = (btn) => {
    if (btn.hasAttribute('selected') == false) {
        btn.setAttribute('selected', '');
        subjectChoices.push(btn.dataset.value);
        console.log('et les sélectionnés sont : ' + subjectChoices)
    } else {
        btn.removeAttribute('selected');
        subjectChoices.splice(subjectChoices.indexOf(btn.dataset.value), 1);
        console.log('hello ' + subjectChoices)
    }
}
const themeChoice = () => {
    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            selectTheme(button);
        })
    })
    return subjectChoices;
}

const updateProgress = () => {
    progressValue.style.transform = `scaleX(${(turn - questionCount) / (turn)})`;
}

const displayQuestion = () => {
    optionsContent.innerHTML = "";
    currentQuestion.innerHTML = "";
    updateProgress();
    logo.src = pickedQuiz.url_logo;
    currentQuestion.innerText = pickedQuestion.text;
    pickedQuestion.options.forEach((option, i) => {
        console.log(option)
        optionsContent.insertAdjacentHTML("beforeend", `<label for="option-${i + 1}">
                        <input name="options" type="radio" class="options" id="option-${i + 1}" value="${option}" />
                        <p>${option}</p>
                    </label>`)
    })
    setTimeout(noAnswer, 5000);
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
    pickedQuiz = quiz[subjectChoices[quizIndex]];
    console.log(pickedQuestion);
    if (pickedQuestion.done == true) {
        pickQuestion();
    } else {
        pickedQuestion.done = true;
        return pickedQuestion;
    }
}
const noAnswer = () => {
    modal.style.display = "flex";
    document.querySelector(".modal-check h2").innerHTML = `Trop tard...</br></br> <span> la réponse était : ${pickedQuestion.correct_answer}</span>`;
    document.querySelector(".modal-check p").innerText = pickedQuestion.know_more;
}

const displayKnowmore = () => {
    const answerGiven = document.querySelector('input:checked').value;
    modal.style.display = "flex";
    if (checkAnswer(answerGiven) == true) {
        document.querySelector(".modal-check h2").innerText = "Bravo";
        score++;
    } else {
        document.querySelector(".modal-check h2").innerHTML = `Nul(l) </br></br> <span> la réponse était : ${pickedQuestion.correct_answer}</span>`;
    }
    document.querySelector(".modal-check p").innerText = pickedQuestion.know_more;
}

// Début du jeu
// Choix du thème parmis des thèmes proposés
themeChoice();

// Lance le jeu en cliquant sur c'est parti
startButton.addEventListener("click", () => {
    // choisit la premier question
    pickQuestion();
    subjectContent.style.display = "none";
    quizContent.style.display = "flex";
    displayQuestion();
})
validButton.addEventListener("click", () => {
    displayKnowmore();
})
nextButton.addEventListener("click", () => {
    modal.style.display = "none";
    if (questionCount === 1) {
        displayResult();
        return;
    }
    questionCount--;
    pickQuestion();
    displayQuestion();
})

resetButton.addEventListener('click', () => {
    questionCount = turn;
    updateProgress();
    score = 0;
    subjectChoices = [];
    themeButtons.forEach((button) => {

        button.removeAttribute('selected');
    })
    subjectContent.style.display = "block";
    result.style.display = "none";
})