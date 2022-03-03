import { useState } from 'react'
import { TaskInput } from "./components/TaskInput"
import { TaskList } from "./components/TaskList"
import ThemeContext from './components/Context'

function App() {
  
  const [theme, setTheme] = useState({
    color: "light",
  });

  const changeTheme = () => {
    setTheme({
      color: theme.color === "light" ? "dark" : "light",
    })
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
            <TaskInput />
            <TaskList />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
