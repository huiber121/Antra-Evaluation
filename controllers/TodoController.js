export default class TodoController {

  constructor(model, view) {

    this.model = model
    this.view = view

    this.input = document.getElementById("todoInput")
    this.addBtn = document.getElementById("addBtn")

    this.init()
  }

  async init() {

    await this.model.getTodos()

    this.view.render(this.model.todos)

    this.addBtn.addEventListener("click", () => this.addTodo())

    document.body.addEventListener("click", (e) => this.handleClick(e))
  }

  async addTodo() {

    const text = this.input.value.trim()

    if (!text) return

    await this.model.addTodo(text)

    this.view.render(this.model.todos)

    this.input.value = ""
  }

  async handleClick(e) {

    const li = e.target.closest("li")

    if (!li) return

    const id = Number(li.dataset.id)

    if (e.target.classList.contains("delete")) {
      await this.model.deleteTodo(id)
    }

    if (e.target.classList.contains("toggle")) {

      const todo = this.model.todos.find(t => t.id === id)

      await this.model.updateTodo(id, {
        completed: !todo.completed
      })
    }

    if (e.target.classList.contains("edit")) {
      const span = e.target.parentElement.previousElementSibling
      const currentText = span.textContent

      const input = document.createElement("input")
      input.value = currentText
      input.className = span.className

      span.replaceWith(input)
      input.focus()

      const finishEdit = async () => {
        const newText = input.value.trim()
        if (newText && newText !== currentText) {
          await this.model.updateTodo(id, { todo: newText })
        }
        this.view.render(this.model.todos)
      }

      input.addEventListener("blur", finishEdit)
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          input.blur()
        }
      })

      return
    }

    this.view.render(this.model.todos)
  }
}