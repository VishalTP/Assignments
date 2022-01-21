const level = document.querySelector(".level"),
      remaining = document.querySelector(".remaining"),
      small = document.querySelectorAll(".small"),
      large = document.querySelector(".large")

const noOfSmallCups=small.length
console.log(noOfSmallCups)

const fillLargeCup= index=>{
  let percentage = ((index+1)/noOfSmallCups)*100
  level.style.height= `${percentage}%`
  remaining.style.height = `${100-percentage}%`
  level.firstElementChild.innerText = `${percentage}%`
  remaining.firstElementChild.innerText = `${2-.02*percentage}L`
}

const toggleCups = (index)=>{
  let nextIndex=index+1
  if((index==(noOfSmallCups-1) && small[index].classList.contains("full")) || (small[index].classList.contains("full")&& !small[nextIndex].classList.contains("full"))){
    small[index].style.color = '#0000FF'
    small[index--].classList.remove("full")
  }
  else{
    small.forEach((smallCup, currentIndex)=>{   
      if(currentIndex<=index && !smallCup.classList.contains("full")){
        smallCup.classList.add("full")
        smallCup.style.color = 'white'
      }
      else if(currentIndex>index && smallCup.classList.contains("full")){
        smallCup.classList.remove("full")
        smallCup.style.color = '#0000FF'
      }
    })
  }
  fillLargeCup(index)
}
      
small.forEach((smallCup, index)=>{
  smallCup.addEventListener("click", e=> toggleCups(index))
})