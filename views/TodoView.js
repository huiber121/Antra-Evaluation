export default class TodoView {

  constructor() {
    this.pendingList = document.getElementById("pendingList")
    this.completedList = document.getElementById("completedList")
  }

  render(todos) {

    this.pendingList.innerHTML = ""
    this.completedList.innerHTML = ""

    todos.forEach(todo => {

      const li = document.createElement("li")

      li.dataset.id = todo.id

      const span = document.createElement("span")
      span.className = "text"
      span.textContent = todo.todo

      const buttonsDiv = document.createElement("div")
      buttonsDiv.className = "buttons"

      const editBtn = document.createElement("button")
      editBtn.className = "edit"
      editBtn.textContent = "✏"

      const deleteBtn = document.createElement("button")
      deleteBtn.className = "delete"
      deleteBtn.textContent = "🗑"

      const toggleBtn = document.createElement("button")
      toggleBtn.className = "toggle"
      toggleBtn.textContent = todo.completed ? "←" : "→"

      buttonsDiv.appendChild(editBtn)
      buttonsDiv.appendChild(deleteBtn)
      buttonsDiv.appendChild(toggleBtn)

      if (todo.completed) {
        li.appendChild(toggleBtn)
        li.appendChild(span)
        li.appendChild(buttonsDiv)
      } else {
        li.appendChild(span)
        buttonsDiv.appendChild(toggleBtn)
        li.appendChild(buttonsDiv)
      }

      if (todo.completed) {
        this.completedList.appendChild(li)
      } else {
        this.pendingList.appendChild(li)
      }

    })
  }
}