const buttons = document.querySelectorAll("button")

function audioPaly(audio){
    for(button of buttons){
        console.dir(button.firstElementChild.pause())
    }
    audio.play()
}

buttons.forEach(button =>{
    button.addEventListener("click", (e)=>{
       audioPaly(e.target.firstElementChild)
    })
})