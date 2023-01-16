const round = document.getElementById('round')
const square = document.getElementById('square')

document.addEventListener('keydown', function() {
    jump()
})

let jump = function() {
    if (round.classList != 'jump') {
        round.classList.add('jump')
    }
    setTimeout( function() {
        round.classList.remove('jump')
    }, 999)
}

let alive = setInterval ( function() {
    let roundTop = parseInt(window.getComputedStyle(round).getPropertyValue('top'))
    let squareLeft = parseInt(window.getComputedStyle(square).getPropertyValue('left'))

    if (squareLeft < 100 && squareLeft > 0 && roundTop >= 300) {
        alert('GAME OVER')
    }
}, 10)