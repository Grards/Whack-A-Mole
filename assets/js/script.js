import { randomNumberOfMonsters, cleanTheBoard } from "./modules/randomMonster.js";

let startingGame
let refreshGame

const start = document.getElementById("button__start")
start.addEventListener('click', (e) => {
    refreshGame = setInterval(cleanTheBoard,3000)
    startingGame = setInterval(randomNumberOfMonsters,3000)
    start.setAttribute('disabled', true)
    start.classList.add('button__start--disabled')
    start.textContent = "Started"
})