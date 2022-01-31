const baloonContainer = document.querySelector(".baloon-container"),
      message = document.querySelector(".message")

let count =0, length =25

const randomNumberGenerator = ()=>{
    return Math.floor(Math.random()*256)
}

const generateColor = ()=>{
    const red = randomNumberGenerator()
    const green = randomNumberGenerator()
    const blue = randomNumberGenerator()
    return `rgb(${red}, ${blue}, ${green})`
}

for(let i=0; i<length; i++){
    const color = generateColor()
    const baloon = document.createElement("div")
    baloon.classList.add("baloon")
    baloon.innerHTML = "POP!"
    baloon.style.backgroundColor =color 
    baloon.style.color = color
    baloonContainer.appendChild(baloon)
}

const baloons = document.querySelectorAll(".baloon")
baloons.forEach(baloon => {
    baloon.addEventListener("mouseover", ()=>{
        count++
        baloon.style.backgroundColor = "transparent"
        baloon.style.pointerEvents = "none"
        if(count===length){
            baloonContainer.parentElement.style.display = "none"
            message.style.display = "block"
        }           
    })
})