const button = document.querySelector("button")
const container = document.querySelector(".container")
const starting = document.querySelector(".starting")
const score = document.querySelector(".score")
const body = document.querySelector("body")
const winner = document.querySelector(".winner")

let count, c

const randomMargin = ()=>{
    return Math.floor(Math.random()*90)
}

const createCircle = ()=>{
    const circle = document.createElement("div")
    circle.classList.add("circle")
    circle.style.top = `${randomMargin()}%`
    circle.style.left = `${randomMargin()}%`
    body.appendChild(circle)
    let time1=Date.now()

    circle.addEventListener("click", ()=>{
        let time2 = Date.now()
        count++
        score.firstElementChild.innerHTML = `It took you ${(time2-time1)/1000} sec to click`
        score.style.display = "block"
        score.lastElementChild.firstElementChild.innerHTML = count
        deleteCircle()
        if(count<5)
            showCircle()
        else{
            winner.firstElementChild.innerHTML = `Congratulations... Tou won the game`
            winner.style.display = "block"
            button.style.display = "inline"
        }
    })
}

const deleteCircle = ()=>{
    const circle = document.querySelector(".circle")
    circle.remove()
    clearTimeout(c)
}

const showCircle = ()=>{
    setTimeout(()=>{

        if(flag===1)
            starting.style.display = "none"
        createCircle()
        c = setTimeout(()=>{
            const circle = document.querySelector(".circle")
            if(circle)
                deleteCircle()
            score.firstElementChild.innerHTML = "You did not click in 2 seconds"
            score.style.display = "block"
            winner.firstElementChild.innerHTML = `Sorry... Tou lost the game`
            winner.style.display = "block"
            button.style.display = "inline"
        }, 2000)
        
    }, Math.random()*4000)
}

let flag=0
button.addEventListener("click", ()=>{
    container.style.display = "none"
    button.style.display = "none"
    starting.style.display = "inline-block"
    winner.style.display = "none"
    score.style.display = 'none'
    count=0
    score.lastElementChild.firstElementChild.innerHTML = count
    flag=1
    showCircle()
})