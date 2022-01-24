const inputs = document.querySelectorAll("input")

const setFocus=(index)=>{
    setTimeout(()=>{
        inputs[index].focus()
    },10)
}

inputs.forEach((input, index)=>{
    input.addEventListener("keydown", e=>{
        if(e.key<=9 && e.key>=0){
            input.value=""
            if(index<inputs.length-1){
                setFocus(index+1)
            }else
                setTimeout(()=>{
                    input.blur()
                },10)     
        }
        else if(e.key ==="Backspace" && index>0){
            input.value=""
            setFocus(index-1)
        }
    })
})