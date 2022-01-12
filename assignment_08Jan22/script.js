const circle = document.querySelectorAll(".circle"),
      prev = document.getElementById("prev"),
      next = document.getElementById("next"),
      progress = document.querySelector(".progress"),
      length = circle.length 
let active =0;
circle[0].classList.add("activecircle")

next.addEventListener("click", ()=>{
    circle[++active].classList.add("activecircle")
    progress.style.width = `${(active*100)/(length-1)}%`
    if(active==length-1)
        next.disabled = true
    else{
        prev.disabled = false
    }
})

prev.addEventListener("click", ()=>{
    circle[active--].classList.remove("activecircle")
    progress.style.width = `${(active*100)/(length-1)}%`
    if(active==0)
        prev.disabled = true
    else{
        next.disabled = false
        // circle[active+1].style.transitionDelay= "0s"
        // circle[active+1].style.transitionProperty= "none"
        
    }
})

