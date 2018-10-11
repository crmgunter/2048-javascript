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
    console.log(randomSquare)
    let theChosenOne = document.getElementById(randomSquare)
    theChosenOne.append('2')
}

document.body.addEventListener('click', function() {
    console.log('hey')
    assignSquareANumber()
})
