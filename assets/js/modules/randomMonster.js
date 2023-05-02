const hole = document.getElementsByClassName('board__hole')

export function randomMonsters(){
    let randomNumberImg = Math.floor(Math.random() * 9) +1
    let randomHole = Math.floor(Math.random() * 12)
    hole[randomHole].style.backgroundImage = `url("../assets/img/monster0${randomNumberImg}.png")`
}