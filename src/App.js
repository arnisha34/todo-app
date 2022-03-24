import { useEffect, useState } from 'react'
import { TaskInput } from "./components/TaskInput"
import { TaskList } from "./components/TaskList"
import { Status } from "./components/Status"
import ThemeContext from './components/Context'
import { collection, onSnapshot} from "firebase/firestore"; 
import db from './utils/firebase'


const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];

function App() {
  
  const [theme, setTheme] = useState({
    color: "light",
  });

  const [tasks, setTasks] = useState(data)
  const [filterStatus, setFilterStatus] = useState("all")
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  useEffect(() => {
    
    const handleFilter = () => { 
      if(filterStatus === "active"){
          setFilteredTasks(tasks.filter(task => task.status === false))
      }else if(filterStatus === "completed"){
          setFilteredTasks(tasks.filter((task)=> task.status === true))
      }else if(filterStatus === "all"){
        setFilteredTasks(tasks)
      }
   }
    handleFilter()
    
  },[tasks, filterStatus])

  const changeTheme = () => {
    setTheme({
      color: theme.color === "light" ? "dark" : "light",
    })
  }

  const clearCompleted = ()=> {
    setTasks(tasks.filter((task)=> !task.status))
    setFilterStatus("all")
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={`App ${theme.color}`}>
        <div className="todo-container">
          <div className="todo-header">
            <h1>ToDo</h1>
            <img src={theme.color === "dark" ? "images/icon-sun.svg" : "images/icon-moon.svg"} className="theme-toggle" alt="sun" onClick={changeTheme}/>
          </div>
          <div className={`todo-body ${theme.color}`}>
            <TaskInput tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks} filterStatus={filterStatus} setFilterStatus={setFilterStatus} filteredTasks={filteredTasks}/>
          </div>
          <div className='todo-footer'>
            <div className='items-left'>
                <span>{tasks.length} items left</span>
            </div>
            <div className='status desktop'>
              <Status filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
            </div>
            <div className='clear'>
                <span onClick={clearCompleted}>Clear Completed</span>
            </div>
          </div>
          <div className="todo-footer mobile">
            <Status filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
