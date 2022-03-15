import { Task } from '../components/Task'

export const TaskList = ({tasks, setTasks, filteredTasks}) => {
  return (
    <div className='tasks-list'>
       {filteredTasks.map(task => <Task key={task.id} tasks={tasks} setTasks={setTasks} task={task} filteredTasks={filteredTasks}/>)}
    </div>
  )
}
