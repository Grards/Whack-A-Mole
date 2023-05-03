import { randomNumberOfMonsters } from "./modules/randomMonster.js";


const start = document.getElementById("button__start")
start.addEventListener('click', (e) => {
    randomNumberOfMonsters()
    start.setAttribute('disabled', true)
    start.classList.add('button__start--disabled')
    start.textContent = "Started"
})