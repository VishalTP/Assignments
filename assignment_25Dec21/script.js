let display = document.getElementById("display")
let cells =  Array.from(document.getElementsByClassName("cell"));

let check = (char)=>{
   if(char=="+" || char=="-" || char=="*" || char=="/"){
      return true
   }
}

cells.forEach(cell=>{
   cell.addEventListener("click", (e)=>{

      if(display.innerHTML=="" && e.target.innerHTML=="0"){
            display.innerHTML==""
      }else{
         switch(e.target.innerHTML){
            case 'C':
               display.innerHTML=""
               break
            case '←':
               display.innerHTML=display.innerHTML.slice(0,-1)
               break
            case "=":
               try{
                  if(check(display.innerText[display.innerText.length-1])){
                     display.innerText=display.innerText.slice(0,-1)
                  }
                  if(display.innerText!="")
                     display.innerHTML= eval(display.innerHTML)
               }catch(err){
                  display.innerHTML = "Error"
               }
               break
            case '+': case "-": case "*": case "/":
               if(check(display.innerText[display.innerText.length-1])){
                  display.innerText=display.innerText.slice(0,-1)
               }
            default:
               display.innerHTML+=e.target.innerHTML
         }
      }
   })
})


