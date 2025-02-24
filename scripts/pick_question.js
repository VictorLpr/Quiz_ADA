import { quiz } from "./questions.js";
export let pickedQuiz;
export let pickedQuestion;

// Lancée dans game
export const pickQuestion = (choice) => {
    const quizIndex = Math.floor(Math.random() * choice.length);
    const questionIndex = Math.floor(Math.random() * quiz[choice[quizIndex]].questions.length);
    pickedQuestion = quiz[choice[quizIndex]].questions[questionIndex];
    pickedQuiz = quiz[choice[quizIndex]];
    console.log(pickedQuestion);
    if (pickedQuestion.done == true) {
        pickQuestion(choice);
    } else {
        pickedQuestion.done = true;
        return pickedQuestion;
    }
}