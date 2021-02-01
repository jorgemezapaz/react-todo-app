import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList({ alertOk }) {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) return

    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    alertOk('🚀 Nueva Tarea Guardada!')
  }

  const updateTodo = (updatedTodo) => {
    if (!updatedTodo.text || /^\s*$/.test(updatedTodo.text)) return

    setTodos((prev) =>
      prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    )
    alertOk('👌 Tarea actualizada!')
  }

  const removeTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updateTodos)
    alertOk('😲 Tarea Eliminada!')
  }
  const completeTodo = (id) => {
    let status
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        status = !todo.isComplete
        todo.isComplete = !todo.isComplete
      }
      return todo
    })

    setTodos(updateTodos)
    if (status) {
      alertOk('❤️ Tarea Completa!')
    }
  }

  return (
    <div>
      <h1>Qué haras hoy?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        updateTodo={updateTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default TodoList
