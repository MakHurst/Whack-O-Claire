

// code for the whack a mole game

const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeLeft = document.getElementById('time')
const score = document.getElementById('score')

let result = 0 
let hitPosition
let currentTime = 60
function randomSquare() {

    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
    // getting the id of whatever the random square is, saving it to hitPos1ition

}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {

    let timerId = null
    timerId = setInterval(randomSquare, 1000) //miliseconds
}
 // now that we have made a function for this action we can attatch it to a button

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert("Game Over! You scored a " + result)
        quit()
    }

}
let countDownTimerId = setInterval(countDown, 1000)

// 