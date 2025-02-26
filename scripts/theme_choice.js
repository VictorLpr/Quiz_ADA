import { selectTheme } from "./select_theme.js";
import { subjectChoices } from "./game.js";

// Récupère les thèmes sélectionnés et les stocke dans un tableau
export const themeChoice = (btns) => {
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            selectTheme(button, subjectChoices);
        })
    })
    return subjectChoices;
}