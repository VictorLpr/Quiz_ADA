import { selectTheme } from "./select_theme.js";
import { subjectChoices } from "./game.js";

// Lancée dans game
export const themeChoice = (btns) => {
    // Pour chaque bouton thème, écoute le click
    btns.forEach((button) => {
        button.addEventListener('click', () => {
            // Au click, on enregistre les thèmes
            selectTheme(button, subjectChoices);
        })
    })
    return subjectChoices;
}