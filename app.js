const board = document.querySelector('.game-board')
const squareNumberArray = []

for (let i = 0; i < 16; i++) {
    let square = document.createElement('div')
    square.className = `square`
    square.id = i
    board.append(square)
}

const allSquares = document.querySelectorAll('.square')
allSquares.forEach((square) => {
    let squareNumber = square.getAttribute('id')
    squareNumberArray.push(squareNumber)
})

function assignSquareANumber() {
    const randomSquare = Math.floor(Math.random() * squareNumberArray.length)
    let theChosenOne = document.getElementById(randomSquare)
    console.log(theChosenOne.innerHTML)
    if (theChosenOne.innerHTML === '') {
        theChosenOne.append(2)
    }
}

document.onkeydown = function checkKey(e) {
    console.log(e.keyCode)
    if (e.keyCode === 37) {
        console.log('left')
    } else if (e.keyCode === 38) {
        console.log('up')
    } else if (e.keyCode === 39) {
        console.log('right')
    } else if (e.keyCode === 40) {
        console.log('down')
    }
    assignSquareANumber()
};

// probably need to create four arrays
// one for each row of squares
// then will be able to more easily maneuver numbers
