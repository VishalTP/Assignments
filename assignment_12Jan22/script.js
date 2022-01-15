const container = document.querySelector(".container")

const randomNumber = ()=>{
    return Math.floor(Math.random()*256)
}

const colorGenerator = ()=>{
    let red = randomNumber()
    let green = randomNumber()
    let blue = randomNumber()
    return `rgb(${red}, ${green}, ${blue})`
}

const setColor = (e)=>{
    let color = colorGenerator()
    e.backgroundColor = color
    e.boxShadow = `0 0 2px ${color}`
}
const removeColor = (e)=>{
    e.backgroundColor= "#1d1d1d";
    e.boxShadow = "0 0 2px black"
}

for(let i=0; i<800; i++){
    let color = document.createElement("div")
    color.classList.add("color")
    container.append(color)
    color.addEventListener("mouseover", e=>{
        setColor(e.target.style)
    })
    color.addEventListener("mouseout", e=>{
        removeColor(e.target.style)
    })
}



