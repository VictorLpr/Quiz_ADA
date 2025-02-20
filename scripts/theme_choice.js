const themeButtons = document.querySelectorAll('.subject-list button');
// Permet de sélectionner ou désélectionner un ou plusieurs thèmes de quiz
// Stock le choix dans un tableau subjetChoices
export const themeChoice = (subjectChoices) => {
    themeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.hasAttribute('selected') == false) {
                button.setAttribute('selected', '');
                subjectChoices.push(button.dataset.value);
            } else {
                button.removeAttribute('selected');
                subjectChoices.splice(subjectChoices.indexOf(button.dataset.value), 1);
            }
        })
    })
    return subjectChoices;
}