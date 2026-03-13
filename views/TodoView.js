export default class TodoView{

  constructor(){
    this.pendingList = document.getElementById("pendingList")
    this.completedList = document.getElementById("completedList")
  }

  render(todos){

    this.pendingList.innerHTML=""
    this.completedList.innerHTML=""

    todos.forEach(todo=>{

      const li=document.createElement("li")

      li.dataset.id=todo.id

      li.innerHTML=`
        <span class="text">${todo.todo}</span>

        <div class="buttons">
          <button class="toggle">${todo.completed ? "←" : "→"}</button>
          <button class="edit">✏</button>
          <button class="delete">🗑</button>
        </div>
      `

      if(todo.completed){
        this.completedList.appendChild(li)
      }else{
        this.pendingList.appendChild(li)
      }

    })
  }
}