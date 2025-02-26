import { quiz } from "./questions.js";
export let pickedQuiz;
export let pickedQuestion;

// Sélectionne une question au hasard dans les thèmes choisis
export const pickQuestion = (choice) => {
    const quizIndex = Math.floor(Math.random() * choice.length);
    const questionIndex = Math.floor(Math.random() * quiz[choice[quizIndex]].questions.length);
    pickedQuestion = quiz[choice[quizIndex]].questions[questionIndex];
    pickedQuiz = quiz[choice[quizIndex]];
    if (pickedQuestion.done == true) {
        pickQuestion(choice);
    } else {
        pickedQuestion.done = true;
        return pickedQuestion;
    }
}