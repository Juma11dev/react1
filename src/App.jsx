

// Component (JSX, JS, CSS)


import TodoAdd from "./components/todo-add/TodoAdd"
import TodoHeader from "./components/todo-header/TodoHeader"
import TodoList from "./components/todo-list/TodoList"

const App = () => {
  return (
    <div className="container">
      <TodoHeader />
      <TodoAdd />
      <TodoList />
    </div>
  )

}


export default App

// npm run dev = Go live