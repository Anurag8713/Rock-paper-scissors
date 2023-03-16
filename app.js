const computerchoicedisplay = document.getElementById('computerchoice')
const userchoicedisplay = document.getElementById('userchoice')
const resultdisplay = document.getElementById('result')
const possiblechoices = document.querySelectorAll('button')
let userchoice
let computerchoice
let result

possiblechoices.forEach(possiblechoice => possiblechoice.addEventListener('click', (e) => {
    userchoice = e.target.id
    userchoicedisplay.innerHTML = userchoice
    generatecomputerchoice()
    generateresult()
}))

function generatecomputerchoice() {
    const randomnumber = Math.floor(Math.random() * 3) + 1
    if(randomnumber === 1) {
        computerchoice = 'rock'
    }
    if(randomnumber === 2) {
        computerchoice = 'paper'
    }
    if(randomnumber === 3) {
        computerchoice = 'scissors'
    }
    computerchoicedisplay.innerHTML = computerchoice   
}

function generateresult() {
    if(userchoice === computerchoice) {
        result = 'its a draw'
    }
    if(userchoice === 'rock' && computerchoice === 'paper') {
        result = 'you lost'
    }
    if(userchoice === 'rock' && computerchoice === 'scissors') {
        result = 'you won'
    }
    if(userchoice === 'paper' && computerchoice === 'rock') {
        result = 'you won'
    }
    if(userchoice === 'paper' && computerchoice === 'scissors') {
        result = 'you lost'
    }
    if(userchoice === 'scissors' && computerchoice === 'rock') {
        result = 'you lost'
    }
    if(userchoice === 'scissors' && computerchoice === 'paper') {
        result = 'you won'
    }

    resultdisplay.innerHTML = result

}