import './TodoListItem.css'

const TodoListItem = () => {
    return (


        <div className='flex'>
            <div>
                <input type="checkbox" />
            </div>
            <div className='todo-name'>
                <h3>Lorem  🧸</h3>

                <p>2024</p>
            </div>
            <div>
                
                <button className='btn-remove'>  <i className='bi bi-trash3'>  </i></button>
                <button className='btn-edit'>  <i className='bi bi-pen'></i> </button>


            </div>
        </div>

    )
}

export default TodoListItem