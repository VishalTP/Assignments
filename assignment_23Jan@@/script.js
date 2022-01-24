const up = document.querySelector(".up"),
      down = document.querySelector(".down"),
      left = document.querySelector(".left"),
      right = document.querySelector(".right")

let leftVal = 300, rightVal = 0

const setValue = (lValue, rValue)=>{
    leftVal =lValue
    rightVal = rValue
}

const translate = ()=>{
    left.style.transform =`translateY(-${leftVal}vh)`
    right.style.transform =`translateY(-${rightVal}vh)` 
}

up.addEventListener("click", ()=>{
    if(leftVal>0)
        setValue(leftVal-100, rightVal+100)
    else
        setValue(300, 0)
    translate()
})

down.addEventListener("click", ()=>{
    if(leftVal<300)
        setValue(leftVal+100, rightVal-100)
    else
        setValue(0, 300)
    translate()
})
