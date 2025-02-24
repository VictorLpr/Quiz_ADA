
const scoreBoard = document.querySelector(".score-board table tbody");
let gameNumber = localStorage.getItem("gameNumber");
let players =[]

for (let i = 1; i <= gameNumber; i++) {
    players.push(JSON.parse(localStorage.getItem(i)));
    let player = JSON.parse(localStorage.getItem(i))
}

players.sort((b, a) => a.score - b.score);

players.forEach((player) => {
    scoreBoard.insertAdjacentHTML("beforeend", `<tr>
    <th class="player-name">${player.name}</th>
    <td class="player-score">${player.score}</td>
    
    <td class="thèmes"></td>
</tr>`
    )
})
