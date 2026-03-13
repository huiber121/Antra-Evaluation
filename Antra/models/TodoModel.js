export default class TodoModel {

  constructor(){
    this.todos=[]
  }

  async getTodos(){

    const res = await fetch("https://dummyjson.com/todos")
    const data = await res.json()

    this.todos = data.todos.slice(0,10)
    return this.todos
  }

  async addTodo(text){

    const res = await fetch("https://dummyjson.com/todos/add",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify({
        todo:text,
        completed:false,
        userId:1
      })
    })

    const newTodo = await res.json()

    this.todos.push(newTodo)

    return newTodo
  }

  async deleteTodo(id){

    await fetch(`https://dummyjson.com/todos/${id}`,{
      method:"DELETE"
    })

    this.todos = this.todos.filter(t=>t.id!==id)
  }

  async updateTodo(id,data){

    await fetch(`https://dummyjson.com/todos/${id}`,{
      method:"PATCH",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify(data)
    })

    this.todos = this.todos.map(t =>
      t.id===id ? {...t,...data} : t
    )
  }
}