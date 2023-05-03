const hole = document.getElementsByClassName('board__hole')
let totalPoints = 0

export function randomNumberOfMonsters(){
    const randomMonsterNumber = Math.floor(Math.random() * 3) +1
    randomTypeMonsters(randomMonsterNumber)
}

function randomTypeMonsters(randomMonsterNumber){
    while(randomMonsterNumber >= 1){
        const randomNumberImg = Math.floor(Math.random() * 9) +1
        const randomHole = Math.floor(Math.random() * 12)

        hole[randomHole].style.background = `center / cover no-repeat url("../assets/img/monster0${randomNumberImg}.png")`
        hole[randomHole].classList.add('class',`hole-occupied`)
        hole[randomHole].setAttribute('id',`hole-${randomHole}`)
        randomMonsterNumber--
    }
}

function listenIfWhack(holeOccupied, monster){
    // console.log(holeOccupied)
    // console.log(monster)
    PointsPerMonster(monster)
    deathOfMonster(holeOccupied)
}

function PointsPerMonster(monster){
    let points = 0
    switch(monster){
        case 1 :
            points = 1
            break;
        case 2 :
            points = 1
            break;
        case 3 :
            points = 1
            break;
        case 4 :
            points = 2
            break;
        case 5 :
            points = 2
            break;
        case 6 :
            points = 2
            break;
        case 7 :
            points = 3
            break;
        case 8 :
            points = 3
            break;
        case 9 :
            points = 5
            break;
        default :
            points = 1
            break;
    }
    counterOfPoints(points)
}

function counterOfPoints(points){
    const pointsEmplacement = document.getElementById("score__points")
    totalPoints += points
    pointsEmplacement.innerHTML = totalPoints
}

function deathOfMonster(holeOccupied){
    // console.log(holeOccupied)
}

export function cleanTheBoard(){
    for (let i=0; i < hole.length; i++){
        hole[i].style.background = "#F1F1E7"
        hole[i].classList.remove('class',`hole-occupied`)
        hole[i].removeAttribute('id')
    }
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('hole-occupied')){
        console.log(e)
        listenIfWhack(e.target.id)
    }
})