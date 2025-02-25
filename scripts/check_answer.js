import {pickedQuestion} from "./pick_question.js";

export const checkAnswer = (answerGiven) => {
    if (answerGiven === pickedQuestion.correct_answer) {
        console.log("gagné");
        return true;
    }
    return false;
}