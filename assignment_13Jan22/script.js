import { questions, answers} from "./questions.js";

const container = document.querySelector(".container"),
      question = document.querySelector(".question p"),
      li = document.querySelectorAll("li"),
      submittedAns =[]
let ul = document.querySelector(".ul"),
    i=0

const loadQuestion = (i)=>{
    question.lastChild.innerText = questions[i].que
    li[0].lastChild.innerText = questions[i].ans.a
    li[1].lastChild.innerText = questions[i].ans.b
    li[2].lastChild.innerText = questions[i].ans.c
    li[3].lastChild.innerText = questions[i].ans.d

}

const clearAns = ()=>{
    for(let i=0; i<4; i++)
        li[i].style.backgroundColor = "white"
        ul.selectedAns =""
}

const selectAnswer = (selectedElement)=>{
    clearAns()
    selectedElement.style.backgroundColor = "#5efc82"   
    ul.selectedAns = selectedElement.firstChild.innerText
}

const showResult= ()=>{
    let count=0
    for(let i=0; i<5; i++)
        if(submittedAns[i] == answers[i])
            count++
    container.innerHTML= `<div class="result">
                          <p>You Got ${count}/5</p>
                          <button onclick="location.reload()">Reload</button>
                          </div>`
}

loadQuestion(0)

container.addEventListener("click", (e)=>{
    if(e.target.nodeName==="LI"){
        selectAnswer(e.target)
    }else if(e.target.nodeName==="BUTTON"){
        submittedAns.push(e.target.previousElementSibling.lastElementChild.selectedAns)
        clearAns()
        i++
        if(i>4)
            showResult()
        else{
            if(i==4){
                e.target.style.backgroundColor = "#00c853"
                e.target.innerText= "Submit" 
            }            
            loadQuestion(i) 
        }
    }
})