import TodoModel from "./models/TodoModel.js"
import TodoView from "./views/TodoView.js"
import TodoController from "./controllers/TodoController.js"

const model = new TodoModel()
const view = new TodoView()

new TodoController(model, view)