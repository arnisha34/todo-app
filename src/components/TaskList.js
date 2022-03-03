import { Task } from '../components/Task'
import { ToDoFooter } from './ToDoFooter'

export const TaskList = () => {
  return (
      <div className='tasks-list'>
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <ToDoFooter />
      </div>
  )
}
