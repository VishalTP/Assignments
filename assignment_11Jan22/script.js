const inputs = document.querySelectorAll("input"),
      good = document.getElementById("good"),
      cheap = document.getElementById("cheap"),
      fast = document.getElementById("fast")

const toggle = (element)=>{
    if(good.checked && cheap.checked && fast.checked){
        if(element === good)
            fast.checked = false
        else if(element === cheap)
            good.checked = false
        else
            cheap.checked = false
    }
}

inputs.forEach(input=>{
    input.addEventListener("change", e=>{
        toggle(e.target)
    })
})