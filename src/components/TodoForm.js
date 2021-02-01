import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.text : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })
  console.log(props.edit)

  const handlerSubmit = (e) => {
    e.preventDefault()

    let todo
    if (props.edit) {
      todo = {
        id: props.edit.id,
        text: input,
      }
    } else {
      todo = {
        id: Math.floor(Math.random() * 10000),
        text: input,
      }
    }

    props.onSubmit(todo)
    setInput('')
  }

  const habdlerChange = (e) => {
    setInput(e.target.value)
  }
  return (
    <form className='todo-form' onSubmit={handlerSubmit}>
      <input
        type='text'
        placeholder={props.edit ? 'Actualizar Tarea' : 'Agregar una Tarea'}
        value={input}
        onChange={habdlerChange}
        name='text'
        className='todo-input'
        ref={inputRef}
      />
      <button className='todo-button'>
        {props.edit ? 'Actualizar Tarea' : 'Agregar una Tarea'}
      </button>
    </form>
  )
}

export default TodoForm
