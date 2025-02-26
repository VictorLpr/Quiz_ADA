
const scoreBoard = document.querySelector(".score-board table tbody");
let gameNumber = localStorage.getItem("gameNumber");
let players =[];

// Stocke le local storage dans un tableau
for (let i = 1; i <= gameNumber; i++) {
    players.push(JSON.parse(localStorage.getItem(i)));
    let player = JSON.parse(localStorage.getItem(i))
}

// Tri le tableau en fonction du score des joueurs
players.sort((b, a) => a.score - b.score);

// Affiche le top 5
players.forEach((player, i) => {
    if (i < 5) {        
        scoreBoard.insertAdjacentHTML("beforeend", `<tr data-index="${i}">
        <th class="player-name">${player.name}</th>
        <td class="player-score">${player.score}</td>
        <td class="themes"></td>
    </tr>`
        )
    
        const scoreBoardThemes = document.querySelector(`.score-board table tbody [data-index="${i}"] .themes`);
    
        player.theme.forEach(themeURL => {
            scoreBoardThemes.insertAdjacentHTML("beforeend", `<img src="${themeURL}" alt="">`);
        })
    }
});