
export const ToDoFooter = () => {
  
  return (
    <div className='todo-footer'>
        <div className='items-left'>
            <span>5 items left</span>
        </div>
        <div className='status'>
            <span className="status-all active">All</span>
            <span className="status-active">Active</span>
            <span className="status-completed">Completed</span>
        </div>
        <div className='clear'>
            <span>Clear Completed</span>
        </div>
    </div>
  )
}
