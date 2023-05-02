const hole = document.getElementsByClassName('board__hole')
let totalPoints = 0

export function randomNumberOfMonsters(){
    let randomMonsterNumber = Math.floor(Math.random() * 3) +1
    console.log(randomMonsterNumber)
    randomTypeMonsters(randomMonsterNumber)
    
}

function randomTypeMonsters(randomMonsterNumber){
    while(randomMonsterNumber >= 1){
        let randomNumberImg = Math.floor(Math.random() * 9) +1
        let randomHole = Math.floor(Math.random() * 12)
        console.log(randomHole)
        hole[randomHole].style.background = `center / cover no-repeat url("../assets/img/monster0${randomNumberImg}.png")`
        PointsPerMonster(randomNumberImg)
        randomMonsterNumber--
    }
}

function PointsPerMonster(randomTypeofMonster){
    let points = 0
    switch(randomTypeofMonster){
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