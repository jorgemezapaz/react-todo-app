import './App.css'
import TodoList from './components/TodoList'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const notifyOk = (text) => {
    toast.success(text, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div className='todo-app'>
      <TodoList alertOk={notifyOk} />
      <ToastContainer />
    </div>
  )
}

export default App
