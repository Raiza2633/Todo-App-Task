import React, { useState } from 'react';
import "./Todo.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleUpdate = (e) => {
    if(!e) return alert("Please enter something!")
    updateTodo(id, editTask);
    setIsEditing(false)
  }

  return (
    <TransitionGroup className={completed ? "Todo completed" : "Todo"}>
      {isEditing ? (
        <CSSTransition key="editing" timeout={500} classNames="form">
          <div className="TodoEditForm">
            <input
              type="text"
              name="task"
              value={editTask}
              onChange={e => setEditTask(e.target.value)}
            />
            <button onClick={() => handleUpdate(editTask)}>Save</button>
          </div>
        </CSSTransition>
      ) : (
        <CSSTransition key="normal" timeout={500} classNames="task-text">
          <li className="Todo-task" onClick={toggleTodo}>
            {task}
          </li>
        </CSSTransition>
      )}

      <div className="Todo-buttons">
        <button onClick={() => setIsEditing(true)}>
          <i className="fas fa-pen" />
        </button>
        <button onClick={removeTodo}>
          <i className="fas fa-trash" />
        </button>
      </div>
    </TransitionGroup>
  )
}

export default Todo