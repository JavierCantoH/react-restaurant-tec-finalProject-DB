// show all todos
export const getTodos = () => fetch("http://localhost:3001/todo").then(res => res.json())
//create new todo item
export const createTodo = (todo) => fetch("http://localhost:3001/createtodo", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
// update todo item
export const updateTodo = (todo, id) => fetch(`http://localhost:3001/todo/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(todo)
})  
// update todo item
export const getTodo = (id) => fetch(`http://localhost:3001/todo/${id}`).then(res => res.json())