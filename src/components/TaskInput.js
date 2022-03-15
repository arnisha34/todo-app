import { useState } from 'react'
export const TaskInput = ({tasks, setTasks}) => {

  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const taskID = tasks.map(task => task.id);
    
    const newTask = {
      id: Math.random(...taskID) + 1,
      text: input,
      status: false
    }

    setTasks([...tasks, newTask])
    
    setInput("")
  }

  return (
    <div className="task-input">
        <div className="check">
            <div className="check-mark">
            </div>
        </div>
        <form className="new-todo-input" onSubmit={handleSubmit}>
            <input className="new-task" name="task input" value={input} placeholder="Create a new todo..." onChange={handleChange} />
        </form>
    </div>
  )
}
