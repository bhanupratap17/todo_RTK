
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos/'

function App() {
  
  return (
    <>
      <h1 className="text-1xl font-bold underline">Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App