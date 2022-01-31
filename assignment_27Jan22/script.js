const input = document.querySelector("input"),
      submit = document.querySelector("button"),
      remaining = document.querySelector(".remaining"),
      result = document.querySelector(".result"),
      guesses = document.querySelector(".guesses")

let guessArr = [], remainingCount = 10, 
    randomNumber = Math.ceil(Math.random()*100)

    console.log(randomNumber)
const newGame= ()=>{
    location.reload()
}

const inputStyle = ()=>{
    input.style.pointerEvents = "none"
    input.style.backgroundColor = "lightblue"
}

const displayResult = (message)=>{
    result.firstElementChild.innerHTML = message
}

const startNewGame = ()=>{
    result.lastElementChild.innerHTML = `<h2 onClick="newGame()">Start A new Game</h2>`
}

const validate = (value)=>{
    if(value && value>=0 && value<=100){
        guessArr.push(value)
        guesses.innerHTML = guessArr
        remainingCount--
        remaining.innerHTML = remainingCount
        verifyInput(value)
        if(remainingCount==0){
            inputStyle()
            input.blur()
            displayResult("Sorry! Game Over")
            startNewGame()
        }
    }
}

const verifyInput = (value)=>{
    if(+value===randomNumber){
        displayResult("You got it right..")
        inputStyle()
        remaining.innerHTML = ' '
        input.blur()
        startNewGame()
    }else if(+value<randomNumber)
        displayResult("Too low! Try a higher number")
    else
        displayResult("Too High! Try a smaller number")
}

submit.addEventListener("click", ()=>{
    let value = input.value
    input.value = ""
    input.focus()
    validate(value)
})

