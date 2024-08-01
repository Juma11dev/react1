import './TodoAdd.css'

function TodoAdd (){
    return (
        <div className='btndiv'>
            <button className='addtask'>Add task</button>
            <select  name="" id="">
                <option value="">   All  </option>
                <option value="">   Done  </option>
                <option value="">   Active  </option>
            </select>
        </div>
    )
}


export default TodoAdd;