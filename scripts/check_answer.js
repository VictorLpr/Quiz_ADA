import {pickedQuestion} from "./pick_question.js";

// Vérifie que la réponse sélectionnée est la bonne
export const checkAnswer = (answerGiven) => {
    if (answerGiven === pickedQuestion.correct_answer) {
        return true;
    }
    return false;
}