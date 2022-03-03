import React from 'react'

export const TaskInput = () => {
  return (
    <div className="task-input">
        <div className="check">
            <div className="check-mark">

            </div>
        </div>
        <form className="new-todo-input">
            <input className="new-task" name="new task" placeholder="Create a new todo..."/>
        </form>
    </div>
  )
}
