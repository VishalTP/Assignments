const h1 = document.querySelector("h1")
const input = document.querySelector("input")

const text = "We Love Programming..."
let limit=1
let time=1000
function displayText(){
    if(limit===text.length){
        h1.innerText = ""
        limit=0
    }
    h1.innerText = text.slice(0, limit)
    limit++;
    setTimeout(displayText, time)
}

input.addEventListener("change", ()=>{
    time = 1000/input.value
})

displayText()