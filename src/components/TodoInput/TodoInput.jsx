import React, { useState } from 'react'
import "./TodoInput.css";

const TodoInput = ({ createTodo }) => {
    const [ task, setTask ] = useState('');

    const handleSubmit = (e) => {
        if(!e) {
          return alert("Please enter something!")
        }
        createTodo(task);
        setTask("");
    }

  return (
    <div className="TodoInput">
        <input 
            type="text" 
            placeholder='Enter Task'
            id="task"
            name="task"
            value={task}
            onChange={e => setTask(e.target.value)}    
        />
        <button onClick={() => handleSubmit(task)}>Add Todo</button>
    </div>
  )
}

export default TodoInput