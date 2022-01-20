const input = document.querySelector("input"),
      ul = document.querySelector("ul"),
      form = document.querySelector("form")

let todoList = JSON.parse(localStorage.getItem("todos"))

console.log(todoList)
if(todoList)
    todoList.forEach(todo=>{

        addTodo(todo)
    })

form.addEventListener("submit", e=>{
    e.preventDefault()
    addTodo()
})


function addTodo(todo){
    let text=input.value
    if(todo){
        text=todo.text
    }
    if(text){
        const li = document.createElement("li")
        li.innerText=text
        ul.append(li)
        if(todo && todo.completed)
            li.classList.add("done")
        input.value = ""
        li.addEventListener("click", ()=>{
            li.classList.toggle("done")
            updateList()
        })

        li.addEventListener("contextmenu", e=>{
            e.preventDefault()
            li.remove()
            updateList()
        })
        updateList()
    }
}

function updateList(){
    let todoList = []
    let lists = document.querySelectorAll("li")
    lists.forEach(list=>{
        todoList.push({
            text: list.innerText,
            completed: list.classList.contains("done")

        })
    })
    localStorage.setItem("todos", JSON.stringify(todoList))

}

