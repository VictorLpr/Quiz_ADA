const startButton = document.querySelector("#start");

export const selectTheme = (btn, choice) => {
    if (btn.hasAttribute('selected') == false) {
        // si il n'est pas encore sélectionné, on le sélectionne
        // Ajout de l'attribut selected sur le bouton
        // Ajout au tableau des thèmes sélectionnés
        btn.setAttribute('selected', '');
        startButton.disabled = false;
        choice.push(btn.dataset.value);
        console.log('et les sélectionnés sont : ' + choice)
    } else {
        // si il est déjà encore sélectionné, on le désélectionne
        // Suppression de l'attribut selected sur le bouton
        // Suppression au tableau des thèmes sélectionnés
        btn.removeAttribute('selected');
        choice.splice(choice.indexOf(btn.dataset.value), 1);
        if (choice.length == 0) {
            startButton.disabled = true;
        }
        console.log('et les sélectionnés sont : ' + choice)
    }
    return choice;
}