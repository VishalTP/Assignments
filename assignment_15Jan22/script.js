const time = document.querySelector(".stopwatch h1"),
      controls = document.querySelectorAll(".controls div"),
      play = document.querySelector(".play"),
      pause = document.querySelector(".pause"),
      reset = document.querySelector(".reset")

let initialTime = Date.now(),
    paused =true,
    intervalId, 
    elapseTime=0

const currentState = (dPause, dPlay, pausedState)=>{
    pause.style.display = dPause
    play.style.display = dPlay
    paused =pausedState
}

const calculateTime = (startTime)=>{
    let currentTime = Date.now()
    elapseTime = currentTime - startTime
    let hh = Math.floor((elapseTime)/(3600000)),
        mm = Math.floor((elapseTime)%(3600000)/(1000*60)),
        ss = Math.floor((elapseTime)%(1000*60)/1000),
        ms = (currentTime - startTime)%(1000*60)%1000

    let formattedHH = hh.toString().padStart(2,"0"),
        formattedMM = mm.toString().padStart(2,"0"),
        formattedSS = ss.toString().padStart(2,"0"),
        formattedMS = ms.toString().padStart(3,"0")
    time.innerHTML = `${formattedHH}:${formattedMM}:${formattedSS}:${formattedMS}`
}

const startTimer = ()=>{
    let startTime = Date.now()-elapseTime
    intervalId= setInterval(() => {
        calculateTime(startTime)
    }, 1);
    
}
const pauseTimer = ()=>{
    clearInterval(intervalId)
}

const resetTimer = ()=>{
    clearInterval(intervalId)
    time.innerHTML = "00:00:00:000"
    elapseTime = 0
}

controls.forEach(control=>{
    control.addEventListener("click", e=>{
        if(e.target.className==="reset"){
            currentState("none", "block", true)
            resetTimer()
        }else{
            if(paused){
                currentState("block", "none", false)
                startTimer()
            }else{
                currentState("none", "block", true)
                pauseTimer()
            }
        }
    })
})

