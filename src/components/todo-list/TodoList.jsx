import TodolistItem from '../todo-list-item/TodoListItem'
import './TodoList.css'

const TodoList = () => {
    return (
        <div className='list'>
            <TodolistItem/>
            <TodolistItem/>
            <TodolistItem/>
        </div>
    )
}

export default TodoList