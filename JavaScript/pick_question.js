import {subjectChoices, pickedQuestion, pickedQuiz} from "./game.js";
import { quiz } from "./questions.js";


// Sélectionne une question au hasard parmis les thèmes choisis
// export const pickQuestion = (subjectChoices, pickedQuestion, pickedQuiz) => {
//     const quizIndex = Math.floor(Math.random() * subjectChoices.length);
//     const questionIndex = Math.floor(Math.random() * quiz[subjectChoices[quizIndex]].questions.length)
//     pickedQuestion = quiz[subjectChoices[quizIndex]].questions[questionIndex];
//     pickedQuiz = quiz[subjectChoices[quizIndex]];
//     console.log(pickedQuestion);
//     if (pickedQuestion.done == true) {
//         pickQuestion();
//     } else {
//         pickedQuestion.done = true;
//         return pickedQuestion, pickedQuiz;
//     }
// }