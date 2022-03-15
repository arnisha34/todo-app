import { useState } from 'react'
import CheckedIcon from '../images/icon-check.svg'
import CrossIcon from '../images/icon-cross.svg'


export const Task = ({task, tasks, setTasks}) => {

  const [checked, setChecked] = useState(task)
  
  const completed = checked.status ? "completed" : "";
  
  const checkIcon =  checked.status ? <img src={CheckedIcon} alt="check" /> : "";
  
  const markCompleted = () => {

    setChecked({...checked, status: !checked.status})

    const updatedTasks = tasks.map(item => item.id === task.id ? {...item, status: !item.status} : item)

    setTasks(updatedTasks)
    
  }

  const deleteTask = (id) => {
    const deletedTask = tasks.filter((item, index) => item.id === id ? tasks.splice(index, 1) : item)
    setTasks(deletedTask)
  }

  return (
      <div className={`task-item ${completed}`} onClick={markCompleted}>
        <div className="check">
            <div className="check-mark">
                {checkIcon}
            </div>
        </div>
        <p>{task.text}</p>
        <div className='delete hide' onClick={() => deleteTask(task.id)}>
          <img src={CrossIcon} alt="cross"/>
        </div>
      </div>
  )
}
