import { themeChoice } from "./theme_choice.js";
import { pickQuestion, pickedQuiz, pickedQuestion } from "./pick_question.js";
import { displayQuestion, timeOut } from "./display_question.js";
import { displayKnowmore } from "./display_know_more.js";
import { displayResult } from "./display_result.js";
import { updateProgress } from "./update_progress.js";
import { updateScore } from "./update_score.js";
import { quiz } from "./questions.js";

const quizContent = document.querySelector(".quiz");
const validButton = document.querySelector("#valid-button");
const nextButton = document.querySelector("#next-button");
const result = document.querySelector(".result");
const resetButton = document.querySelector(".result #reset");
const modal = document.querySelector(".modal-check");
const playerName = document.querySelector("#name");
const scoreBoardLogo = document.querySelector(".score-board-link")
export const turn = 4;
export let questionCount = turn;
export let subjectChoices = [];
let logoChoices = [];
const themeButtons = document.querySelectorAll('.subject-list button');
const subjectContent = document.querySelector(".subject");
const startButton = document.querySelector("#start");
let gameNumber = 1;
if (localStorage.getItem("gameNumber") > 1) {
    gameNumber = parseInt(localStorage.getItem("gameNumber")) + 1
}
// 3 gros soucis :

// pickedQuestion => je l'ai créé dans le fichier qui la met à jour et après dans les autres,
// ce n'est que de la lecture donc pas de problème de affectation à une constante



// update secondes :
// updates_secondes => permet de mettre à jour la variable seconde dans un seul fichier 
// et de juste appeller cette fonction sans import de la variable seconde



// update score :
// update_score => permet de mettre à jour la variable score dans un seul fichier
// appel de la fonction updateScore()
// Problème de reset, le score s'accumulais

// let scoring = score;
// const modal = document.querySelector(".modal-check");
// const validButton = document.querySelector("#valid-button");

// export const displayKnowmore = () => {
//     scoring = score;        il falait juste que je réasigne la variable scoring de transition avec le score mis à jour à 0 par le btn reset
//     let answerGiven = "";


// Début du jeu
// Choix du thème parmis des thèmes proposés
themeChoice(themeButtons, subjectChoices);


// Lance le jeu en cliquant sur c'est parti
startButton.addEventListener("click", () => {
    if (playerName.value == "") {
        playerName.focus();
    } else {
        // choisit la premier question
        subjectChoices.forEach((choice) => {
            logoChoices.push(quiz[choice].url_logo)
        })
        let player = {
            name: playerName.value,
            score: 0,
            id: new Date(),
            theme: logoChoices
        }
        console.log(player)
        localStorage.setItem(gameNumber++, JSON.stringify(player));
        pickQuestion(subjectChoices);
        subjectContent.style.display = "none";
        quizContent.style.display = "flex";
        scoreBoardLogo.style.display = "none";

        updateScore(0);
        console.log(updateScore(0))
        displayQuestion(pickedQuiz, pickedQuestion);
    }
})


validButton.addEventListener("click", () => {
    clearInterval(timeOut);
    displayKnowmore(pickedQuiz);
})


nextButton.addEventListener("click", () => {
    modal.style.display = "none";
    if (questionCount === 1) {
        scoreBoardLogo.style.display = "block";
        displayResult(gameNumber - 1);
        return;
    }
    questionCount--;
    pickQuestion(subjectChoices);
    displayQuestion(pickedQuiz, pickedQuestion);
})


resetButton.addEventListener('click', () => {
    console.log("yo" + subjectChoices);
    questionCount = turn;
    updateScore(0);
    updateProgress();
    subjectChoices = [];
    logoChoices = [];
    console.log("yoyo" + subjectChoices);

    themeButtons.forEach((button) => {
        button.removeAttribute('selected');
    })
    subjectContent.style.display = "block";
    result.style.display = "none";
    console.log(subjectChoices)
})